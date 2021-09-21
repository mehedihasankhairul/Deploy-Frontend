/* eslint-disable no-undef */
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';
import { loginUser } from '../../../api/category.api';
import { useDispatch } from 'react-redux';
import { setLoginUser } from '../../../Store/User/user.action';

import { useLocation } from 'react-router';

const CustomerLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/checkout' } };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await loginUser(data);
    console.log('calling action');
    // setUser(res);
    dispatch(setLoginUser(res));
    history.push(from);
  };
  console.log(errors);

  //   await axios({
  //     method: 'POST',
  //     url: 'https://api.deploy.com.bd/api/token/',
  //     data: formData,
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then(response => {

  //       if (response.data.status === 200) {
  //         localStorage.setItem('token', response.data.token);
  //       }
  //       history.push('/cart');
  //       console.log(response, response.data, response.status, response.headers);
  //     }).catch(error => {
  //       if (error.response.status === 401 || error.response.status === 400) {
  //         console.log('Error: ', error.response.data);
  //         alert('Invalid username or password');
  //       } else {
  //         alert('Something Went Wrong');
  //       }
  //       console.log(error);
  //     });
  // }

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                {...register('userName', { required: true })}
              />
              <p>
                {errors.userName && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                {...register('password', { required: true })}
              />
              <p>
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
            </div>
            <input
              value="Submit"
              type="submit"
              className="btn w-100 btn-success"
            />
          </form>
          <p className="mt-4">
            New to Deploy? <Link to="/registration">Sign up Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
