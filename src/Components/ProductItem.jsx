import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, setCartState } from '../Store/Cart/cart.action';
import { filteredCart, updateProductQuantity } from '../Utils/functions';
import CartButton from './CartButton';

export default function ProductItem({ prod }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const updateQuantity = (type) => {
    if (type === 'increase') {
      setQuantity((q) => q + 1);
    } else if (quantity > 0) {
      setQuantity((q) => q - 1);
    }
  };
  const handleRemove = () => {
    const confirm = window.confirm('Are you sure to remove this from cart?');
    if (confirm) {
      const filtered = filteredCart(prod);
      dispatch(removeFromCart(filtered));
    }
  };

  const handleAdd = () => {
    console.log('adding to cart');
  };

  useEffect(() => {
    const updateCart = updateProductQuantity({ ...prod, quantity });
    dispatch(setCartState(updateCart));
  }, [quantity]);
  return (
    <div key={prod.id} className="product_item">
      <img src={prod.product_featured_photo} alt="" />
      <p>{prod.product_Name}</p>
      <p>BDT {prod.product_current_price}</p>
      {quantity ? (
        <CartButton quantity={1} updateQuantity={updateQuantity} />
      ) : (
        <button className="addToCart" onClick={() => handleAdd(prod)}>
          Add To Cart
        </button>
      )}
    </div>
  );
}
