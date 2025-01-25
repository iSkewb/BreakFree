import React from 'react';
import './NavBar.css'; // Assuming you will create a CSS file for styling

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a href="/add-subscription">Add Subscription</a>
      <a href="/dashboard">Dashboard</a>
    </div>
  );
};

export default NavBar;