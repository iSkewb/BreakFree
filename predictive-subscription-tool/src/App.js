import React, { useState } from 'react';
import SubscriptionList from './components/SubscriptionList';
import AddSubscription from './components/AddSubscription';
import './App.css';

const App = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  const handleAddSubscription = (subscription) => {
    setSubscriptions([...subscriptions, subscription]);
  };

  const handleDeleteSubscription = (index) => {
    const updatedSubscriptions = subscriptions.filter((_, i) => i !== index);
    setSubscriptions(updatedSubscriptions);
  };

  return (
    <div className="App">
      <h1>Team FREE - Subscription Management Tool</h1>
      <AddSubscription onAdd={handleAddSubscription} />
      <SubscriptionList
        subscriptions={subscriptions}s
        onDelete={handleDeleteSubscription}
      />
    </div>
  );
};

export default App;
