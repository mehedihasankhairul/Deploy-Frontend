import { productActionType } from './product.actionType';

const initialState = [];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionType.LOAD_All_PRODUCT:
      return [...action.payload];
    default:
      return state;
  }
};
