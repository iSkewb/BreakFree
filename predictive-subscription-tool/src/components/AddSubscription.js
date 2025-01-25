import React, { useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import SubscriptionList from './SubscriptionList'; // Import SubscriptionList
import './AddSubscription.css'; // Import AddSubscription.css

const AddSubscription = ({ onAdd, subscriptions, onDelete }) => {
  const { addSubscription } = useSubscriptions();
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [category, setCategory] = useState('entertainment');
  const [newSub, setNewSub] = useState({ name: '', cost: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubscription = { name, cost: parseFloat(cost), frequency, category };
    onAdd(newSubscription);
    setName('');
    setCost('');
    setCategory('entertainment');
  };

  const handleNewSubSubmit = () => {
    addSubscription({ ...newSub, id: Date.now(), cost: parseFloat(newSub.cost) });
    setNewSub({ name: '', cost: '' });
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
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNewSub({ ...newSub, name: e.target.value });
            }}
          />
        </label>
        <label>
          Cost:
          <input
            type="number"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
              setNewSub({ ...newSub, cost: e.target.value });
            }}
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
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
      <div className="subscription-list">
        <SubscriptionList subscriptions={subscriptions} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default AddSubscription;