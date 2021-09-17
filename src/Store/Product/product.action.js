import { getAllProducts } from '../../api/category.api';
import { productActionType } from './product.actionType';

export const loadAllProducts = () => async (dispatch) => {
  try {
    const res = await getAllProducts();
    // console.log('test', res);
    if (res) {
      dispatch({
        type: productActionType.LOAD_All_PRODUCT,
        payload: res,
      });
    }
  } catch (e) {
    console.log(e);
    return 'Something went wrong';
  }
};
