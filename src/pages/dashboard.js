import React from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '../hooks/useLogout';

const Dashboard = () => {
   const user = useSelector(state => state.auth.user);
  const logout = useLogout();

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <button
        
        className="black-solid-btn"
        type="button"
      >
        Dashboard
      </button>
    </div>
  );
};

export default Dashboard;
