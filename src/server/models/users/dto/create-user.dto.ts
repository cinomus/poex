import { ApiProperty } from '@nestjs/swagger';
import { ICountry } from '../../../../shared/types/types';

export class CreateUserDto {
  @ApiProperty({ example: 'userLogin', description: 'Логин пользователя' })
  readonly email: string;
  @ApiProperty({ example: 'password123', description: 'Пароль пользователя' })
  readonly password: string;
  @ApiProperty({
    example: 'obj',
    description: 'Выбранная пользователем страна',
  })
  readonly country: ICountry;
  @ApiProperty({ example: 'true', description: 'Подписка на рассылку' })
  readonly sub: boolean;
}
