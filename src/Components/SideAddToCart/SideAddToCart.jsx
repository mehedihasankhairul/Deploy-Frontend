import React, { useState } from 'react';
import './SideAddToCart.scss';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../Utils/functions';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton';
import CartProduct from './CartProduct';

const SideAddToCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);

  const addToCart = () => {
    setShowCart(true);
  };

  return (
    <>
      <div onClick={addToCart} className="midAddToCart align-items-center">
        <button className="btn btn-success pt-4">
          <span className="cart_menu">
            <GiShoppingCart size={25} /> <span>{cart.length}</span>
          </span>
          <p>৳ {getCartTotal()}</p>
        </button>
      </div>

      {showCart && (
        <div className={`sideAddToCart ${showCart ? 'show' : ''}`}>
          <div className="sideAddToCart__content">
            <div className="d-flex topBar justify-content-between">
              <div className="total-items">
                <span>Total items :{cart.length}</span>
              </div>
              <div className="d-flex">
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  onClick={() => setShowCart(false)}
                ></i>
              </div>
            </div>
            {cart.map((cd) => (
              <CartProduct key={cd.id} product={cd} />
            ))}
            <Link to="/checkout">
              <button className="btn btn-info">Process To Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SideAddToCart;
