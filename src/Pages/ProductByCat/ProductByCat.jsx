import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { productByEndCat } from '../../api/category.api';
import CartButton from '../../Components/CartButton';
import MainLayout from '../../Components/Layout/MainLayout';
import Footer from '../../Components/Shared/Footer/Footer';
import { setCartState } from '../../Store/Cart/cart.action';
import { handleAddToCart } from '../../Utils/functions';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default function ProductByCat() {
  const { category, mid_category, end_category } = useParams();
  const { endCategory } = useSelector((state) => state.category);
  const [catProducts, setProducts] = useState([]);
  const catName = end_category.replaceAll('-', ' ');
  const selectedCategory = endCategory.find(
    (cat) => cat.name.toLowerCase() === catName
  );

  const getProducts = async (id) => {
    const products = await productByEndCat(id);
    setProducts(products);
    return products;
  };

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    const res = handleAddToCart(item);
    dispatch(setCartState(res));
    if (res.status) {
      alert('Item added to cart');
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  useEffect(() => {
    getProducts(selectedCategory?.id || 0);
  }, [selectedCategory]);

  const baseUrl = `https://api.deploy.com.bd`;

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
        {catProducts.length ? (
          <div className="product_list_area">
            {catProducts.map((prod) => (
              <div key={prod.id} className="product_item">
                <img src={baseUrl + prod.product_featured_photo} alt="" />
                <p>{prod.product_Name}</p>
                <p>BDT {prod.product_current_price}</p>

                <button className="addToCart" onClick={() => handleAdd(prod)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ padding: '1.5em' }}>
            <h2>Can&apos;t find any product for this category.</h2>
          </div>
        )}
        <Footer />
      </main>
    </MainLayout>
  );
}
