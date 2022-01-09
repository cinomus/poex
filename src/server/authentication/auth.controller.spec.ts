import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../models/users/users.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { Role } from '../models/roles/schemas/role.schema';
import { Exclude } from 'class-transformer';
import { ResCookieDto } from './dto/res-cookie.dto';
import * as mongoose from 'mongoose';
import { Response } from 'express';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UserResp } from '../models/users/serializers/user.serializer';

describe('AuthController', () => {
  let module: TestingModule;
  let controller: AuthController;

  const mockEmail = 'user@mail.com';
  const mockPassword = 'password';
  const mockRes = {};
  const mockResponse = new UserResp({
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
  });
  const mockServiceResponse: ResCookieDto = {
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
    accessTokenCookie: {
      token: 'accessToken',
      options: {
        httpOnly: false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
    },
    refreshTokenCookie: {
      token: 'refreshToken',
      options: {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
    },
  };
  const mockUser = {
    id: '1234',
    type: 'user',
  };

  const mockRequest = {
    // headers: {
    //   authorization: 'Bearer ' + mockLoginResponse.accessToken,
    // },
    user: mockUser,
  };

  const mockAuthService: Partial<AuthService> = {
    login: jest.fn(async (payLoad): Promise<ResCookieDto> => {
      return mockServiceResponse;
    }),
    registration: jest.fn(async (payLoad): Promise<ResCookieDto> => {
      return mockServiceResponse;
    }),
    getCookiesForLogOut: jest.fn(() => {
      return [
        'authentication=;  Path=/; Max-Age=0',
        'refresh=; HttpOnly; Path=/; Max-Age=0',
      ];
    }),
  };
  const mockUsersService: Partial<UsersService> = {
    removeRefreshToken: jest.fn(),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Login', () => {
    // it('should raise exception when passing login and password equals undefined', async () => {
    //   const loginData = {
    //     email: undefined,
    //     password: undefined,
    //   };
    //
    //   try {
    //     await controller.loginApi(loginData, mockRequest, mockRes);
    //   } catch (error) {
    //     console.log(error);
    //     expect(error).toBeInstanceOf(UnauthorizedException);
    //     expect(error.response.statusCode).toEqual(401);
    //   }
    // });
    // it('should login when login and password are correct', async () => {
    //   const loginData = {
    //     email: mockEmail,
    //     password: mockPassword,
    //   };
    //
    //   const result = await controller.loginApi(loginData, mockRequest, mockRes);
    //
    //   expect(mockAuthService.login).toBeCalled();
    //   expect(result).toEqual(mockResponse);
    // });
  });
  describe('Register', () => {
    it('should raise exception when passing login and password equals undefined', async () => {
      const loginData = {
        email: undefined,
        password: undefined,
      };

      try {
        await controller.registrationApi(loginData, mockRequest, mockRes);
      } catch (error) {
        console.log(error);
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.response.statusCode).toEqual(401);
      }
    });

    it('should register when login and password are correct', async () => {
      const loginData = {
        email: mockEmail,
        password: mockPassword,
      };

      const result = await controller.registrationApi(
        loginData,
        mockRequest,
        mockRes,
      );

      expect(mockAuthService.registration).toBeCalled();
      expect(result).toEqual(mockResponse);
    });
  });
  describe('logout', () => {
    it('should logout a user', async () => {
      await controller.logoutApi(mockRequest, mockRes);

      expect(mockUsersService.removeRefreshToken).toBeCalled();
    });
  });
});
