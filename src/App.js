// /* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable camelcase */
// import { useDispatch } from 'react-redux';
// import './Styles/app.scss';
// import MainRouter from './Routes/MainRouter';
// import {
//   setEndCategory,
//   setMidCategory,
//   setTopCategory,
// } from './Store/Category/category.action';

// import { loadAllProducts } from './Store/Product/product.action';
// import { useEffect } from 'react';

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(setTopCategory());
//     dispatch(setMidCategory());
//     dispatch(setEndCategory());
//     dispatch(loadAllProducts());
//   }, []);

//   return <MainRouter />;
// }

// export default App;
import React from 'react';
import { useDispatch } from 'react-redux';
import './Styles/app.scss';
import { setCategory } from './Store/Category/category.action';
import MainRouter from './Routes/MainRouter';
import {
  end_category,
  mid_category,
  products,
  top_category,
} from './Store/dummy.data';
import { loadAllProducts } from './Store/Product/product.action';

function App() {
  const dispatch = useDispatch();
  dispatch(
    setCategory({
      topCategory: top_category,
      midCategory: mid_category,
      endCategory: end_category,
    })
  );
  dispatch(loadAllProducts(products));

  return <MainRouter />;
}

export default App;