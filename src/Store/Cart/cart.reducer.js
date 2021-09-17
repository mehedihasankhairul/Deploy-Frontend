import { cartActionType } from './cart.actionType';

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionType.SET_CART_STATE:
      return [...action.payload];
    case cartActionType.ADD_TO_CART:
      return [...state, action.payload];
    case cartActionType.REMOVE_FROM_CART:
      return [...action.payload];
    default:
      return state;
  }
};
