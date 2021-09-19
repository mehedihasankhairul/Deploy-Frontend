/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';

const CustomerRegistration = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();

  const handleSignUp = async (e) => {
    const formData = new FormData();
    formData.append('username', userName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password2', password2);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);



    await axios({
      method: 'POST',
      url: 'https://api.deploy.com.bd/api/user/',
      data: formData,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.status === 201) {
          alert('Successfully registered');
        }

      }).then(() => {
        history.push('/login');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="bg-secondary text-light d-flex aligin-items-center justify-content-center py-5">
        <h1 className="py-2">Customer Registration</h1>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ padding: '1.5em' }}
      >
        <div className="col-md-4 my-5">
          <div className="logo d-flex justify-content-center">
            <img className="w-50" src={logo} alt="logo" />
          </div>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              value={userName}
              className="form-control"
              name="userName"
              placeholder="User Name"
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              value={firstName}
              className="form-control"
              name="first_name"
              placeholder="First Name"
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              value={lastName}
              className="form-control"
              name="last_name"
              placeholder="Last Name"
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              value={email}
              placeholder="Your Email"
              className="form-control"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              placeholder="At least 8 characters"
              className="form-control"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              value={password2}
              placeholder="Confirm Your Password"
              className="form-control"
              name="password2"
              onChange={e => setPassword2(e.target.value)}
            />
          </div>
          <button onClick={handleSignUp} className="btn w-100 btn-success">
            Create Your Deploy Account
          </button>
          <p className="mt-4">
            Already have an account? <Link to="/login">SignIn</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomerRegistration;
