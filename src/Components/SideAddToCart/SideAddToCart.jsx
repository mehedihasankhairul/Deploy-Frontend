import React, { useState } from 'react';
import './SideAddToCart.scss';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch, useSelector  } from 'react-redux';
import { getCartTotal } from '../../Utils/functions';






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
          <p>৳{getCartTotal()}</p>
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
            {
              cart.map(cd => 
                <div key={cd.id} className="d-flex align-items-center">
              <img
                src={cd.product_featured_photo}
                alt="img"
              />
              <div className="px-3">
                <h5>{cd.product_Name}</h5>
                <p>৳{cd.product_current_price}</p>
              </div>
            </div>)
            }
            <button className="btn btn-info">Process To Checkout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideAddToCart;
