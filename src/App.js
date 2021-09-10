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
import Navbar from './Components/Shared/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

// const dummy = [
//   {tCatId: 6, tCatName: "Grocery and Food", image: 'demo.png'},
//   {tCatId: 7, tCatName: "D Food", image: 'demo.png'},
//   {tCatId: 8, tCatName: "D Pharmacy", image: 'demo.png'},
//   {tCatId: 9, tCatName: "Office Products", image: 'demo.png'},
//   {tCatId: 10, tCatName: "Baby Care", image: 'demo.png'},
//   {tCatId: 11, tCatName: "Beauty & Health", image: 'demo.png'},
// ]
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
  // const cat = useSelector(state => state.category)
  // console.log(cat[0].tSubCat)
  // cat[0].tSubCat.map(sub => {
  //   console.log(sub)
  // })
  return (
    <div className="main-area">
      <Navbar />
      <main className="main row">
        <main className="sidebar">
          <Sidebar />
        </main>
        <div className="main-container">
          <MainRouter />
        </div>
      </main>
    </div>
  );
}

export default App;
