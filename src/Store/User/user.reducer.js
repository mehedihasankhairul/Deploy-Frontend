import { userActionType } from './user.actionType';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.SET_USER:
      return { ...action.payload };
    case userActionType.SET_LOGIN_USER:
      return { ...action.payload };
    case userActionType.LOG_OUT:
      return {};
    default:
      return state;
  }
};
