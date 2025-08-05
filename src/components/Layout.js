// src/components/Layout.js
import React from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <NavBar />
      <div className="d-flex">
        <SideNavBar />
        <div className="flex-grow-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
