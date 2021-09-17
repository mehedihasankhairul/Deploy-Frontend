/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/Images/deoloy-logo.jpeg';

const CustomerLogin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // Login with Axios post method








  // useEffect(() => {
  //   // eslint-disable-next-line no-undef
  //   if (localStorage.getItem('user-info')) {
  //     history.push("/cart")
  //   }
  // }, [])

  // const login = (e) => {
  //   fetch(`https://frozen-caverns-97537.herokuapp.com/api/token`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username: userName,
  //       password: password,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       sessionStorage.setItem("JwtToken", data.jwt);
  //     })
  //     // .then(() => {
  //     //     window.location.reload();
  //     // })
  //     .then(() => {
  //       // history.replace(from);
  //       // window.location.reload();
  //     })
  //     .catch(error => console.log('error', error));
  //   e.preventDefault()
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
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
