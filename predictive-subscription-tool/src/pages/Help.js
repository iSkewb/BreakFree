import React from 'react';
import './Help.css'; // Make sure to link to a CSS file for styling

const Help = () => {
  return (
    <div className="help-container">
      <h2>Help & Support</h2>
      
      <section className="help-section">
        <h3>Getting Started</h3>
        <p>Welcome to the Predictive Subscription Tool! Here’s how to get started:</p>
        <ul>
          <li>Sign up for an account</li>
          <li>Link your subscriptions</li>
          <li>Monitor and manage your recurring expenses</li>
        </ul>
      </section>
      
      <section className="help-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>How do I link my subscriptions?</h4>
          <p>To link your subscriptions, simply go to the "Settings" page and connect your payment methods.</p>
        </div>
        <div className="faq-item">
          <h4>Can I cancel subscriptions directly through this tool?</h4>
          <p>Currently, the tool helps you track subscriptions, but you’ll need to cancel them through the service provider’s platform.</p>
        </div>
        <div className="faq-item">
          <h4>How do I track my spending?</h4>
          <p>Your spending is automatically tracked once you link your Capital One account. You’ll receive updates on underused subscriptions and renewal reminders.</p>
        </div>
      </section>
      
      <section className="help-section">
        <h3>Contact Support</h3>
        <p>If you need further assistance, feel free to reach out to our support team:</p>
        <ul>
          <li>Email: support@predictivesubscription.com</li>
          <li>Phone: 1-800-123-4567</li>
          <li>Live Chat: Available on the "Contact Us" page</li>
        </ul>
      </section>
    </div>
  );
};

export default Help;
