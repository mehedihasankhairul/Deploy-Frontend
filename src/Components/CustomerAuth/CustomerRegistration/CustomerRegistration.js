import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';

const CustomerRegistration = () => {
  return (
    <div>
      <div className="bg-secondary text-light d-flex aligin-items-center justify-content-center py-5">
        <h1 className="py-5">Customer Registration</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-md-4 my-5">
          <div className="logo d-flex justify-content-center">
            <img className="w-50" src={logo} alt="logo" />
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="nameleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
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
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="At least 6 characters"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Retype Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn w-100 btn-success">
              Create Your Diploy Account
            </button>
            <p className="mt-4">
              Already have an account? <Link to="/login">SignIn</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
