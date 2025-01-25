// src/components/SubscriptionList.js
import React from 'react';

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div className="subscription-list">
      <h2>Your Subscriptions</h2>
      <ul>
        {subscriptions.map((sub, index) => (
          <li key={index}>
            <strong>{sub.name}</strong>: ${sub.amount} (Next Renewal: {sub.renewalDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
