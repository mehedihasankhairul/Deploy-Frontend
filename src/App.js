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

function App() {
  console.log('app started');
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('app started loading redux store.. ..');
    dispatch(setTopCategory());
    dispatch(setMidCategory());
    dispatch(setEndCategory());
    dispatch(loadAllProducts());
  }, []);

  return <MainRouter />;
}

export default App;
