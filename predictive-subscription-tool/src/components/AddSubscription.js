import React, { useState } from 'react';
import NavBar from './NavBar';
import SubscriptionList from './SubscriptionList'; // Import SubscriptionList

const AddSubscription = ({ onAdd, subscriptions, onDelete }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [category, setCategory] = useState('entertainment');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubscription = { name, cost: parseFloat(cost), frequency, category };
    onAdd(newSubscription);
    setName('');
    setCost('');
    setCategory('entertainment');
  };

  const getCategoryData = () => {
    const categoryData = subscriptions.reduce((acc, subscription) => {
      const { category, cost } = subscription;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += cost;
      return acc;
    }, {});

    return Object.keys(categoryData).map((key) => ({
      name: key,
      value: categoryData[key],
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Subscription</h2>
        <label>
          Subscription Name:
          <input value={name} onChange={(e) => setName(e.target.value)} required />
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
      <SubscriptionList subscriptions={subscriptions} onDelete={onDelete} /> {/* Display current subscriptions */}
    </div>
  );
};

export default AddSubscription;