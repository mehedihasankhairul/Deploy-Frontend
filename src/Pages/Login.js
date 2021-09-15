import React from 'react';
import CustomerLogin from '../Components/CustomerAuth/CustomerLogin/CustomerLogin';
import SecondaryLayout from '../Components/Layout/SecondaryLayout';
import Footer from '../Components/Shared/Footer/Footer';

const Login = () => {
  return (
    <SecondaryLayout>
      <div>
        <CustomerLogin />
        <Footer />
      </div>
    </SecondaryLayout>
  );
};

export default Login;
