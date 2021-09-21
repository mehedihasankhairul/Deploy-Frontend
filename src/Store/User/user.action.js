import { userActionType } from './user.actionType';

export const setUser = (user) => async (dispatch) => {
  console.log('setting user -', user);
  dispatch({
    type: userActionType.SET_USER,
    payload: user,
  });
};

export const setLoginUser = (user) => async (dispatch) => {
  console.log('new user', user);
  dispatch({
    type: userActionType.SET_LOGIN_USER,
    payload: { ...user },
  });
};

// export const logoutUser = () => ({
//   type: userAction.LOG
// })
