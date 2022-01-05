import { User } from '../../models/users/schemas/user.schema';

export class ResCookieDto {
  readonly user?: User;
  readonly accessTokenCookie: {
    readonly token: string;
    readonly options: {
      httpOnly: boolean;
      maxAge: number;
    };
  };
  readonly refreshTokenCookie: {
    readonly token: string;
    readonly options: {
      httpOnly: boolean;
      maxAge: number;
    };
  };
}
