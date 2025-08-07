import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthInitializer from './auth/AuthInitializer';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Login from './pages/login';
import Dashboard from './pages/dashboard'; 
import Home from './pages/Home';
import MyKPI from './pages/myKPI';
import Callback from './pages/callback';

import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <AuthInitializer>
        <Routes>
          {/* Redirect base path to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Callback />} />

          {/* Protected routes */}
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myKPI" element={<MyKPI />}/>
          </Route>
        </Routes>
      </AuthInitializer>
    </Router>
  );
}

export default App;
