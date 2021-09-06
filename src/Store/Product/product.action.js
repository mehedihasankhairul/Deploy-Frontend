import { productActionType } from './product.actionType';

export const loadProducts = (products) => async (dispatch) => {
  dispatch({
    type: productActionType.LOAD_PRODUCT,
    payload: products,
  });
};
