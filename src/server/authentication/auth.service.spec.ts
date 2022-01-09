import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ResCookieDto } from './dto/res-cookie.dto';
import { UsersService } from '../models/users/users.service';
import { User } from '../models/users/schemas/user.schema';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtVerifyOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

interface ITokenResponse {
  token: string;
  options: {
    httpOnly: boolean;
    maxAge: number;
  };
}

describe('Auth Service', () => {
  let module: TestingModule;
  let service: AuthService;

  const mockEmail = 'user@mail.com';
  const mockPassword = 'password';
  const mockSameEmail = 'sameUser@mail.com';
  const mockSamePassword = 'password';
  const mockEmptyEmail = '';
  const mockEmptyPassword = '';
  const mockUndefinedEmail = undefined;
  const mockUndefinedPassword = undefined;
  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxleGE1ODUyQG1haWwucnUiLCJpYXQiOjE2NDE3NDAzMDYsImV4cCI6MTY0NDM2ODMwNn0.uK6tBEtO397ylbzTzIo2N_bDqAthP1v3155rgJRjXiI';
  const mockIncorrectToken = 'incorrectToken';
  const mockUndefinedToken = undefined;

  const userServiceAccessTokenResponse = {
    token: 'token',
    options: {
      httpOnly: false,
      maxAge: 3600000,
    },
  };
  const userServiceRefreshTokenResponse = {
    token: 'token',
    options: {
      httpOnly: true,
      maxAge: 2592000000,
    },
  };

  const userServiceResponse: User = {
    email: mockEmail,
    _id: 'id',
    banned: true,
    roles: [],
    password: mockPassword,
    reg_time: `${new Date()}`,
    refreshToken: 'accessToken',
    accessToken: 'refreshToken',
    oldestAccessTokens: [],
    country: { countryName: 'Russia', lang: 'ru' },
  };
  const authServiceResponse: ResCookieDto = {
    user: {
      email: mockEmail,
      _id: 'id',
      banned: true,
      roles: [],
      password: mockPassword,
      reg_time: `${new Date()}`,
      refreshToken: 'accessToken',
      accessToken: 'refreshToken',
      oldestAccessTokens: [],
      country: { countryName: 'Russia', lang: 'ru' },
    },
    accessTokenCookie: userServiceAccessTokenResponse,
    refreshTokenCookie: userServiceRefreshTokenResponse,
  };

  const mockConfigUsersService: Partial<UsersService> = {
    createUser: jest.fn(async (): Promise<User> => {
      return userServiceResponse;
    }),
    getUserByEmail: jest.fn(async (email): Promise<User> => {
      if (email === 'sameUser@mail.com') {
        return { ...userServiceResponse, email: email };
      }
      return null;
    }),
    setCurrentTokens: jest.fn(),
    findByRefreshToken: jest.fn(async (token): Promise<User> => {
      if (token === 'incorrectToken') {
        return null;
      }
      return { ...userServiceResponse, refreshToken: token };
    }),
    removeRefreshToken: jest.fn(async (): Promise<any> => {
      return userServiceResponse;
    }),
  };

  const mockConfigJwtService: Partial<JwtService> = {
    sign: jest.fn(() => {
      return 'token';
    }),
    verify: jest.fn((token: string, options: JwtVerifyOptions): any => {
      if (token === mockToken) {
        return { token };
      }
      return null;
    }),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: mockConfigUsersService,
        },
        {
          provide: JwtService,
          useValue: mockConfigJwtService,
        },
      ],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  describe('Registration', () => {
    it('should raise exception when passing login and password equals undefined', async () => {
      const registerData = {
        email: mockUndefinedEmail,
        password: mockUndefinedPassword,
      };

      try {
        await service.registration(registerData);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.status).toEqual(400);
      }
    });
    it('should raise exception when passing login and password equals empty', async () => {
      const registerData = {
        email: mockEmptyEmail,
        password: mockEmptyPassword,
      };

      try {
        await service.registration(registerData);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.status).toEqual(400);
      }
    });
    it('should raise exception when passing login and password equals incorrect', async () => {
      const registerData = {
        email: mockEmail,
        password: mockPassword,
      };

      try {
        await service.registration(registerData);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(error.status).toEqual(401);
      }
    });
    it('should register when login and password are correct', async () => {
      const registerData = {
        email: mockEmail,
        password: mockPassword,
      };

      const result = await service.registration(registerData);
      expect(mockConfigUsersService.getUserByEmail).toBeCalled();
      expect(mockConfigUsersService.createUser).toBeCalled();
      expect(result).toEqual(authServiceResponse);
    });
  });
  describe('Login', () => {
    it('should raise exception when passing login and password equals undefined', async () => {
      const loginData = {
        email: mockUndefinedEmail,
        password: mockUndefinedPassword,
      };

      try {
        await service.login(loginData);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(error.status).toEqual(401);
      }
    });
    it('should raise exception when passing login and password equals empty', async () => {
      const loginData = {
        email: mockEmptyEmail,
        password: mockEmptyPassword,
      };

      try {
        await service.login(loginData);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(error.status).toEqual(401);
      }
    });
    it('should raise exception when passing login and password equals incorrect', async () => {
      const loginData = {
        email: mockEmail,
        password: mockPassword,
      };

      try {
        await service.login(loginData);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(error.status).toEqual(401);
      }
    });
    it('should login when login and password are correct', async () => {
      const loginData = {
        email: mockEmail,
        password: mockPassword,
      };

      const result = await service.registration(loginData);
      expect(mockConfigUsersService.getUserByEmail).toBeCalled();
      expect(mockConfigUsersService.createUser).toBeCalled();
      expect(result).toEqual(authServiceResponse);
    });
  });

  describe('Refresh', () => {
    it('should raise exception when passing token undefined', async () => {
      try {
        await service.refresh(mockUndefinedToken);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(error.status).toEqual(401);
      }
    });
    it('should raise exception when passing token incorrect', async () => {
      try {
        await service.refresh(mockIncorrectToken);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(error.status).toEqual(401);
      }
    });
    it('should refresh tokens when login and password are correct', async () => {
      const result = await service.refresh(mockToken);
      expect(mockConfigUsersService.getUserByEmail).toBeCalled();
      expect(mockConfigUsersService.createUser).toBeCalled();
      expect(result).toEqual({
        ...authServiceResponse,
        user: { ...authServiceResponse.user, refreshToken: mockToken },
      });
    });
  });
});
