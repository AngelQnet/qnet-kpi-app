import React from 'react';
import LogoImage from "../assets/logos/Qnet_LOGO_white.png";
import LoginForm from '../components/LoginForm'; // Ensure correct casing

const Login = () => {
  return (
    <div className="custom-bg">
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100 justify-content-center mx-9">

          {/* Left Column: Logo */}
          <div className="col-md-6 text-center d-flex align-items-center justify-content-center login-welcome-section">
            <img
              src={LogoImage}
              alt="Company Logo"
              className="img-fluid mb-3 login-logo"
            />
          </div>

          {/* Right Column: Login Form */}
          <div className="col-md-8 d-flex align-items-center justify-content-center login-section box-border">
            <div className="w-100">
              <h1 className="text-center mb-4 fw-bold">Welcome back!</h1>
              <p className='text-center'>Sign in to the Key Performance Indicator App using your company credentials.</p>
              <LoginForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
