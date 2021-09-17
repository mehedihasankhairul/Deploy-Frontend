import { combineReducers } from 'redux';
import { cartReducer } from './Cart/cart.reducer';
import { catReducer } from './Category/category.reducer';
import { productReducer } from './Product/product.reducer';
import { searchReducer } from './Search/search.reducer';
import { userReducer } from './User/user.reducer';

export const rootReducer = combineReducers({
  category: catReducer,
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  search: searchReducer,
});
