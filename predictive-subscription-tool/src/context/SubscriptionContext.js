import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Context
const SubscriptionContext = createContext();

// Custom Hook to use the Context
export const useSubscriptions = () => useContext(SubscriptionContext);

// Context Provider Component
export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  // Load subscriptions from local storage when the component mounts
  useEffect(() => {
    const storedSubscriptions = localStorage.getItem('subscriptions');
    if (storedSubscriptions) {
      setSubscriptions(JSON.parse(storedSubscriptions));
    }
  }, []);

  // Save subscriptions to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }, [subscriptions]);

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