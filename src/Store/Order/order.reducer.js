import { orderActionType } from './orderActionType';

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case orderActionType.LOAD_ORDER:
      return { ...state, all: action.payload };
    case orderActionType.ADD_ORDER:
      return { ...state, all: [...state.all, action.payload] };
    case orderActionType.CURRENT_ORDER:
      return { ...state, current: action.payload };
    case orderActionType.OLD_ORDER:
      return { ...state, old: action.payload };
    default:
      return state;
  }
};
