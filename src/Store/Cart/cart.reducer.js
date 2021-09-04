import { cartActionType } from "./cart.actionType";

export const cartReducer = (state = [], action) => {
    switch(action.type) {
        case cartActionType.SET_CART_STATE:
            return action.payload;
        default:
            return state;
    }
}