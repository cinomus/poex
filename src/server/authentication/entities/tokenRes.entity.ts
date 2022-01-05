import { ApiProperty } from '@nestjs/swagger';
import { UserResp } from '../../models/users/serializers/user.serializer';

export class TokenRes {
  user: UserResp;
  @ApiProperty({
    example: 'ksdfuhiun1vidsm9v012-2ifm9e8n912mcm1289m89v9',
    description: 'Access token',
  })
  accessToken: string;
  @ApiProperty({
    example: 'dfgsdfsogk092kjv-0wier9jv0akdv80rgjadojvla0912',
    description: 'Refresh token',
  })
  refreshToken: string;
}
