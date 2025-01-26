import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SubscriptionProvider } from './context/SubscriptionContext';
import AddSubscription from './components/AddSubscription';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';
import ContactUs from './pages/ContactUs';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import ChatGPTChat from './components/ChatGPTChat'; // Import the ChatGPTChat component


const App = () => {
  return (
    <SubscriptionProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/add-subscription" element={<AddSubscription />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatGPTChat />} />
          {/* <Route path="/" element={<AddSubscription />} /> */}

        </Routes>
      </Router>
    </SubscriptionProvider>
  );
};

export default App;
