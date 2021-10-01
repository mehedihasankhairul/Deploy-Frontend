import { store } from '../Store';

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

export const removeProductFromCart = (id) => {
  const { cart } = store.getState();
  const filteredCart = cart.filter((item) => item.id !== id);
  return filteredCart;
};

export const getActiveOrder = () => {
  const { order } = store.getState();
  const active = order.all.filter((item) => item.order_status === 'processing');
  console.log(active);
  const orderCommonId = [];
  active.forEach((item) => {
    if (!orderCommonId.includes(item.order_common_id)) {
      orderCommonId.push(item.order_common_id);
    }
  });
  console.log(orderCommonId);

  const proeccedOrder = [];
  orderCommonId.forEach((id) => {
    const item = { id: id, status: 'processing' };
    active.forEach((ord) => {
      if (ord.order_common_id === id) {
        item.products = item?.products?.length
          ? [
              ...item?.products,
              {
                name: ord.order_product_name || 'Product name',
                price: ord.order_price,
                quantity: ord.order_qty,
                date: ord.created_at,
              },
            ]
          : [
              {
                name: ord.order_product_name || 'Product name',
                price: ord.order_price,
                quantity: ord.order_qty,
                date: ord.created_at,
              },
            ];
      }
    });
    proeccedOrder.push(item);
  });
  return proeccedOrder;
};

export const getOldOrder = () => {
  const { order } = store.getState();
  const oldOrder = order.all.filter(
    (item) => item.order_status === 'fulfilled'
  );
  console.log(oldOrder);
  const orderCommonId = [];
  oldOrder.forEach((item) => {
    if (!orderCommonId.includes(item.order_common_id)) {
      orderCommonId.push(item.order_common_id);
    }
  });
  console.log(orderCommonId);

  const proeccedOrder = [];
  orderCommonId.forEach((id) => {
    const item = { id: id, status: 'fulfilled' };
    oldOrder.forEach((ord) => {
      if (ord.order_common_id === id) {
        item.products = item?.products?.length
          ? [
              ...item?.products,
              {
                name: ord.order_product_name || 'Product name',
                price: ord.order_price,
                quantity: ord.order_qty,
                date: ord.created_at,
              },
            ]
          : [
              {
                name: ord.order_product_name || 'Product name',
                price: ord.order_price,
                quantity: ord.order_qty,
                date: ord.created_at,
              },
            ];
      }
    });
    proeccedOrder.push(item);
  });
  return proeccedOrder;
};

/*
  order_common_id(pin):"47887"
order_user(pin):40
order_product(pin):5
order_qty(pin):"2"
delivery_adress(pin):"Joypurhat, Bogura, Rajshahi"
customer_name(pin):"Ishtiak"
customer_email(pin):"test@user.com"
txnid(pin):""
paid_amount(pin):""
card_number(pin):""
card_cvv(pin):""
card_month(pin):""
card_year(pin):""
bank_transation_info(pin):""
payment_method(pin):"COD"
payment_status(pin):false
shipping_status(pin):false
order_status(pin):"processing"

*/
