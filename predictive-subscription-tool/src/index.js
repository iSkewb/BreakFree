import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { SubscriptionProvider } from './context/SubscriptionContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SubscriptionProvider>
      <App />
    </SubscriptionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);