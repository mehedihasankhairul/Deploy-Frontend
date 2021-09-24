/* eslint-disable no-undef */
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';
import { useSelector } from 'react-redux';
import { setLoginUser } from '../../../Store/User/user.action';

import { useLocation } from 'react-router';
import { useAsyncThunkDispatch } from '../../../Store/Hooks/useAsyncDispatch';

const CustomerLogin = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/cart' } };

  useEffect(() => {
    if (user.email) {
      history.push(from);
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    asyncDispatch: asyncLoginUser,
    error,
    isError,
    isLoading,
  } = useAsyncThunkDispatch(setLoginUser);

  const onSubmit = async (data) => {
    await asyncLoginUser(data);
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
                suggested="current-password"
                className="form-control"
                name="customer-password"
                {...register('password', { required: true })}
              />
              <p>
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="btn w-100 btn-success"
            >
              {isLoading ? 'Logging...' : 'Login'}
            </button>
          </form>
          {isError && (
            <p className="text-danger p-2 mt-3">Invalid email or password</p>
          )}
          {/* {isError && <p className="danger">{error.message}</p>} */}
          <p className="mt-4">
            New to Deploy? <Link to="/registration">Sign up Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
