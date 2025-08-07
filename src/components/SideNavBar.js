// src/components/SideNavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

function SideNavBar() {
  const logout = useLogout();

  // State to toggle dropdowns
  const [adminOpen, setAdminOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);

  return (
    <div className="sidebar-container">
      {/* ------------------ USER ------------------ */}
      <div className='profileUser'>
        <i
          className="fas fa-user-circle"
          style={{ fontSize: '32px', cursor: 'pointer', color: '#333' }}
          title="Profile"
        ></i>
        <p className='userName'>First Name</p>        
        <button
          onClick={logout}
          className="logout-btn m-4">
          <i className="fas fa-power-off me-1"></i>
        </button>
      </div>
      <div className="p-3 sidenav">
      
      <ul className="nav flex-column sidebar-menu">
        {/* ------------------ HOME ------------------ */}
        <li className="header">HOME</li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            <i className="fa fa-home me-1"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fa-solid fa-chart-line me-1"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fa-solid fa-user me-1"></i> My KPI
          </Link>
        </li>

        {/* ------------------ ADMIN ------------------ */}
        <li
          className="header"
          style={{ cursor: 'pointer' }}
          onClick={() => setAdminOpen(!adminOpen)}
        >
          ADMIN {adminOpen ? '▲' : '▼'}
        </li>
        {adminOpen && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/strategy-description">
              Strategy Description
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kpi-management">
              KPI Management
            </Link>
          </li>
        </>
      )}

      {/* ------------------ SYSTEM ------------------ */}
      <li
        className="header"
        style={{ cursor: 'pointer' }}
        onClick={() => setSystemOpen(!systemOpen)}
      >
        SYSTEM {systemOpen ? '▲' : '▼'}
      </li>
      {systemOpen && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/manage-users">
              Manage Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/perspective-strategy">
              Perspective and Strategy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/department-tolerance">
              Department and Tolerance
            </Link>
          </li>
        </>
        )}
      </ul>
    </div>
  </div>
  );
}

export default SideNavBar;
