import React, { useEffect, useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import CategoryPieChart from '../components/CategoryPieChart'; // Import the CategoryPieChart component
import '../styling/Dashboard.css';

const Dashboard = () => {
  const { subscriptions } = useSubscriptions();
  const [summary, setSummary] = useState({ totalSubscriptions: 0, totalSpending: 0 });
  const [recentActivities, setRecentActivities] = useState([]);
  const [nextRenewals, setNextRenewals] = useState([]);

  useEffect(() => {
    const totalSubscriptions = subscriptions.length;

    // Calculate total monthly spending
    const totalSpending = subscriptions.reduce((total, sub) => {
      if (sub.frequency === 'yearly') {
        return total + sub.cost / 12; // Divide yearly cost by 12
      }
      return total + sub.cost; // Add monthly cost as is
    }, 0);

    setSummary({ totalSubscriptions, totalSpending });

    // Update recent activities when subscriptions change
    const newActivities = subscriptions.map((sub, index) => ({
      id: index + 1,
      action: `Added ${sub.name} subscription`,
      date: new Date().toISOString().split('T')[0],
    }));
    setRecentActivities(newActivities);

    // Calculate next renewal dates
    const newNextRenewals = subscriptions.map((sub) => {
      const nextRenewalDate = calculateNextRenewalDate(sub);
      return {
        id: sub.id,
        name: sub.name,
        nextRenewalDate,
      };
    });
    setNextRenewals(newNextRenewals);
  }, [subscriptions]);

  // Function to calculate the next renewal date
  const calculateNextRenewalDate = (subscription) => {
    const currentDate = new Date();
    let nextRenewalDate;
    if (subscription.date) {
      nextRenewalDate = new Date(subscription.date);
    } else {
      nextRenewalDate = new Date();
    }

    if (isNaN(nextRenewalDate)) {
      // Handle invalid startDate
      return 'Invalid Date';
    }

    while (nextRenewalDate <= currentDate) {
      if (subscription.frequency === 'monthly') {
        nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 1);
      } else if (subscription.frequency === 'yearly') {
        nextRenewalDate.setFullYear(nextRenewalDate.getFullYear() + 1);
      }
    }

    return nextRenewalDate.toISOString().split('T')[0];
  };

  // Prepare the data for the pie chart
  const getCategoryData = () => {
    const categoryData = subscriptions.reduce((acc, subscription) => {
      const { category, cost, frequency } = subscription;
      const adjustedCost = frequency === 'yearly' ? cost / 12 : cost; // Adjust cost based on frequency
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += adjustedCost;
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
          <h3>Total Monthly Spending</h3>
          <p>${summary.totalSpending.toFixed(2)}</p>
        </div>
      </div>

      {/* Category Pie Chart Section */}
      <div className="dashboard-category-pie-chart">
        <h3>Monthly Spending by Category</h3>
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

      {/* Next Renewal Dates Section */}
      <div className="dashboard-recent-activities"> {/* Fix the class name */}
        <h3>Next Renewal Dates</h3>
        <ul>
          {nextRenewals.map((renewal) => (
            <li key={renewal.id}>
              <span>{renewal.name}</span>
              <span className="activity-date">{renewal.nextRenewalDate}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;