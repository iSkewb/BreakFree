// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import SubscriptionList from '../components/SubscriptionList';
import Alerts from '../components/Alerts';
import Recommendations from '../components/Recommendations';

const Dashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Mock API data
    setSubscriptions([
      { name: 'Netflix', amount: 15.99, renewalDate: '2025-02-01' },
      { name: 'Spotify', amount: 9.99, renewalDate: '2025-01-30' },
    ]);
    setAlerts([{ message: 'Netflix renewal coming up soon!' }]);
    setRecommendations([
      'Switch to Spotify family plan to save $5/month.',
      'Consider annual payment for Netflix to save 10%.',
    ]);
  }, []);

  return (
    <div className="dashboard">
      <h1>Subscription Management Dashboard</h1>
      <SubscriptionList subscriptions={subscriptions} />
      <Alerts alerts={alerts} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
};

export default Dashboard;
