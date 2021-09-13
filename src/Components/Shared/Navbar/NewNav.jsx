import React, { useState } from 'react';
import { RiBarChartHorizontalFill, RiCloseLine } from 'react-icons/ri';
// import { GrClose } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import DropDownItem from '../../DropDownItem';

export default function NewNav() {
  const [isOpen, setIsOpen] = useState(false);
  const topCats = useSelector((state) => state.category.topCategory);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeTab, setActiveTab] = useState('categories');

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
          <span>search</span>
          <span>cart</span>
        </div>
        <MediaQuery minWidth="768px">
          <div className="account_menu">
            <span>login</span>
            <span>register</span>
          </div>
        </MediaQuery>
      </nav>
      {isOpen && (
        <>
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
              <div className="account_menu">
                <span>login</span>
                <span>register</span>
                <span>Cart</span>
              </div>
            </MediaQuery>
          )}
        </>
      )}
    </header>
  );
}
