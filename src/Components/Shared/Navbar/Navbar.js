import React from 'react';
import './Navbar.scss';
import navLogo from '../../../Assets/Images/deoloy-logo.jpeg';

const Navbar = () => {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <img src={navLogo} alt="" />
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <form className="form-inline ml-sm-auto">
              <input type="text" className="form-control mr-sm-2 " placeholder="Search Products..." />
              <button type="submit" className="btn btn-outline-light">Search</button>
            </form>
            <div className="navbar-nav text-white mr-0 ml-auto">
              <div className="userSection justify-between-content p-2">
                <i className="fa fa-sign-out px-2" aria-hidden="true"></i>
                <span>Login</span>
              </div>
              <div className="userSection justify-between-content p-2">
                <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
                <span>Register</span>
              </div>
              <div className="myCart p-2">
                <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
                <small className="fw-bold">(BDT 0.00)</small>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
