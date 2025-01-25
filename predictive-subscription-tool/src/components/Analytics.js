// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const Analytics = ({ subscriptions }) => {
//   const categories = [...new Set(subscriptions.map((sub) => sub.category || 'Uncategorized'))];

//   const data = {
//     labels: categories,
//     datasets: [
//       {
//         label: 'Spending by Category',
//         data: categories.map(
//           (category) =>
//             subscriptions
//               .filter((sub) => sub.category === category)
//               .reduce((sum, sub) => sum + parseFloat(sub.cost || 0), 0) || 0
//         ),
//         backgroundColor: 'rgba(54, 162, 235, 0.6)',
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Analytics</h2>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default Analytics;
