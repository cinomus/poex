import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../models/users/dto/create-user.dto';
import config from 'config';
import { ResCookieDto } from './dto/res-cookie.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registration(userDto: CreateUserDto): Promise<ResCookieDto> {
    // захешировать пароль
    // проверить есть ли юзер с таким username
    // сохранить в бд если нет и вернуть ошибку если есть
    //
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const candidate = await this.usersService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new UnauthorizedException({
        message: 'Пользователь с таким email уже существует.',
      });
    }

    const user = await this.usersService.createUser({
      ...userDto,
      password: hashedPassword,
    });

    const accessTokenCookie = await this.getCookieWithJwtAccessToken(
      user.email,
    );
    const refreshTokenCookie = await this.getCookieWithJwtRefreshToken(
      user.email,
    );

    await this.usersService.setCurrentTokens(
      refreshTokenCookie.token,
      accessTokenCookie.token,
      user.email,
    );

    return {
      user,
      accessTokenCookie: accessTokenCookie,
      refreshTokenCookie: refreshTokenCookie,
    };
  }

  async login(userDto: CreateUserDto): Promise<ResCookieDto> {
    const user = await this.validateUser(userDto);

    const accessTokenCookie = await this.getCookieWithJwtAccessToken(
      user.email,
    );
    const refreshTokenCookie = await this.getCookieWithJwtRefreshToken(
      user.email,
    );

    await this.usersService.setCurrentTokens(
      refreshTokenCookie.token,
      accessTokenCookie.token,
      user.email,
    );

    return {
      user,
      accessTokenCookie: accessTokenCookie,
      refreshTokenCookie: refreshTokenCookie,
    };
  }

  async refresh(refreshToken: string): Promise<ResCookieDto> {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    const validate = await this.validateToken(refreshToken);
    const user = await this.usersService.findByRefreshToken(refreshToken);
    console.log(!validate, !user);
    if (!validate) {
      // если токен не валиден и юзера с таким токеном нет, то выбрасываем ошибку и удаляем токен из бд?
      if (user) {
        console.log(
          'auth.service токен не валиден но юзер с таким токеном есть',
        );
        await this.usersService.removeRefreshToken(refreshToken);
      }
      console.log('auth.service токен не валиден и нет юзера с таким токеном ');
      throw new UnauthorizedException();
    }

    const accessTokenCookie = await this.getCookieWithJwtAccessToken(
      user.email,
    );
    const refreshTokenCookie = await this.getCookieWithJwtRefreshToken(
      user.email,
    );

    await this.usersService.setCurrentTokens(
      refreshTokenCookie.token,
      accessTokenCookie.token,
      user.email,
    );

    return {
      user,
      accessTokenCookie: accessTokenCookie,
      refreshTokenCookie: refreshTokenCookie,
    };
  }

  public getCookiesForLogOut() {
    return [
      'authentication=;  Path=/; Max-Age=0',
      'refresh=; HttpOnly; Path=/; Max-Age=0',
    ];
  }

  private async getCookieWithJwtAccessToken(email: string) {
    const payload = { email };

    const token = await this.generateToken(payload, 'access');
    const cookie = `Authentication=${token};  Path=/; Max-Age=${config.get(
      'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
    )}`;
    const options = {
      domain: '0f57-109-201-110-81.ngrok.io',
      httpOnly: false,
      maxAge: 1 * 1 * 60 * 60 * 1000,
      // expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    };
    return {
      options,
      token,
    };
  }

  private async getCookieWithJwtRefreshToken(email: string) {
    const payload = { email };
    const token = await this.generateToken(payload, 'refresh');
    const cookie = `Refresh=${token}; HttpOnly; Path=/auth; Max-Age=${config.get(
      'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
    )}`;
    const options = {
      domain: '0f57-109-201-110-81.ngrok.io',
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      // expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    };
    return {
      options,
      token,
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.usersService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Некорректный email или пароль.',
      });
    }
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    // if (user && passwordEquals) {
    //   const doc = JSON.parse(JSON.stringify(user));
    //   const { password, ...result } = doc;
    //   return result;
    // }
    return user;
    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }

  private async validateToken(refreshToken: string): Promise<string> {
    try {
      const validatedData = await this.jwtService.verify(refreshToken, {
        secret: config.get('JWT_REFRESH_TOKEN_SECRET'),
      });
      return validatedData;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  private async generateToken(payload, type: string): Promise<string> {
    let options = {};
    if (type === 'access') {
      options = {
        secret: config.get('JWT_ACCESS_TOKEN_SECRET'),
        expiresIn: `${config.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s`,
      };
    } else if (type === 'refresh') {
      options = {
        secret: config.get('JWT_REFRESH_TOKEN_SECRET'),
        expiresIn: `${config.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`,
      };
    } else throw new Error('Передан неправильный тип токена в функцию.');

    return this.jwtService.sign(payload, options);
  }
}
