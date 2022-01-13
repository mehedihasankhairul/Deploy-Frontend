
import { end_category, mid_category, top_category } from '../dummy.data';
import { categoryActionType } from './category.actionTypes';

export const setCategory = (payload) => async (dispatch) => {
  dispatch({
    type: categoryActionType.SET_CATEGORY,
    payload,
  });
};

export const setTopCategory = () => async (dispatch) => {

      dispatch({
        type: categoryActionType.SET_TOP_CATEGORY,
        payload: top_category,
      });
};

export const setMidCategory = () => async (dispatch) => {

      dispatch({
        type: categoryActionType.SET_MID_CATEGORY,
        payload: mid_category,
      });

};
export const setEndCategory = () => async (dispatch) => {

      dispatch({
        type: categoryActionType?.SET_END_CATEGORY,
        payload: end_category,
      });

};
