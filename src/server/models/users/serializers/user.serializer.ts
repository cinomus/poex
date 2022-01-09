import { Exclude, Type } from 'class-transformer';
import { Role } from '../../roles/schemas/role.schema';
import { User } from '../schemas/user.schema';
import { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ICountry } from '../../../../shared/types/types';

export class UserResp {
  @ApiProperty({
    example: 'userLogins, email@example.com',
    description: 'Логин пользователя',
  })
  email: string;
  @ApiProperty({
    example: '12344dsvsas14gs',
    description: 'Id пользователя в системе.',
  })
  _id: ObjectId | string;
  @ApiProperty({
    example: 'true',
    description: 'Значение true or false блокировки пользователя',
  })
  banned: boolean;

  @ApiProperty({
    example: 'User',
    description: 'Роли доступные пользователю.',
  })
  roles: Role[];
  @Exclude()
  country: ICountry;
  @Exclude()
  password: string;
  @Exclude()
  reg_time: Date | string;
  @Exclude()
  refreshToken: string;
  @Exclude()
  accessToken: string;
  @Exclude()
  oldestAccessTokens: string[];

  constructor(partial: Partial<UserResp>) {
    Object.assign(this, partial);
  }
}

export class UsersResponse {
  @Type(() => UserResp)
  users: User[];

  constructor() {}
}
