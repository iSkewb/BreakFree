import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Pages2.css'; // Import the CSS file
import logo from '../images/1.png'; // Import the logo image

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-subscription">Subscriptions</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/chat">Chat</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;