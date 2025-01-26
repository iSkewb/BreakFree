import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const dropdownData = [
    { title: 'Number of people in the household', options: ['1', '2', '3', '4', '5+'] },
    { title: 'Monthly Budget for Subscriptions', options: ['$0-$10', '$11-$25', '$26-$50', '$51-$100', '$101-$200', '$200+'] },
    { title: 'Student Status', options: ['Non-Student', 'Student'] },
    { title: 'Preferred Subscription Frequency', options: ['Monthly', 'Yearly'] }
  ];

  const [formData, setFormData] = useState(Array(dropdownData.length).fill(''));

  const handleChange = (index, value) => {
    const newFormData = [...formData];
    newFormData[index] = value;
    setFormData(newFormData);
  };

  const handleSave = () => {
    const dataToSave = formData.filter(value => value !== '');
    localStorage.setItem('profileFormData', JSON.stringify(dataToSave));
    alert('Data saved successfully!');
  };

  return (
    <div className="profile-container">
      <h2>Let's get to know you better!</h2>
      <div className="form-wrapper">
        {dropdownData.map((dropdown, index) => (
          <form key={index} className="dropdown-form">
            <label htmlFor={`dropdown-${index}`}>{dropdown.title}:</label>
            <select
              id={`dropdown-${index}`}
              value={formData[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">Select...</option>
              {dropdown.options.map((option, optIndex) => (
                <option key={optIndex} value={option}>{option}</option>
              ))}
            </select>
          </form>
        ))}
      </div>
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
