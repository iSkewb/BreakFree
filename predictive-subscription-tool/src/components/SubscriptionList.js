import React from 'react';
import './SubscriptionList.css'; // Import the CSS file

const SubscriptionList = ({ subscriptions, onDelete }) => {
  return (
    <div className="subscription-list">
      <h2>Your Subscriptions</h2>
      <ul>
        {subscriptions.map((sub, index) => (
          <li key={index}>
            <strong>{sub.name}</strong>: ${sub.cost} per {sub.frequency} 
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
