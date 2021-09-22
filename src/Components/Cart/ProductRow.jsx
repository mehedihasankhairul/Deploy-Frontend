import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, setCartState } from '../../Store/Cart/cart.action';
import {
  filteredCart,
  removeProductFromCart,
  updateProductQuantity,
} from '../../Utils/functions';
import CartButton from '../CartButton';

export default function ProductRow({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  const updateQuantity = (type) => {
    if (type === 'increase') {
      setQuantity((q) => q + 1);
    } else if (quantity === 1) {
      const remove = window.confirm('Product will be removed from cart..');
      if (remove) {
        setQuantity((q) => q - 1);
        const newCartState = removeProductFromCart(product.id);
        dispatch(setCartState(newCartState));
      }
    } else if (quantity > 0) {
      setQuantity((q) => q - 1);
    }
  };
  const handleRemove = () => {
    const confirm = window.confirm('Are you sure to remove this from cart?');
    if (confirm) {
      const filtered = filteredCart(product);
      dispatch(removeFromCart(filtered));
    }
  };
  useEffect(() => {
    const updateCart = updateProductQuantity({ ...product, quantity });
    dispatch(setCartState(updateCart));
  }, [quantity]);
  return (
    <tr>
      <td>{product.id}</td>
      <input type="hidden" className="pid" value="id" />
      <td>
        <img src={product.product_featured_photo} width="50" alt="img" />
      </td>
      <td>{product.product_Name}</td>
      <td>
        <i className="fas fa-rupee-sign"></i>&nbsp;&nbsp;৳
        {product.product_current_price}
      </td>
      <input type="hidden" className="price" value="1" />
      <td>
        <CartButton quantity={quantity} updateQuantity={updateQuantity} />
        {/* <input
                        type="number"
                        className="form-control itemQty"
                        value="9999>"
                      /> */}
      </td>
      <td>
        <i className="fas fa-rupee-sign"></i>৳
        {product.product_current_price * quantity}
      </td>
      <td>
        {/* <Link to="/" className="text-danger lead"> */}
        <span
          onClick={handleRemove}
          style={{ cursor: 'pointer', color: 'orangered' }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
          &nbsp;&nbsp;
        </span>
        {/* </Link> */}
      </td>
    </tr>
  );
}
