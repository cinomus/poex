const initialState = {
  isAuth: false,
};

export const CookieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'true':
      return { ...state, isAuth: true };
    case 'false':
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
