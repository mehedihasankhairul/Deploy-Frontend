/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';
import { setRegisterUser } from '../../../Store/User/user.action';
import { useAsyncThunkDispatch } from '../../../Store/Hooks/useAsyncDispatch';

const CustomerRegistration = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (user.email) {
      history.push('/cart');
    }
  }, [user]);

  const {
    asyncDispatch: asyncRegister,
    error,
    isError,
    isLoading,
  } = useAsyncThunkDispatch(setRegisterUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await asyncRegister(data);
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
          {/* form start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                {...register('username', { required: true })}
                type="text"
                className="form-control"
                name="username"
                placeholder="User Name"
              />
              <p>
                {errors.username && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="First Name"
                {...register('first_name', { required: true })}
              />
              <p>
                {errors.first_name && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Last Name"
                {...register('last_name', { required: true })}
              />
              <p>
                {errors.last_name && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
                {...register('email', { required: true })}
              />
              <p>
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                suggested="new-password"
                name="use-password"
                placeholder="At least 6 characters"
                className="form-control"
                {...register('password', { required: true, minLength: 6 })}
              />
              <p>
                {errors.password && errors.password.type === 'required' && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
              <p>
                {errors.password && errors.password.type === 'minLength' && (
                  <span className="text-danger">
                    password should be at least 6 characters
                  </span>
                )}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="user-password"
                suggested="new-password"
                placeholder="At least 6 characters"
                className="form-control"
                {...register('password2', { required: true, minLength: 6 })}
              />
              <p>
                {errors.password2 && errors.password2.type === 'required' && (
                  <span className="text-danger">This field is required</span>
                )}
              </p>
              <p>
                {errors.password2 && errors.password2.type === 'minLength' && (
                  <span className="text-danger">
                    password should be at least 6 characters
                  </span>
                )}
              </p>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="btn w-100 btn-success"
            >
              {isLoading ? 'Singing up...' : 'Sign Up'}
            </button>
          </form>
          {isError && (
            <p className="text-danger p-2 mt-3">
              Please use unique username and email..
            </p>
          )}
          <p className="mt-4">
            Already have an account? <Link to="/login">SignIn</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomerRegistration;
