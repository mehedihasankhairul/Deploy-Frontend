import React from 'react';
import './Navbar.scss';
import navLogo from '../../../assets/Images/deoloy-logo.jpeg';

const Navbar = () => {
  return (

    < nav className="navbar navbar-expand-md navbar-light" >
      <a className="navbar-brand" href="#!">
        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height={30} alt="mdb logo" />
      </a>
      {/* Collapse button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1" aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Breadcrumbs */}
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a className="waves-effect" href="#!">Home</a></li>
        <li className="breadcrumb-item"><a className="waves-effect" href="#!">Templates</a></li>
        <li className="breadcrumb-item active"><a className="waves-effect" href="#!">E-commerce</a></li>
      </ol>
      {/* Breadcrumbs */}
      {/* Links */}
      <div className="collapse navbar-collapse" id="basicExampleNav1">
        {/* Right */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#!" className="nav-link navbar-link-2 waves-effect">
              <span className="badge badge-pill red">1</span>
              <i className="fas fa-shopping-cart pl-0" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i className="united kingdom flag m-0" />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#!">Action</a>
              <a className="dropdown-item" href="#!">Another action</a>
              <a className="dropdown-item" href="#!">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link waves-effect">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link waves-effect">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link waves-effect">
              Sign in
            </a>
          </li>
          <li className="nav-item pl-2 mb-2 mb-md-0">
            <a href="#!" type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
          </li>
        </ul>
      </div>
      {/* Links */}
      {/* Navbar */}

    // <header>
    //   <div className="containers">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-white">
    //       <div className="navLogo col-md-2 pe-3">
    //         <img src={navLogo} alt="" />
    //       </div>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon" />
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav mr-auto">
    //           <form className="navbar-form navbar-left p-2 pt-4" role="search">
    //             <input
    //               type="hidden"
    //               name="_csrf"
    //               value="1aa48974fa534da747e1cd8d4209de80"
    //             />
    //             <div className="form-group d-flex">
    //               <input
    //                 type="text"
    //                 className="form-control search-top px-5 me-3"
    //                 placeholder="Search Product"
    //                 name="search_text"
    //               />
    //               <input
    //                 className="btn btn-success mx-2"
    //                 type="button"
    //                 placeholder="Search Products"
    //                 value="Search"
    //               />
    //             </div>
    //           </form>
    //         </ul>
    //         <div className="userSection justify-between-content p-2 px-2">
    //           <i className="fa fa-sign-out px-1" aria-hidden="true"></i>
    //           <button>Login</button>
    //         </div>
    //         <div className="userSection justify-between-content p-2">
    //           <i className="fa fa-user-plus px-1" aria-hidden="true"></i>
    //           <button>Register</button>
    //         </div>
    //         <div className="myCart p-2">
    //           <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
    //           <small className="fw-bold">(BDT 0.00)</small>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </header>
    
  );
};

export default Navbar;
