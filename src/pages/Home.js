import React from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '../hooks/useLogout';
import NavBar from '../components/NavBar';


const Home = () => {
  const user = useSelector(state => state.auth.user);
  const logout = useLogout();

  if (!user) return <p>Not logged in</p>;

  return (
    <>
    <div>
      <h1>Welcome to home!</h1>
      {/* hi */}
      
    </div>
    </>
    
  );
};

export default Home;
