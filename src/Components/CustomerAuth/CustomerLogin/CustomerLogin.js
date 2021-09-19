/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';

const CustomerLogin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // Login with Axios post method
  const login = async (e) => {
    const formData = new FormData();
    formData.append('username', userName);
    formData.append('password', password);

    await axios({
      method: 'POST',
      url: 'https://api.deploy.com.bd/api/token/',
      data: formData,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => {

        if (response.data.status === 200) {
          localStorage.setItem('token', response.data.token);
        }
        history.push('/cart');
        console.log(response, response.data, response.status, response.headers);
      }).catch(error => {
        if (error.response.status === 401 || error.response.status === 400) {
          console.log('Error: ', error.response.data);
          alert('Invalid username or password');
        } else {
          alert('Something Went Wrong');
        }
        console.log(error);
      });
  }


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

          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              value={userName}
              className="form-control"
              name="userName"
              aria-describedby="emailHelp"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={login}
            className="btn w-100 btn-success">
            Submit
          </button>
          <p className="mt-4">
            New to Deploy? <Link to="/registration">Sign up Now</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
