// src/components/Alerts.js
import React from 'react';

const Alerts = ({ alerts }) => {
  return (
    <div className="alerts">
      <h2>Alerts</h2>
      {alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <div key={index} className="alert">
            {alert.message}
          </div>
        ))
      ) : (
        <p>No alerts at the moment.</p>
      )}
    </div>
  );
};

export default Alerts;
