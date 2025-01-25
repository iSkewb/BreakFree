import React, { useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import SubscriptionList from './SubscriptionList'; // Import SubscriptionList
import './AddSubscription.css'; // Import AddSubscription.css

const AddSubscription = () => {
  const { subscriptions, addSubscription, removeSubscription } = useSubscriptions();
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [category, setCategory] = useState('entertainment');

  // Handle adding a new subscription
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubscription = {
      id: Date.now(), // Generate a unique ID
      name,
      cost: parseFloat(cost),
      frequency,
      category,
    };
    addSubscription(newSubscription); // Update subscriptions via context
    setName('');
    setCost('');
    setFrequency('monthly');
    setCategory('entertainment');
  };

  return (
    <div>
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Add Subscription</h2>
            <label>
              Subscription Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Cost ($):
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
              />
            </label>
            <label>
              Frequency:
              <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </label>
            <label>
              Category:
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="entertainment">Entertainment</option>
                <option value="utilities">Utilities</option>
                <option value="education">Education</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
              </select>
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="subscription-list-container">
          <SubscriptionList
            subscriptions={subscriptions}
            onDelete={(id) => removeSubscription(id)} // Handle delete via context
          />
        </div>
      </div>
    </div>
  );
};

export default AddSubscription;
