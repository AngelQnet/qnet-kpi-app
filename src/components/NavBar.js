// src/components/NavBar.js
import React from 'react';
import LogoImage from "../assets/logos/Qnet_LOGO_no_coop_colored.png";

function NavBar({ onToggleSidebar }) {
  return (
    <nav className="navbar px-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        {/* Left: Logo */}
        <img
          src={LogoImage}
          alt="Company Logo"
          className="img-fluid navbar-logo"
          style={{ height: '40px' }}
        />
        {/* Hamburger Icon for Small Screens */}
        <button
          className="btn d-md-none me-3"
          onClick={onToggleSidebar}
          style={{ fontSize: '24px' }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
