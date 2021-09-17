// import axios from 'axios';
import {
  getEndCategories,
  getMidCategories,
  getTopCategories,
} from '../../api/category.api';
import { categoryActionType } from './category.actionTypes';

export const setCategory = (payload) => async (dispatch) => {
  dispatch({
    type: categoryActionType.SET_CATEGORY,
    payload,
  });
};

export const setTopCategory = () => async (dispatch) => {
  try {
    const res = await getTopCategories();
    if (res) {
      dispatch({
        type: categoryActionType.SET_TOP_CATEGORY,
        payload: res.data.results,
      });
    }
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const setMidCategory = () => async (dispatch) => {
  try {
    const res = await getMidCategories();
    if (res) {
      dispatch({
        type: categoryActionType.SET_MID_CATEGORY,
        payload: res.data.results,
      });
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const setEndCategory = () => async (dispatch) => {
  try {
    const res = await getEndCategories();
    if (res) {
      dispatch({
        type: categoryActionType.SET_END_CATEGORY,
        payload: res.data.results,
      });
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};
