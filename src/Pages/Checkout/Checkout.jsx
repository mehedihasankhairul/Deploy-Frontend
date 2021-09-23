import React from 'react';
import CheckoutComponent from '../../Components/Checkout/Checkout';
import SecondaryLayout from '../../Components/Layout/SecondaryLayout';

export default function Checkout() {
  return (
    <SecondaryLayout>
      {/* <h2>Checkout</h2> */}
      <CheckoutComponent />
    </SecondaryLayout>
  );
}
