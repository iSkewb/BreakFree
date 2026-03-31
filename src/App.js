import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SubscriptionProvider } from './context/SubscriptionContext';
import AddSubscription from './components/AddSubscription';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import ChatGPTChat from './components/ChatGPTChat';
import Landing from './pages/Landing';


const App = () => {
  return (
    <SubscriptionProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/add-subscription" element={<AddSubscription />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatGPTChat />} />
        </Routes>
      </Router>
    </SubscriptionProvider>
  );
};

export default App;
