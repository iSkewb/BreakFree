import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSubscription from './components/AddSubscription';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import NavBar from './components/NavBar';
import SubscriptionList from './components/SubscriptionList'; // Assuming you have this component

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/add-subscription" element={<AddSubscription/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        {/* <Route path="/contact-us" element={<div>Contact Us Page</div>} /> Placeholder component */}
        <Route path="/" element={<AddSubscription />} />
      </Routes>
    </Router>
  );
};

export default App;