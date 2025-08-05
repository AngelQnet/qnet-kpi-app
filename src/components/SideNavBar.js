// src/components/SideNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function SideNavBar() {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: '250px' }}>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/home">Home</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavBar;
