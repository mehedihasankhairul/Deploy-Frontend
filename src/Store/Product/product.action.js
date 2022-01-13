
import { products } from '../dummy.data';
import { productActionType } from './product.actionType';

export const loadAllProducts = () => async (dispatch) => {

      dispatch({
        type: productActionType.LOAD_All_PRODUCT,
        payload: products,
      });

};
