import React from 'react';
import './Navbar.scss';
import navLogo from '../../../assets/Images/deoloy-logo.jpeg';

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
              {/* <a href="#" className="nav-item nav-link active">Home</a>
              <a href="#" className="nav-item nav-link">About</a>
              <a href="#" className="nav-item nav-link">Products</a> */}
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

        {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="navLogo col-md-2 pe-3">
            <img src={navLogo} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <form className="navbar-form navbar-left p-2 pt-4" role="search">
                <input
                  type="hidden"
                  name="_csrf"
                  value="1aa48974fa534da747e1cd8d4209de80"
                />
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control search-top px-5 me-3"
                    placeholder="Search Product"
                    name="search_text"
                  />
                  <input
                    className="btn btn-success mx-2"
                    type="button"
                    placeholder="Search Products"
                    value="Search"
                  />
                </div>
              </form>
            </ul>
            <div className="userSection justify-between-content p-2">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              <button>Login</button>
            </div>
            <div className="userSection justify-between-content p-2">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
              <button>Register</button>
            </div>
            <div className="myCart p-2">
              <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
              <small className="fw-bold">(BDT 0.00)</small>
            </div>
          </div>
        </nav> */}
      </div>
    </header>
  );
};

export default Navbar;
