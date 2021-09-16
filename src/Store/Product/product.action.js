import { getAllProducts } from '../../api/category.api';
import { productActionType } from './product.actionType';

export const loadAllProducts = () => async (dispatch) => {
  console.log('loading product data');
  try {
    const res = await getAllProducts();
    if (res) {
      dispatch({
        type: productActionType.LOAD_ALL_PRODUCT,
        payload: res,
      });
    }
  } catch (e) {
    console.log(e);
    return 'Something went wrong';
  }
};
