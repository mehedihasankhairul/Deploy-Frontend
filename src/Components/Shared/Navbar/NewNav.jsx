import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { RiBarChartHorizontalFill, RiCloseLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import DropDownItem from '../../DropDownItem';
import { logoutUser } from '../../../Store/User/user.action';

export default function NewNav() {
  const [isOpen, setIsOpen] = useState(false);
  const topCats = useSelector((state) => state.category.topCategory);
  const user = useSelector((state) => state.user);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeTab, setActiveTab] = useState('categories');
  const [searchMenu, setSearchMenu] = useState(false);
  const cart = useSelector((state) => state.cart);
  const [q, setQ] = useState('');

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSearch = () => {
    setTimeout(() => {
      history.push(`/search/${q}`);
    }, 1000);
  };

  const handleQuery = (e) => {
    setQ(e.target.value);
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="header">
      <nav>
        <MediaQuery maxWidth="767px">
          <span onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RiCloseLine fontSize="30" />
            ) : (
              <RiBarChartHorizontalFill fontSize="30" />
            )}
          </span>
        </MediaQuery>
        <div className="main_menu">
          <Link to="/">
            <img
              className="logo"
              src="https://deploy.com.bd/assets/uploads/logo.jpeg"
              alt="Deploy Logo"
            />
          </Link>
          <MediaQuery minWidth="768px">
            <span className="search_field">
              <input
                onKeyDown={handleQuery}
                onKeyUp={handleQuery}
                type="text"
                placeholder="search product"
              />
              <BsSearch onClick={handleSearch} />
            </span>
          </MediaQuery>
          <MediaQuery maxWidth="767px">
            <span
              onClick={() => setSearchMenu(!searchMenu)}
              className="search_icon"
            >
              <BsSearch />
            </span>
          </MediaQuery>

          <Link to="/cart">
            {' '}
            <span className="cart_menu">
              <GiShoppingCart size={25} />
              <span>{cart.length}</span>
            </span>{' '}
          </Link>
        </div>
        <MediaQuery minWidth="768px">
          <div className="account_menu">
            {user.email ? (
              <span>
                <span>
                  <FaRegUser />
                  {user.first_name}
                </span>
                <span onClick={handleLogout}>
                  <FiLogOut />
                  Logout
                </span>
              </span>
            ) : (
              <>
                <Link to="/login">
                  <span>
                    <FiLogIn />
                    Login
                  </span>
                </Link>
                <Link to="/registration">
                  <span>
                    <AiOutlineUserAdd />
                    Register
                  </span>
                </Link>
              </>
            )}
          </div>
        </MediaQuery>
      </nav>
      {searchMenu && (
        <MediaQuery maxWidth="767px">
          <span className="search_field_mobile">
            <input
              onKeyDown={handleQuery}
              onKeyUp={handleQuery}
              type="text"
              placeholder="search product"
            />
            <button onClick={handleSearch}>Search</button>
          </span>
        </MediaQuery>
      )}
      {isOpen && (
        <div className="collapse_menu">
          <MediaQuery maxWidth="767px">
            <div className="tab">
              <span
                className={activeTab === 'categories' ? 'active' : null}
                onClick={() => setActiveTab('categories')}
              >
                Categories
              </span>
              <span
                className={activeTab !== 'categories' ? 'active' : null}
                onClick={() => setActiveTab('account')}
              >
                Account
              </span>
            </div>
          </MediaQuery>
          {activeTab === 'categories' ? (
            <MediaQuery maxWidth="767px">
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
          ) : (
            <MediaQuery maxWidth="767px">
              <div className="account_menu_dropdown">
                <Link to="/login">
                  <span>
                    <FiLogIn />
                    Login
                  </span>
                </Link>
                <Link to="/registration">
                  <span>
                    <AiOutlineUserAdd />
                    Register
                  </span>
                </Link>
              </div>
            </MediaQuery>
          )}
        </div>
      )}
    </header>
  );
}
