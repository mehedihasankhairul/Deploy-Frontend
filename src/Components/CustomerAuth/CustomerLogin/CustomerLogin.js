import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';

const CustomerLogin = () => {
  return (
    <div>
      <div className="bg-secondary text-light d-flex aligin-items-center justify-content-center py-5">
        <h3 className="py-2">Customer Login</h3>
      </div>

      <div
        className="row d-flex justify-content-center"
        style={{ padding: '1.5em' }}
      >
        <div className="col-md-4 my-5">
          <div className="logo d-flex justify-content-center">
            <img className="w-50" src={logo} alt="logo" />
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn w-100 btn-success">
              Submit
            </button>
            <p className="mt-4">
              New to Deploy? <Link to="/registration">Sign up Now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
