import React from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import AddSubscription from './AddSubscription';

const Subscriptions = () => {
  const { subscriptions, removeSubscription } = useSubscriptions();

  return (
    <div>
      <h2>Subscriptions</h2>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>
            {sub.name} - ${sub.cost}
            <button onClick={() => removeSubscription(sub.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <AddSubscription />
    </div>
  );
};

export default Subscriptions;
