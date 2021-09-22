import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCartState } from '../../Store/Cart/cart.action';
import {
  removeProductFromCart,
  updateProductQuantity,
} from '../../Utils/functions';
import CartButton from '../CartButton';

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  const updateQuantity = (type) => {
    if (type === 'increase') {
      setQuantity((q) => q + 1);
    } else if (quantity === 1) {
      const remove = window.confirm('Product will be removed from cart..');
      if (remove) {
        // setQuantity((q) => q - 1);
        const newCartState = removeProductFromCart(product.id);
        dispatch(setCartState(newCartState));
      }
    } else if (quantity > 0) {
      setQuantity((q) => q - 1);
    }
  };

  useEffect(() => {
    const updateCart = updateProductQuantity({ ...product, quantity });
    dispatch(setCartState(updateCart));
  }, [quantity]);

  return (
    <div className="cart_summary">
      <img src={product.product_featured_photo} alt="img" />
      <div className="">
        <h5>{product.product_Name}</h5>
        <p>৳{product.product_current_price}</p>
      </div>
      <div>
        <CartButton
          quantity={product.quantity}
          updateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
}
