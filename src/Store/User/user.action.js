import { userActionType } from './user.actionType';

export const setUser = (user) => async (dispatch) => {
  dispatch({
    type: userActionType.SET_USER,
    payload: user,
  });
};

export const setLoginUser = (user) => async (dispatch) => {
  dispatch({
    type: userActionType.SET_LOGIN_USER,
    payload: { ...user },
  });
};

export const logoutUser = () => async (dispatch) =>
  dispatch({
    type: userActionType.LOG_OUT,
  });
