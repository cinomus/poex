import { Role } from '../../server/models/roles/schemas/role.schema';
import { UserResp } from '../../server/models/users/serializers/user.serializer';
import { ObjectId } from 'mongoose';

export interface IUserState {
  isLoading: boolean;
  _id: ObjectId | string;
  email: string;
  roles: Role[];
  banned: boolean;
}

export enum UserActionTypes {
  SET_USER = 'SET_USER',
  UNSET_USER = 'UNSET_USER',
  SET_LOADING = 'SET_LOADING',
}
interface SetAction {
  type: UserActionTypes.SET_USER;
  payload: UserResp;
}
interface UnsetAction {
  type: UserActionTypes.UNSET_USER;
}

interface LoadingAction {
  type: UserActionTypes.SET_LOADING;
  payload: boolean;
}

export type UserAction = SetAction | UnsetAction | LoadingAction;
