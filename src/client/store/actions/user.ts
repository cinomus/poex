import { UserActionTypes } from '../../types/IUser';

export const setUser = (payload) => {
  console.log('user.ts setUser');
  return { type: UserActionTypes.SET_USER, payload };
};
export const unsetUser = () => {
  return { type: UserActionTypes.UNSET_USER };
};
export const setUserLoading = (payload) => {
  return { type: UserActionTypes.SET_LOADING, payload };
};
