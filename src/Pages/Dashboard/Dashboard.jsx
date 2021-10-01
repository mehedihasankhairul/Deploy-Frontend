import React, { useState } from 'react';
import SecondaryLayout from '../../Components/Layout/SecondaryLayout';
import CurrentOrder from './CurrentOrder';
import PreviousOrder from './PreviousOrder';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('current order');

  return (
    <SecondaryLayout>
      <main
        className="dashboard"
        style={{ display: 'grid', gridTemplateColumns: '300px 1fr' }}
      >
        {/* <aside>sidebar</aside> */}
        <section>
          <div>
            <li onClick={() => setActiveTab('current order')}>Current Order</li>
            <li onClick={() => setActiveTab('previous order')}>
              Previous Order
            </li>
            <li onClick={() => setActiveTab('billing address')}>
              Billing Address
            </li>
            <li onClick={() => setActiveTab('edit profile')}>Edit Profile</li>
          </div>
        </section>
        <section>
          {activeTab === 'current order' && <CurrentOrder />}
          {activeTab === 'previous order' && <PreviousOrder />}
          {/* {activeTab === 'billing' && <BillingAddress />} */}
          {/* {activeTab === 'billing' && <ShippingAddress />} */}
          {/* {activeTab === 'billing' && <EditProfile />} */}
        </section>
      </main>
    </SecondaryLayout>
  );
}
