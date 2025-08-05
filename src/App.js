import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store/authSlice';
import { userManager } from './auth/AuthProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard'; 
import Home from './pages/Home';
import Callback from './pages/callback';

import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    userManager.getUser().then(user => {
      if (user && !user.expired) {
        dispatch(setUser(user));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Redirect base path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />

        {/* Protected routes under Layout */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
