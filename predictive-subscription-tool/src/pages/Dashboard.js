// filepath: src/pages/Dashboard.js
import React from 'react';
import CategoryPieChart from './CategoryPieChart'; // Import the CategoryPieChart component


const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>
      <CategoryPieChart data={getCategoryData()} />
    </div>
  );
};

export default Dashboard;