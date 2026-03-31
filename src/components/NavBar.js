import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-subscription">Subscriptions</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/chat">Advisor</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;