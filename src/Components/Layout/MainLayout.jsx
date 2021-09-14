/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import NewSidebar from '../../Components/Sidebar/NewSidebar';

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="main-area">
      <Navbar />
      <main className="main">
        <aside className="sidebar" onMouseLeave={() => setOpen(false)}>
          <NewSidebar open={open} setOpen={setOpen} />
        </aside>
        <div className="main-container">{children}</div>
      </main>
    </div>
  );
}
