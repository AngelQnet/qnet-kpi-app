import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userManager } from './AuthProvider';
import { setUser, clearUser } from '../store/authSlice';

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const user = await userManager.getUser();
        if (user && !user.expired) {
          dispatch(setUser(user));
        } else {
          dispatch(clearUser());
        }
      } catch (err) {
        console.error("Error loading user:", err);
        dispatch(clearUser());
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Listen for remote signout events
    const onUserSignedOut = () => {
      dispatch(clearUser());
    };

    userManager.events.addUserSignedOut(onUserSignedOut);

    // Cleanup listener on unmount
    return () => {
      userManager.events.removeUserSignedOut(onUserSignedOut);
    };
  }, [dispatch]);

  if (loading) {
    return <div>Loading authentication...</div>;
  }

  return children;
};

export default AuthInitializer;
