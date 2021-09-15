import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCartPlus,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import ProductRow from './ProductRow';
import SecondaryLayout from '../Layout/SecondaryLayout';
import Footer from '../Shared/Footer/Footer';

const Cart = () => {
  const cartProducts = [
    { name: 'Nimbus 2000', price: 20, quantity: 2, id: 5 },
    { name: 'Bolt 2000', price: 50, quantity: 5, id: 6 },
  ];

  return (
    <SecondaryLayout>
      <div>
        <div className="bg-secondary text-light d-flex aligin-items-center justify-content-center py-5">
          <h3 className="py-2">Cart</h3>
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
                        <a
                          href="action.php?clear=all"
                          className="badge-danger badge py-2 px-3"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          &nbsp;&nbsp;Clear Cart
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((product) => (
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
                          <i className="fas fa-rupee-sign"></i>&nbsp;&nbsp;$233
                        </b>
                      </td>
                      <td>
                        <Link to="/shipping" className="btn btn-info">
                          <FontAwesomeIcon icon={faCreditCard} />
                          &nbsp;&nbsp;Checkout
                        </Link>
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
