import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { RiBarChartHorizontalFill, RiCloseLine } from 'react-icons/ri';
import { BsSearch } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import DropDownItem from '../../DropDownItem';
import { searchProduct } from '../../../api/category.api';

export default function NewNav() {
  const [isOpen, setIsOpen] = useState(false);
  const topCats = useSelector((state) => state.category.topCategory);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeTab, setActiveTab] = useState('categories');
  const [searchMenu, setSearchMenu] = useState(false);

  const history = useHistory();

  const handleSearch = async (query) => {
    const results = await searchProduct(query);
    if (results) {
      history.push('/search');
    }
  };

  const handleQuery = (e) => {
    if (e.keyCode === 13) {
      console.log('enter pressed');
      handleSearch(e.target.value);
    }
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
                type="text"
                placeholder="search product"
              />
              <BsSearch />
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
              <span>5</span>
            </span>{' '}
          </Link>
        </div>
        <MediaQuery minWidth="768px">
          <div className="account_menu">
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
      </nav>
      {searchMenu && (
        <MediaQuery maxWidth="767px">
          <span className="search_field_mobile">
            <input type="text" placeholder="search product" />
            <button>Search</button>
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
                {/* <Link to="/cart">
                  <span className="cart_menu">
                    <GiShoppingCart size={25} />
                    <span>5</span>
                  </span>
                </Link> */}
              </div>
            </MediaQuery>
          )}
        </div>
      )}
    </header>
  );
}
