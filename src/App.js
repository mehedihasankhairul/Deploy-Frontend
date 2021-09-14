/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import './Styles/app.scss';
import MainRouter from './Routes/MainRouter';
import { setCategory } from './Store/Category/category.action';
import {
  end_category,
  mid_category,
  products,
  top_category,
} from './Store/dummy.data';
import { loadProducts } from './Store/Product/product.action';

function App() {
  const dispatch = useDispatch();
  dispatch(
    setCategory({
      topCategory: top_category,
      midCategory: mid_category,
      endCategory: end_category,
    })
  );
  dispatch(loadProducts(products));

  return <MainRouter />;
}

export default App;
