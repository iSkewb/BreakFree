import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './CategoryPieChart.css'; // Import the CSS file

const CategoryPieChart = ({ data }) => {
  const COLORS = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
  const GRAY_COLOR = '#2a2a4a';

  // Check if data is empty or has no meaningful values
  const hasData = data && data.some((entry) => entry.value > 0);

  // Default data for "No Subscriptions" scenario
  const defaultData = [{ name: 'No Subscriptions', value: 1 }];

  return (
    <div className="pie-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={hasData ? data : defaultData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {(hasData ? data : defaultData).map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={hasData ? COLORS[index % COLORS.length] : GRAY_COLOR}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toFixed(2)}/mo`} />
          {hasData ? <Legend /> : null}
        </PieChart>
      </ResponsiveContainer>
      {!hasData && (
        <div className="no-data-message">
          <p>No Subscriptions</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPieChart;
