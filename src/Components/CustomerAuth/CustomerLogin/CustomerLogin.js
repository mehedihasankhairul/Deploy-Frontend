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

  const { from } = location.state || { from: { pathname: '/cart' } };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    dispatch(setLoginUser(res));
    history.push(from);
  };

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
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                name="username"
                {...register('username', { required: true })}
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
