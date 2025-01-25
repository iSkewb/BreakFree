import React, { useState } from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import CategoryPieChart from './CategoryPieChart'; // Import the CategoryPieChart component

const AddSubscription = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [category, setCategory] = useState('entertainment');
  const [subscriptions, setSubscriptions] = useState([]);

  const handleAddSubscription = (subscription) => {
    setSubscriptions([...subscriptions, subscription]);
  };

  const handleDeleteSubscription = (index) => {
    const updatedSubscriptions = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(updatedSubscriptions);
  };
/////////////////////////////////////////////////////////////
  const onAdd = (subscription) => {
    console.log('Subscription added:', subscription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubscription = { name, cost: parseFloat(cost), frequency, category };
    onAdd(newSubscription);
    handleAddSubscription(newSubscription);
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
    </div>
  );
};

export default AddSubscription;