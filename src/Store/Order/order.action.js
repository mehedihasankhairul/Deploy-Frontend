import { getOrder } from '../../api/category.api';
import { getActiveOrder, getOldOrder } from '../../Utils/functions';
import { orderActionType } from './orderActionType';

export const loadOrder = () => async (dispatch) => {
  try {
    const res = await getOrder();
    console.log(res);
    dispatch({
      type: orderActionType.LOAD_ORDER,
      payload: res.data,
    });
  } catch (e) {
    return e;
  }
};

export const loadCurrentOrder = () => async (dispatch) => {
  const current = await getActiveOrder();
  dispatch({
    type: orderActionType.CURRENT_ORDER,
    payload: current,
  });
};

export const loadOldOrder = () => async (dispatch) => {
  const old = await getOldOrder();
  dispatch({
    type: orderActionType.OLD_ORDER,
    payload: old,
  });
};
