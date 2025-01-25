import React, { useState } from 'react';

const AddSubscription = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [frequency, setFrequency] = useState('monthly');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, cost, frequency });
    setName('');
    setCost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Subscription</h2>
      <label>
        Name:
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
      <button type="submit">Add</button>
    </form>
  );
};

export default AddSubscription;
