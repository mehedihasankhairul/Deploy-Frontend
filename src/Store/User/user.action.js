import { userActionType } from './user.actionType';

export const setUser = (user) => async (dispatch) => {
  dispatch({
    type: userActionType.SET_USER,
    payload: user,
  });
};

export const setUserToken = (data) => async (dispatch) => {
  dispatch({
    type: userActionType.SET_USER_TOKEN,
    payload: data,
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
