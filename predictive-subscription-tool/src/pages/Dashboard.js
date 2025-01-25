import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // State for holding summary data or metrics
  const [summary, setSummary] = useState({
    totalSubscriptions: 0,
    totalSpending: 0,
  });

  // Placeholder data for recent activities
  const recentActivities = [
    { id: 1, action: 'Added Netflix subscription', date: '2025-01-20' },
    { id: 2, action: 'Updated Spotify subscription', date: '2025-01-18' },
    { id: 3, action: 'Canceled Amazon Prime subscription', date: '2025-01-15' },
  ];

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
          <p>${summary.totalSpending}</p>
        </div>
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
