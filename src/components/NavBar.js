// src/components/NavBar.js
import React from 'react';
import LogoImage from "../assets/logos/Qnet_LOGO_no_coop_colored.png";

function NavBar() {
  return (
    <nav className="navbar px-3">
       <img
              src={LogoImage}
              alt="Company Logo"
              className="img-fluid mb-3 navbar-logo"
            />
    </nav>
  );
}

export default NavBar;
