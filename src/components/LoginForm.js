import React from 'react';
import { login, getUser } from '../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Logging in...");

    try {
      const result = await login(); // this should trigger redirect/auth flow
      console.log("Login result:", result);

      const userInfo = await getUser();
      if (userInfo) {
        localStorage.setItem('auth', JSON.stringify(userInfo));
        navigate("/home");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Login failed:", error);
      navigate("/login");
    }
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="purple-solid-btn"
        type="button"
      >
        Sign-in with WSO2
      </button>
    </div>
  );
};

export default LoginForm;
