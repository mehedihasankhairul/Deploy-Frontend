/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import './Styles/app.scss';
import MainRouter from './Routes/MainRouter';
import {
  setEndCategory,
  setMidCategory,
  setTopCategory,
} from './Store/Category/category.action';

import { loadAllProducts } from './Store/Product/product.action';
import { useEffect } from 'react';
import {
  loadCurrentOrder,
  loadOldOrder,
  loadOrder,
} from './Store/Order/order.action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTopCategory());
    dispatch(setMidCategory());
    dispatch(setEndCategory());
    dispatch(loadAllProducts());
    dispatch(loadOrder());
    // dispatch(loadCurrentOrder())
    // dispatch(loadOldOrder())
  }, []);

  return <MainRouter />;
}

export default App;
