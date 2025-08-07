// src/components/Layout.js
import React, { useState } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  document.body.classList.toggle("dark-mode");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <NavBar onToggleSidebar={toggleSidebar} />
      <div className="d-flex">
        <SideNavBar isOpen={isSidebarOpen} onClose={closeSidebar} />
        {isSidebarOpen && (
          <div className="sidebar-backdrop" onClick={closeSidebar}></div>
        )}
        <div className="flex-grow-1 p-4 custom-bg">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default Layout;

