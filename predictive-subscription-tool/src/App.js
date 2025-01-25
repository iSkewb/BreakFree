import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSubscription from './components/AddSubscription';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Add the NavBar component */}
      <Routes>
        <Route path="/add-subscription" element={<AddSubscription />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/help" element={<div>Help Page</div>} /> Placeholder component */}
        {/* <Route path="/contact-us" element={<div>Contact Us Page</div>} /> Placeholder component */}
        <Route path="/" element={<AddSubscription />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;