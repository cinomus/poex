import { IUserState, UserAction, UserActionTypes } from '../../types/IUser';

const initialState: IUserState = {
  isLoading: false,
  _id: null,
  email: null,
  roles: null,
  banned: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction,
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, ...action.payload };
    case UserActionTypes.UNSET_USER:
      return { ...state, _id: null, email: null, roles: null, banned: null };
    case UserActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
