import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Render,
  Req,
  Res,
  UnauthorizedException,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../models/users/users.service';
import { CreateUserDto } from '../models/users/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TokenRes } from './entities/tokenRes.entity';
import { Response, Request } from 'express';
import { IUser } from '../../shared/types/types';
import { UserResp } from '../models/users/serializers/user.serializer';
import { toObject } from '../common/helpers/toTsObject.helper';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Render('auth/register')
  @Get('register')
  async registration() {
    console.log('register');
    return {};
  }

  @Render('auth/login')
  @Get('login')
  async login() {
    console.log('login');
    return {};
  }

  @ApiOperation({ summary: 'Регистрация пользователя.' })
  @ApiResponse({ status: 200, type: TokenRes })
  @Post('registration')
  async registrationApi(
    @Body() createUserDto: CreateUserDto,
    @Req() request: any,
    @Res({ passthrough: true }) response,
  ): Promise<UserResp> {
    const { user, accessTokenCookie, refreshTokenCookie } =
      await this.authService.registration(createUserDto);
    // await this.emailConfirmationService.sendVerificationLink(
    //   registrationData.email,
    // );

    response.cookie(
      'authentication',
      accessTokenCookie.token,
      accessTokenCookie.options,
    );
    response.cookie(
      'refresh',
      refreshTokenCookie.token,
      refreshTokenCookie.options,
    );

    return new UserResp(await toObject(user));
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'Авторизация пользователя.' })
  @ApiResponse({ status: 200, type: TokenRes })
  @Post('login')
  async loginApi(
    @Body() createUserDto: CreateUserDto,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<UserResp> {
    if (!createUserDto.email || !createUserDto.password) {
      throw new UnauthorizedException();
    }
    const { user, accessTokenCookie, refreshTokenCookie } =
      await this.authService.login(createUserDto);
    response.cookie(
      'authentication',
      accessTokenCookie.token,
      accessTokenCookie.options,
    );
    response.cookie(
      'refresh',
      refreshTokenCookie.token,
      refreshTokenCookie.options,
    );
    return new UserResp(await toObject(user));
  }

  @ApiOperation({ summary: 'Разлогинивание пользователя.' })
  @ApiResponse({ status: 200 })
  @Post('logout')
  async logoutApi(
    @Req() req,
    @Res({ passthrough: true }) response,
  ): Promise<void> {
    console.log('logout');
    const token = req.cookies.refresh;
    req.res.setHeader('Set-Cookie', this.authService.getCookiesForLogOut());
    await this.usersService.removeRefreshToken(token);

    return;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'Обновление access token-а.' })
  @ApiResponse({
    status: 200,
    type: TokenRes,
  })
  @Post('refresh')
  async refreshApi(
    @Req() req,
    @Res({ passthrough: true }) response,
  ): Promise<UserResp> {
    const refreshToken = req.cookies.refresh;
    const { user, accessTokenCookie, refreshTokenCookie } =
      await this.authService.refresh(refreshToken);
    response.cookie(
      'authentication',
      accessTokenCookie.token,
      accessTokenCookie.options,
    );
    response.cookie(
      'refresh',
      refreshTokenCookie.token,
      refreshTokenCookie.options,
    );
    return new UserResp(await toObject(user));
  }
}
