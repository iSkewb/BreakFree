import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const features = [
  {
    icon: '◈',
    title: 'Track Everything',
    desc: 'Add all your subscriptions in one place and see exactly what you\'re spending each month.',
  },
  {
    icon: '◉',
    title: 'Visualize Spending',
    desc: 'Category breakdowns and charts make it easy to spot where your money is going.',
  },
  {
    icon: '◎',
    title: 'Never Miss a Renewal',
    desc: 'See upcoming renewal dates at a glance so surprises stay off your bank statement.',
  },
  {
    icon: '◐',
    title: 'AI Financial Advice',
    desc: 'Get personalized recommendations on how to optimize your subscriptions.',
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-hero">
        <div className="landing-badge">Subscription Management</div>
        <h1 className="landing-headline">
          Break free from <span className="landing-accent">subscription chaos</span>
        </h1>
        <p className="landing-sub">
          One dashboard to track, analyze, and optimize everything you pay for every month.
        </p>
        <div className="landing-actions">
          <button className="landing-btn-primary" onClick={() => navigate('/dashboard')}>
            Go to Dashboard
          </button>
          <button className="landing-btn-secondary" onClick={() => navigate('/add-subscription')}>
            Add Subscriptions
          </button>
        </div>
      </div>

      <div className="landing-features">
        {features.map((f) => (
          <div key={f.title} className="landing-feature-card">
            <div className="landing-feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
