import React, { useState } from 'react';
import './Navbar.scss';
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
import DropDownItem from '../../DropDownItem';
// import navLogo from '../../../Assets/Images/deoloy-logo.jpeg';

const Navbar = () => {
  const topCats = useSelector((state) => state.category.topCategory);
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <img src="https://deploy.com.bd/assets/uploads/logo.jpeg" alt="" />
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav text-white mr-0 ml-auto">
              <div className="userSection justify-between-content p-2">
                <i className="fa fa-sign-out px-2" aria-hidden="true"></i>
                <span>Login</span>
              </div>
              <div className="userSection justify-between-content p-2">
                <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
                <span>Register</span>
              </div>

              <MediaQuery maxWidth="767px">
                {/* <p>Category items {activeMenu}</p> */}
                <div className="mobile_category">
                  {topCats.map((item, index) => (
                    <DropDownItem
                      active={activeMenu === index}
                      setActiveMenu={setActiveMenu}
                      key={item.tCatId}
                      item={{ ...item, index }}
                    />
                  ))}
                </div>
              </MediaQuery>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
