import { categoryActionType } from './category.actionTypes';

const initialState = {
  topCategory: [],
  midCategory: [],
  endCategory: [],
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryActionType.SET_CATEGORY:
      return { ...state, ...action.payload };
    case categoryActionType.SET_TOP_CATEGORY:
      return { ...state, topCategory: action.payload };
    case categoryActionType.SET_MID_CATEGORY:
      return { ...state, midCategory: action.payload };
    case categoryActionType.SET_END_CATEGORY:
      return { ...state, endCategory: action.payload };
    default:
      return state;
  }
};
