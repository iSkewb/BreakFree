import React, { useEffect, useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import CategoryPieChart from '../components/CategoryPieChart'; // Import the CategoryPieChart component
import './Dashboard.css';

const Dashboard = () => {
  const { subscriptions } = useSubscriptions();
  const [summary, setSummary] = useState({ totalSubscriptions: 0, totalSpending: 0 });
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const totalSubscriptions = subscriptions.length;
    const totalSpending = subscriptions.reduce((total, sub) => total + sub.cost, 0);
    setSummary({ totalSubscriptions, totalSpending });

    // Update recent activities when subscriptions change
    const newActivities = subscriptions.map((sub, index) => ({
      id: index + 1,
      action: `Added ${sub.name} subscription`,
      date: new Date().toISOString().split('T')[0],
    }));
    setRecentActivities(newActivities);
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