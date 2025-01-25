import React from 'react';
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
            {/* <li><a href="qualifications.html">Qualifications</a></li>
            <li><a href="service.html">Service</a></li>
            <li><a href="genai.html">General AI Page</a></li> */}
        </ul>
    </div>
  );
};

export default NavBar;