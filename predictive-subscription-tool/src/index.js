import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import global styles if any

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);