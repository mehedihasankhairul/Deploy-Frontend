import { userActionType } from './user.actionType';
import { loginUser, registerUser } from '../../api/category.api';

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

// export const setLoginUser = (user) => async (dispatch) => {
//   dispatch({
//     type: userActionType.SET_LOGIN_USER,
//     payload: { ...user },
//   });
// };

export const setLoginUser = (data) => async (dispatch) => {
  try {
    const user = await loginUser(data);
    console.log(user);
    dispatch({
      type: userActionType.SET_LOGIN_USER,
      payload: { ...user },
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const setRegisterUser = (data) => async (dispatch) => {
  try {
    const user = await registerUser(data);
    console.log(user);
    dispatch({
      type: userActionType.SET_LOGIN_USER,
      payload: { ...user },
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const logoutUser = () => async (dispatch) =>
  dispatch({
    type: userActionType.LOG_OUT,
  });
