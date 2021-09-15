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
import axios from 'axios';

function App() {
  const endCategories = axios
    .get('https://frozen-caverns-97537.herokuapp.com/api/topcategroy')
    // .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.data.results;
    });
  console.log(endCategories, 'end cat');
  // fetch('https://frozen-caverns-97537.herokuapp.com/api/topcategroy/')
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
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
