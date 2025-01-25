import React from 'react';
import './NavBar.css'; // Assuming you will create a CSS file for styling

const NavBar = () => {
  return (
    <div className="nav-bar">
      <button onClick={() => window.location.href = '/add-subscription'}>Add Subscription</button>
      <button onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
    </div>
  );
};

export default NavBar;