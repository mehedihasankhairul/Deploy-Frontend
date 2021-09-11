import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCartPlus, faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    return (
        <div>
            <div className="bg-secondary text-light d-flex aligin-items-center justify-content-center py-5">
                <h3 className="py-5">Cart</h3>
            </div>

        
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="table-responsive mt-2">
          <table className="table table-bordered table-striped text-center">
            <thead>
              <tr>
                <td colSpan="7">
                  <h4 className="text-center text-info m-0">Products in your cart!</h4>
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
                  <a href="action.php?clear=all" className="badge-danger badge p-1"><FontAwesomeIcon icon={faTrash} />&nbsp;&nbsp;Clear Cart</a>
                </th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>1</td>
                <input type="hidden" className="pid" value="id" />
                <td><img src="" width="50" alt="img" /></td>
                <td>name</td>
                <td>
                  <i className="fas fa-rupee-sign"></i>&nbsp;&nbsp;number
                </td>
                <input type="hidden" className="price" value="1" />
                <td>
                  <input type="number" className="form-control itemQty" value="9999>"  />
                </td>
                <td><i className="fas fa-rupee-sign"></i>$233</td>
                <td>
                  <Link to="/" className="text-danger lead"><FontAwesomeIcon icon={faTrashAlt} />&nbsp;&nbsp;</Link>
                </td>
              </tr>
              <tr>

                <td colSpan="3">
                  <Link to="/" className="btn btn-success"><FontAwesomeIcon icon={faCartPlus} />&nbsp;&nbsp;Continue
                    Shopping</Link>
                </td>
                <td colSpan="2"><b>Grand Total</b></td>
                <td><b><i className="fas fa-rupee-sign"></i>&nbsp;&nbsp;$233</b></td>
                <td>
                  <Link to="/" className="btn btn-info"><FontAwesomeIcon icon={faCreditCard} />&nbsp;&nbsp;Checkout</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

        </div>
    );
};

export default Cart;