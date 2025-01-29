import React from 'react';
import '../styling/Pages2.css'; // Import the CSS file

const SubscriptionList = ({ subscriptions, onDelete }) => {
  // Helper function to calculate monthly equivalent cost
  const getMonthlyCost = (subscription) =>
    subscription.frequency === 'yearly' ? subscription.cost / 12 : subscription.cost;

  // Sort subscriptions by monthly cost in descending order
  const sortedSubscriptions = [...subscriptions].sort((a, b) => {
    return getMonthlyCost(b) - getMonthlyCost(a);
  });

  return (
    <div className="subscription-list">
      <h2>Your Subscriptions</h2>
      <ul>
        {sortedSubscriptions.map((sub) => (
          <li key={sub.id}>
            <span>
              <strong>{sub.name}</strong> - ${sub.cost.toFixed(2)} ({sub.frequency})
            </span>
            <button
              onClick={() => onDelete(sub.id)} // Use unique ID for deletion
              aria-label={`Delete ${sub.name} subscription`}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
