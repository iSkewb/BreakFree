import React, { useEffect, useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';
import CategoryPieChart from '../components/CategoryPieChart';
import './Dashboard.css';

const Dashboard = () => {
  const { subscriptions } = useSubscriptions();
  const [summary, setSummary] = useState({ totalSubscriptions: 0, totalMonthly: 0, totalAnnual: 0, flaggedCount: 0 });
  const [nextRenewals, setNextRenewals] = useState([]);

  const calculateNextRenewalDate = (subscription) => {
    const currentDate = new Date();
    let nextRenewalDate = subscription.date ? new Date(subscription.date) : new Date();
    if (isNaN(nextRenewalDate)) return null;
    while (nextRenewalDate <= currentDate) {
      if (subscription.frequency === 'monthly') {
        nextRenewalDate.setMonth(nextRenewalDate.getMonth() + 1);
      } else {
        nextRenewalDate.setFullYear(nextRenewalDate.getFullYear() + 1);
      }
    }
    return nextRenewalDate;
  };

  const daysUntil = (date) => {
    if (!date) return Infinity;
    const diff = date.getTime() - new Date().getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    const totalMonthly = subscriptions.reduce((total, sub) => {
      return total + (sub.frequency === 'yearly' ? sub.cost / 12 : sub.cost);
    }, 0);
    const flaggedCount = subscriptions.filter((s) => s.flagged).length;

    setSummary({
      totalSubscriptions: subscriptions.length,
      totalMonthly,
      totalAnnual: totalMonthly * 12,
      flaggedCount,
    });

    const renewals = subscriptions.map((sub) => {
      const date = calculateNextRenewalDate(sub);
      return { id: sub.id, name: sub.name, date, days: daysUntil(date), flagged: sub.flagged };
    }).sort((a, b) => a.days - b.days);

    setNextRenewals(renewals);
  }, [subscriptions]);

  const getMonthlyCost = (sub) =>
    sub.frequency === 'yearly' ? sub.cost / 12 : sub.cost;

  const getCategoryData = () => {
    const categoryData = subscriptions.reduce((acc, sub) => {
      acc[sub.category] = (acc[sub.category] || 0) + getMonthlyCost(sub);
      return acc;
    }, {});
    return Object.keys(categoryData).map((key) => ({ name: key, value: categoryData[key] }));
  };

  const topSub = subscriptions.length > 0
    ? subscriptions.reduce((max, sub) => getMonthlyCost(sub) > getMonthlyCost(max) ? sub : max, subscriptions[0])
    : null;

  const flaggedSubs = subscriptions.filter((s) => s.flagged);
  const flaggedMonthly = flaggedSubs.reduce((t, s) => t + getMonthlyCost(s), 0);

  const exportCSV = () => {
    const header = 'Name,Cost,Frequency,Monthly Cost,Category,Next Renewal,Flagged for Review';
    const rows = subscriptions.map((sub) => {
      const renewal = calculateNextRenewalDate(sub);
      const renewalStr = renewal ? renewal.toISOString().split('T')[0] : 'N/A';
      return `"${sub.name}",${sub.cost},${sub.frequency},${getMonthlyCost(sub).toFixed(2)},${sub.category},${renewalStr},${sub.flagged ? 'Yes' : 'No'}`;
    });
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscriptions.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <button className="export-btn" onClick={exportCSV} disabled={subscriptions.length === 0}>
          Export CSV
        </button>
      </div>

      {/* Summary Cards */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Subscriptions</h3>
          <p>{summary.totalSubscriptions}</p>
        </div>
        <div className="summary-card">
          <h3>Monthly Spending</h3>
          <p>${summary.totalMonthly.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Annual Spending</h3>
          <p>${summary.totalAnnual.toFixed(2)}</p>
        </div>
        <div className={`summary-card${summary.flaggedCount > 0 ? ' card-warning' : ''}`}>
          <h3>Flagged for Review</h3>
          <p>{summary.flaggedCount}</p>
        </div>
      </div>

      {/* Insights */}
      {subscriptions.length > 0 && (
        <div className="dashboard-insights">
          <h3>Insights</h3>
          <div className="insights-grid">
            {topSub && (
              <div className="insight-item">
                <span className="insight-label">Most expensive</span>
                <span className="insight-value">
                  {topSub.name} — ${getMonthlyCost(topSub).toFixed(2)}/mo
                </span>
              </div>
            )}
            {flaggedSubs.length > 0 && (
              <div className="insight-item insight-warning">
                <span className="insight-label">Reconsidering ({flaggedSubs.length})</span>
                <span className="insight-value">
                  {flaggedSubs.map((s) => s.name).join(', ')} — saves ${flaggedMonthly.toFixed(2)}/mo if cancelled
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Category Pie Chart */}
      <div className="dashboard-category-pie-chart">
        <h3>Monthly Spending by Category</h3>
        <CategoryPieChart data={getCategoryData()} />
      </div>

      {/* Next Renewal Dates */}
      <div className="dashboard-renewals">
        <h3>Upcoming Renewals</h3>
        {nextRenewals.length === 0 ? (
          <p className="empty-state">No subscriptions yet.</p>
        ) : (
          <ul>
            {nextRenewals.map((renewal) => (
              <li
                key={renewal.id}
                className={
                  renewal.days <= 7 ? 'renewal-soon' : renewal.flagged ? 'renewal-flagged' : ''
                }
              >
                <span>
                  {renewal.name}
                  {renewal.days <= 7 && <span className="renewal-badge">Due soon</span>}
                  {renewal.flagged && renewal.days > 7 && <span className="flagged-badge-sm">Reconsidering</span>}
                </span>
                <span className="activity-date">
                  {renewal.date ? renewal.date.toISOString().split('T')[0] : 'N/A'}
                  {renewal.days <= 7 && renewal.days > 0 && (
                    <span className="days-label"> · {renewal.days}d</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
