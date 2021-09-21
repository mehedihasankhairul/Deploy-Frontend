import { userActionType } from './user.actionType';

export const setUser = (user) => async (dispatch) =>
  dispatch({
    type: userActionType.SET_USER,
    payload: user,
  });

// export const logoutUser = () => ({
//   type: userAction.LOG
// })
