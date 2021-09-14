import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton';

export default function ProductRow({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const updateQuantity = (type) => {
    if (type === 'increase') {
      setQuantity((q) => q + 1);
    } else if (quantity > 0) {
      setQuantity((q) => q - 1);
    }
  };
  return (
    <tr>
      <td>{product.id}</td>
      <input type="hidden" className="pid" value="id" />
      <td>
        <img src="" width="50" alt="img" />
      </td>
      <td>{product.name}</td>
      <td>
        <i className="fas fa-rupee-sign"></i>&nbsp;&nbsp;${product.price}
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
        <i className="fas fa-rupee-sign"></i>${product.price * quantity}
      </td>
      <td>
        <Link to="/" className="text-danger lead">
          <FontAwesomeIcon icon={faTrashAlt} />
          &nbsp;&nbsp;
        </Link>
      </td>
    </tr>
  );
}
