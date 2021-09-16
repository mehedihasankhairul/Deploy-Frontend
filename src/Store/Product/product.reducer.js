import { productActionType } from './product.actionType';

const initialState = {
  all: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionType.LOAD_All_PRODUCT:
      return { ...state, all: action.payload };
    default:
      return state;
  }
};
