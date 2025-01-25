import React, { createContext, useContext, useState } from 'react';

// Create the Context
const SubscriptionContext = createContext();

// Custom Hook to use the Context
export const useSubscriptions = () => useContext(SubscriptionContext);

// Context Provider Component
export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([
    // Example data
    { id: 1, name: 'Netflix', cost: 15 },
    { id: 2, name: 'Spotify', cost: 10 },
  ]);

  const addSubscription = (newSubscription) => {
    setSubscriptions((prev) => [...prev, newSubscription]);
  };

  const removeSubscription = (id) => {
    setSubscriptions((prev) => prev.filter((sub) => sub.id !== id));
  };

  return (
    <SubscriptionContext.Provider value={{ subscriptions, addSubscription, removeSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
