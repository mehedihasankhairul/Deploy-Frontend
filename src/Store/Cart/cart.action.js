import { cartActionType } from './cart.actionType';

export const setCartState = (state) => async (dispatch) =>
  dispatch({
    type: cartActionType.SET_CART_STATE,
    payload: state,
  });

export const addToCart = (payload) => async (dispatch) => {
  dispatch({
    type: cartActionType.SET_CART_STATE,
    payload: [...payload],
  });
};

export const removeFromCart = (state) => ({
  type: cartActionType.REMOVE_FROM_CART,
  payload: state,
});
