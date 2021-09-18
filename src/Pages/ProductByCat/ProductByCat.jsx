import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CartButton from '../../Components/CartButton';
import MainLayout from '../../Components/Layout/MainLayout';
import Footer from '../../Components/Shared/Footer/Footer';
import { setCartState } from '../../Store/Cart/cart.action';
import { handleAddToCart } from '../../Utils/functions';

export default function ProductByCat() {
  const { category, mid_category, end_category } = useParams();
  const { endCategory } = useSelector((state) => state.category);
  const catName = end_category.replaceAll('-', ' ');
  console.log(catName);
  const selectedCategory = endCategory.find(
    (cat) => cat.name.toLowerCase() === catName
  );
  console.log(selectedCategory);
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts);
  const filterProducts = allProducts.filter(
    (product) => product.product_endcategory_id === selectedCategory.id
  );

  console.log(filterProducts);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    const res = handleAddToCart(item);
    console.log(res);
    dispatch(setCartState(res));
  };
  return (
    <MainLayout>
      <main style={{ paddingTop: '1.5em' }}>
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
          {filterProducts.length ? (
            filterProducts.map((prod) => (
              <div key={prod.id} className="product_item">
                <img src={prod.product_featured_photo} alt="" />
                <p>{prod.product_Name}</p>
                <p>BDT {prod.product_current_price}</p>

                <button className="addToCart" onClick={() => handleAdd(prod)}>
                  Add To Cart
                </button>
              </div>
            ))
          ) : (
            <div>
              <h2>Can&apos;t find any product for this category.</h2>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </MainLayout>
  );
}
