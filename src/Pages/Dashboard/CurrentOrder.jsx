import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrentOrder } from '../../Store/Order/order.action';
import { orderItemsTotal } from '../../Utils/calculation';

const myOrder = [
  {
    id: 1,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    status: 'processing',
  },
  {
    id: 2,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    status: 'processing',
  },
  {
    id: 3,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    status: 'processing',
  },
  {
    id: 4,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    status: 'processing',
  },
];

export default function CurrentOrder() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentOrder());
  }, []);

  const { current } = useSelector((state) => state.order);

  return (
    <div>
      <h2>Current Order</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Products</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {current?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>
                  {item.products.map((pd) => (
                    <li key={pd}>
                      {`${pd.name} (${pd.price}) * ${pd.quantity}`}{' '}
                    </li>
                  ))}
                </td>
                <td>
                  {item.total}
                  {orderItemsTotal(item.products)}
                </td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
