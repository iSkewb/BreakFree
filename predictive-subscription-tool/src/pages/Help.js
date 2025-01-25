import React from 'react';
import './Help.css'; // Make sure to link to a CSS file for styling

const Help = () => {
  return (
    <div className="help-container">
      <h2>Help & Support</h2>
      
      <section className="help-section">
        <h3>Getting Started</h3>
        <p>Welcome to the Predictive Subscription Tool! Here’s how to get started:</p>
          <p> -Edit your account</p>
          <p> -Add your subscriptions</p>
          <p> -Monitor and manage your recurring expenses</p>
      </section>
      
      <section className="help-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item">
          <h4>How do I link my subscriptions?</h4>
          <p>To link your subscriptions, just swiftly drop them in on the Subscriptions page.</p>
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
        <p><span>Email:</span> support@predictivesubscription.com</p>
        <p><span>Phone:</span> 1-800-123-4567</p>
        <p><span>Live Chat:</span> Available on the "Contact Us" page</p>
      </section>
    </div>
  );
};

export default Help;
