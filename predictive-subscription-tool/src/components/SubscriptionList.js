import React from 'react';
import './SubscriptionList.css'; // Import the CSS file

const SubscriptionList = ({ subscriptions, onDelete }) => {
  return (
    <div className="subscription-list">
      <h2>Your Subscriptions</h2>
      <ul>
        {subscriptions.map((sub, index) => (
          <li key={index}>
            <span>
              <strong>{sub.name}</strong> </span> ${sub.cost} {sub.frequency}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
