import React, { useState } from 'react';
import NavBar from './NavBar'; // Import the NavBar component

const AddSubscription = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [category, setCategory] = useState('entertainment');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, cost, frequency, category });
    setName('');
    setCost('');
    setCategory('entertainment');
  };

  return (
    <div>
      <NavBar /> {/* Add the NavBar component */}
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