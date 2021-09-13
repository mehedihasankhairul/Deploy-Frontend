import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';

const baseUrl = 'https://deploy.com.bd/assets/uploads/';

export default function ProductByCat() {
  const { category, mid_category, end_category } = useParams();
  const { endCategory } = useSelector((state) => state.category);
  const catName = end_category.replaceAll('-', ' ');
  const selectedCategory = endCategory.find(
    (cat) => cat.name.toLowerCase() === catName
  );
  const allProducts = useSelector((state) => state.products);
  const filterProducts = allProducts.filter(
    (product) => product.ecatId === selectedCategory.id
  );
  return (
    <>
      <Navbar />
      <div>
        {/* <Navigator /> */}
        <span className="navigator">
          <Link to="/">Home</Link>
          {'> '}{' '}
          <Link to={'/' + category}>{category.replaceAll('-', ' ')}</Link>
          {'> '}{' '}
          <Link to={'/' + category + '/' + mid_category}>
            {mid_category.replaceAll('-', ' ')}
          </Link>
          {'> '} <span>{end_category.replaceAll('-', ' ')}</span>
        </span>
        <div className="product_list">
          {filterProducts.length
            ? filterProducts.map((prod) => (
                <div key={prod.id} className="product_item">
                  <img src={baseUrl + prod.image} alt="" />
                  <p>{prod.productName}</p>
                  <p>BDT {prod.currentPrice}</p>
                  <button className="addToCart">Add To Cart</button>
                </div>
              ))
            : allProducts.map((prod) => (
                <div key={prod.id} className="product_item">
                  <img src={baseUrl + prod.image} alt="" />
                  <p>{prod.productName}</p>
                  <p>BDT {prod.currentPrice}</p>
                  <button className="addToCart">Add To Cart</button>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
