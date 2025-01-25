import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './CategoryPieChart.css'; // Import the CSS file

const CategoryPieChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];
  const GRAY_COLOR = '#CCCCCC';

  // Check if data is empty or has no meaningful values
  const hasData = data && data.some((entry) => entry.value > 0);

  // Default data for "No Subscriptions" scenario
  const defaultData = [{ name: 'No Subscriptions', value: 1 }];

  return (
    <div className="pie-chart-container">
      <PieChart width={400} height={400}>
        <Pie
          data={hasData ? data : defaultData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={150}
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
        <Tooltip />
        {hasData ? <Legend /> : null} {/* Render Legend only if there is data */}
      </PieChart>
      {!hasData && (
        <div className="no-data-message">
          <p>No Subscriptions</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPieChart;
