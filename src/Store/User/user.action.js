import { userActionType } from './user.actionType';

export const setUser = (user) => async (dispatch) => ({
  type: userActionType.SET_USER,
  payload: user,
});
