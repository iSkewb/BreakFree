import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file
import logo from '../images/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
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