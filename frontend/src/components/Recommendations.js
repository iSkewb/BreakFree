// src/components/Recommendations.js
import React from 'react';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="recommendations">
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((rec, index) => (
          <div key={index} className="recommendation">
            <p>{rec}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default Recommendations;
