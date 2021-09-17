// import {axios} from ''

import { store } from '../Store';
import { addToCart, setCartState } from '../Store/Cart/cart.action';

// const base = `https://frozen-caverns-97537.herokuapp.com/api/search/?search=`

// export const searchProduct = async (query) => {
//     const res = await axios.get(base + query)
// }

export const handleAddToCart = (product) => {
  const { cart } = store.getState();
  const existing = cart.find((item) => item.id === product.id);
  if (!existing) {
    return [...cart, { ...product, quantity: 1 }];
  } else {
    const updated = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return updated;
  }
};

export const filteredCart = (product) => {
  const { cart } = store.getState();
  return cart.filter((item) => item.id !== product.id);
};

export const updateProductQuantity = (product) => {
  const { cart } = store.getState();
  return cart.map((item) => {
    if (item.id === product.id) {
      return { ...product };
    }
    return item;
  });
};

export const getCartTotal = () => {
  const { cart } = store.getState();
  const total = cart.reduce(
    (sum, item) => item.quantity * item.product_current_price + sum,
    0
  );
  return total;
};
