import React from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '../hooks/useLogout';

const Dashboard = () => {
  const user = useSelector(state => state.auth.user);
  const logout = useLogout();

  if (!user) return <p>Not logged in</p>;

  return (
    <div>
      <h4>Dashboard</h4>
    </div>
  );
};

export default Dashboard;
