import React from 'react';
import './SubscriptionList.css'; // Import the CSS file

const SubscriptionList = ({ subscriptions, onDelete }) => {
  // Sort subscriptions by cost, considering yearly subscriptions
  const sortedSubscriptions = [...subscriptions].sort((a, b) => {
    const costA = a.frequency === 'yearly' ? a.cost / 12 : a.cost;
    const costB = b.frequency === 'yearly' ? b.cost / 12 : b.cost;
    return costB - costA; // Sort in descending order
  });

  return (
    <div className="subscription-list">
      <h2>Your Subscriptions</h2>
      <ul>
        {sortedSubscriptions.map((sub, index) => (
          <li key={index}>
            <span>
              <strong>{sub.name}</strong></span> ${sub.cost} {sub.frequency}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
