import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you will create a CSS file for styling

const NavBar = () => {
  return (
    // <div className="nav-bar">
    //   <a href="/add-subscription">Add Subscription</a>
    //   <a href="/dashboard">Dashboard</a>
    // </div>
    <div class="navbar">
        <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/add-subscription">Subscriptions</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
        </ul>
    </div>
  );
};

export default NavBar;