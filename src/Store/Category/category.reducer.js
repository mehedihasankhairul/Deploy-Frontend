import { end_category, mid_category, top_category } from '../dummy.data';
import { categoryAction } from './category.actionTypes';

// const initialState = [
//     {tCatId: 6, tCatName: "Grocery and Food", tSubCat: ['Cooking', 'Baking Needs', 'Breakfast']},
//     {tCatId: 7, tCatName: "D Food", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 8, tCatName: "D Pharmacy", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 9, tCatName: "Office Products", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 10, tCatName: "Baby Care", tSubCat: ['Vegetable', 'Oil']},
//     {tCatId: 11, tCatName: "Beauty & Health", tSubCat: ['Vegetable', 'Oil']},
// ]
const initialState = {
  topCategory: top_category,
  midCategory: mid_category,
  endCategory: end_category,
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryAction.SET_CATEGORY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
