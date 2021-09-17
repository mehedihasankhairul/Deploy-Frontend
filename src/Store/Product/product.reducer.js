import { productActionType } from './product.actionType';

const initialState = [
  {
    id: 5,
    product_Name: 'Harry Potter 1-7',
    product_old_price: '1250',
    product_current_price: '1050',
    product_qty: '12',
    product_featured_photo:
      'http://frozen-caverns-97537.herokuapp.com/media/featured_photo/hp-box-set_hz5j4sI.jpg',
    product_description: 'Harry Potter Full series',
    product_feature: 'hello',
    product_condition: 'new',
    product_return_policy: 'yes',
    product_total_view: '321',
    product_is_featured: 'yes',
    product_is_active: true,
    product_topcategory_id: 4,
    product_midcategory_id: 3,
    product_endcategory_id: 2,
    discount: '10',
  },
];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionType.LOAD_All_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
