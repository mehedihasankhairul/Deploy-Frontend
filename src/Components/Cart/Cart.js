import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCartPlus,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import ProductRow from './ProductRow';
import SecondaryLayout from '../Layout/SecondaryLayout';
import Footer from '../Shared/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../Utils/functions';
import { setCartState } from '../../Store/Cart/cart.action';

// const cartProducts = [
//   { name: 'Nimbus 2000', price: 20, quantity: 2, id: 5 },
//   { name: 'Bolt 2000', price: 50, quantity: 5, id: 6 },
// ];
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const handleClearCart = () => {
    const confirm = window.confirm('Confirm to clear cart..');
    if (confirm) {
      dispatch(setCartState([]));
    }
  };

  const history = useHistory();

  const goToCheckout = () => {
    history.push('/checkout');
  };

  return (
    <SecondaryLayout>
      <div>
        <div className="bg-secondary text-light d-flex aligin-items-center justify-content-center py-5">
          <h3 className="py-2">Cart {cart.length} </h3>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive mt-2">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <td colSpan="7">
                        <h4 className="text-center text-info m-0">
                          Products in your cart!
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <th>ID</th>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>
                        <span
                          onClick={handleClearCart}
                          style={{ cursor: 'pointer', color: 'orangered' }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          &nbsp;&nbsp;Clear Cart
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <ProductRow product={product} key={product.id} />
                    ))}
                    <tr>
                      <td colSpan="3">
                        <Link to="/" className="btn btn-success">
                          <FontAwesomeIcon icon={faCartPlus} />
                          &nbsp;&nbsp;Continue Shopping
                        </Link>
                      </td>
                      <td colSpan="2">
                        <b>Grand Total</b>
                      </td>
                      <td>
                        <b>
                          <i className="fas fa-rupee-sign"></i>&nbsp;&nbsp;$
                          {getCartTotal()}
                        </b>
                      </td>
                      <td>
                        <button
                          className="btn btn-info"
                          disabled={!cart.length}
                          onClick={goToCheckout}
                        >
                          <FontAwesomeIcon icon={faCreditCard} />
                          &nbsp;&nbsp;Checkout
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SecondaryLayout>
  );
};

export default Cart;
