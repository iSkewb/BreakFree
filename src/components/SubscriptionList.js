import React from 'react';
import './SubscriptionList.css';

const SubscriptionList = ({ subscriptions, onDelete, onToggleFlag }) => {
  const getMonthlyCost = (subscription) =>
    subscription.frequency === 'yearly' ? subscription.cost / 12 : subscription.cost;

  const sortedSubscriptions = [...subscriptions].sort((a, b) => {
    return getMonthlyCost(b) - getMonthlyCost(a);
  });

  return (
    <div className="subscription-list">
      <h2>Your Subscriptions</h2>
      <ul>
        {sortedSubscriptions.map((sub) => (
          <li key={sub.id} className={sub.flagged ? 'flagged' : ''}>
            <span>
              <strong>{sub.name}</strong> - ${sub.cost.toFixed(2)} ({sub.frequency})
              {sub.flagged && <span className="flagged-badge">Reconsidering</span>}
            </span>
            <div className="list-actions">
              <button
                onClick={() => onToggleFlag(sub.id)}
                className={`flag-button${sub.flagged ? ' active' : ''}`}
                title={sub.flagged ? 'Remove flag' : 'Flag for review'}
              >
                {sub.flagged ? 'Unflag' : 'Flag'}
              </button>
              <button
                onClick={() => onDelete(sub.id)}
                aria-label={`Delete ${sub.name} subscription`}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
