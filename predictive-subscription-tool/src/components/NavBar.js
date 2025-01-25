import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-subscription">Subscriptions</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;