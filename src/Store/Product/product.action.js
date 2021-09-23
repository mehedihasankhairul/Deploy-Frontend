import { getAllProducts } from '../../api/category.api';
import { productActionType } from './product.actionType';

export const loadAllProducts = () => async (dispatch) => {
  try {
    const res = await getAllProducts();
    if (res) {
      dispatch({
        type: productActionType.LOAD_All_PRODUCT,
        payload: res,
      });
    }
  } catch (e) {
    return 'Something went wrong';
  }
};
