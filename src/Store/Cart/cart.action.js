import { cartActionType } from './cart.actionType'

export const setCartState = (state) => async (dispatch) => {
  dispatch({
    type: cartActionType.SET_CART_STATE,
    payload: state
  })
}
