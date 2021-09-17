import { end_category, mid_category, top_category } from '../dummy.data';
import { categoryActionType } from './category.actionTypes';

// const initialState = [
//     {tCatId: 6, tCatName: "Grocery and Food", tSubCat: ['Cooking', 'Baking Needs', 'Breakfast']},
//     {tCatId: 7, tCatName: "D Food", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 8, tCatName: "D Pharmacy", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 9, tCatName: "Office Products", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 10, tCatName: "Baby Care", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 11, tCatName: "Beauty & Health", tSubCat: ['Vegetable', 'Oil']},
// ]
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
