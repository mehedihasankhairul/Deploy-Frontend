import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOldOrder } from '../../Store/Order/order.action';
import { orderItemsTotal } from '../../Utils/calculation';

const previousOrder = [
  {
    id: 1,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    rating: '4.5',
  },
  {
    id: 2,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    rating: '4',
  },
  {
    id: 3,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    rating: '5',
  },
  {
    id: 4,
    date: '23/3/21',
    products: ['Rice', 'Potato', 'Vim'],
    total: 435,
    rating: '5',
  },
];

export default function PreviousOrder() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOldOrder());
  }, []);

  const { old } = useSelector((state) => state.order);
  console.log(old);

  return (
    <div>
      <h2>Previous Order</h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Products</th>
              <th>Total Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {old?.map((item) => (
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
                <td>{orderItemsTotal(item.products)}</td>
                <td>{item.status}</td>
                <td>{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
