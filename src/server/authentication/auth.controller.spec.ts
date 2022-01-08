import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../models/users/users.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { Role } from '../models/roles/schemas/role.schema';
import { Exclude } from 'class-transformer';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    registrationApi: jest.fn((dto) => {
      return {
        email: dto.email,
        _id: Date.toString(),
        banned: true,
        roles: {},
        password: dto.password,
        reg_time: Date,
        refreshToken: Date.toString(),
        accessToken: Date.toString(),
        oldestAccessTokens: [],
      };
    }),
  };
  const mockUsersService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, UsersService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should register a user', async () => {
    await expect(
      controller.registrationApi(
        {
          email: 'test@email.com',
          password: 'pass123',
          country: { lang: 'ru', countryName: 'Russia' },
          sub: true,
        },
        {},
        {},
      ),
    ).toEqual({
      email: 'test@email.com',
      _id: expect.any(Number),
      banned: true,
      roles: {},
      password: 'pass123',
      reg_time: expect.any(Date),
      refreshToken: expect.any(String),
      accessToken: expect.any(String),
      oldestAccessTokens: [],
    });
  });
});
