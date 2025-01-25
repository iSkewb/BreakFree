import React, { useEffect, useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import SubscriptionList from '../components/SubscriptionList';
import CategoryPieChart from '../components/CategoryPieChart'; // Import the CategoryPieChart component
import './Dashboard.css';

const Dashboard = () => {
  const { subscriptions } = useSubscriptions();
  const [summary, setSummary] = useState({ totalSubscriptions: 0, totalSpending: 0 });
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, action: 'Added Netflix subscription', date: '2025-01-20' },
    { id: 2, action: 'Updated Spotify subscription', date: '2025-01-18' },
    { id: 3, action: 'Canceled Amazon Prime subscription', date: '2025-01-15' },
  ]);

  useEffect(() => {
    const totalSubscriptions = subscriptions.length;
    const totalSpending = subscriptions.reduce((total, sub) => total + sub.cost, 0);
    setSummary({ totalSubscriptions, totalSpending });
  }, [subscriptions]);

  // Prepare the data for the pie chart
  const getCategoryData = () => {
    const categoryData = subscriptions.reduce((acc, subscription) => {
      const { category, cost } = subscription;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += cost;
      return acc;
    }, {});

    return Object.keys(categoryData).map((key) => ({
      name: key,
      value: categoryData[key],
    }));
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>

      {/* Summary Section */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Subscriptions</h3>
          <p>{summary.totalSubscriptions}</p>
        </div>
        <div className="summary-card">
          <h3>Total Spending</h3>
          <p>${summary.totalSpending.toFixed(2)}</p>
        </div>
      </div>

      {/* Category Pie Chart Section */}
      <div className="dashboard-category-pie-chart">
        <h3>Spending by Category</h3>
        <CategoryPieChart data={getCategoryData()} /> {/* Render the CategoryPieChart component */}
      </div>

      {/* Recent Activity Section */}
      <div className="dashboard-recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {recentActivities.map((activity) => (
            <li key={activity.id}>
              <span>{activity.action}</span>
              <span className="activity-date">{activity.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;