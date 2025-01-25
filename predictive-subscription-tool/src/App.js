import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSubscription from './components/AddSubscription';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import ContactUs from './pages/ContactUs';
import NavBar from './components/NavBar';

const App = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  const handleAddSubscription = (subscription) => {
    setSubscriptions([...subscriptions, subscription]);
  };

  const handleDeleteSubscription = (index) => {
    const updatedSubscriptions = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(updatedSubscriptions);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/add-subscription" element={<AddSubscription onAdd={handleAddSubscription} subscriptions={subscriptions} onDelete={handleDeleteSubscription} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<AddSubscription onAdd={handleAddSubscription} subscriptions={subscriptions} onDelete={handleDeleteSubscription} />} />
      </Routes>
    </Router>
  );
};

export default App;