import React from 'react';
import CustomerRegistration from '../Components/CustomerAuth/CustomerRegistration/CustomerRegistration';
import SecondaryLayout from '../Components/Layout/SecondaryLayout';
import Footer from '../Components/Shared/Footer/Footer';

const Registration = () => {
  return (
    <SecondaryLayout>
      <div>
        <CustomerRegistration />
        <Footer />
      </div>
    </SecondaryLayout>
  );
};

export default Registration;
