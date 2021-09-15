/* eslint-disable react/prop-types */
import React from 'react';
import NewNav from '../Shared/Navbar/NewNav';

export default function SecondaryLayout({ children }) {
  return (
    <div className="main-area">
      <NewNav />
      <div className="main-container">{children}</div>
    </div>
  );
}
