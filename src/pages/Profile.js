import React, { useState } from 'react';
import './Profile.css';

const dropdownData = [
  { key: 'household', title: 'Number of people in the household', options: ['1', '2', '3', '4', '5+'] },
  { key: 'budget', title: 'Monthly Subscription Budget', options: ['$0-$10', '$11-$25', '$26-$50', '$51-$100', '$101-$200', '$200+'] },
  { key: 'student', title: 'Student Status', options: ['Non-Student', 'Student'] },
  { key: 'frequency', title: 'Preferred Subscription Frequency', options: ['Monthly', 'Yearly'] },
];

const loadSaved = () => {
  const saved = localStorage.getItem('profileFormData');
  if (!saved) return null;
  return JSON.parse(saved);
};

const Profile = () => {
  const [saved, setSaved] = useState(loadSaved);
  const [editing, setEditing] = useState(!loadSaved());
  const [formData, setFormData] = useState(() => {
    const s = loadSaved();
    return dropdownData.map((d) => (s ? s[d.title] || '' : ''));
  });

  const handleChange = (index, value) => {
    const next = [...formData];
    next[index] = value;
    setFormData(next);
  };

  const handleSave = () => {
    const data = dropdownData.reduce((acc, d, i) => {
      if (formData[i]) acc[d.title] = formData[i];
      return acc;
    }, {});
    localStorage.setItem('profileFormData', JSON.stringify(data));
    setSaved(data);
    setEditing(false);
  };

  const handleEdit = () => {
    setFormData(dropdownData.map((d) => (saved ? saved[d.title] || '' : '')));
    setEditing(true);
  };

  if (!editing && saved) {
    return (
      <div className="profile-container">
        <div className="profile-view-header">
          <div className="profile-avatar">{String(saved['Number of people in the household'] || '1').charAt(0)}</div>
          <div>
            <h2>Your Profile</h2>
            <p className="profile-subtitle">Subscription preferences</p>
          </div>
        </div>

        <div className="profile-fields">
          {dropdownData.map((d) => (
            <div className="profile-field" key={d.key}>
              <span className="profile-field-label">{d.title}</span>
              <span className="profile-field-value">{saved[d.title] || <span className="profile-unset">Not set</span>}</span>
            </div>
          ))}
        </div>

        <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>{saved ? 'Edit Profile' : "Let's get to know you better!"}</h2>
      <div className="form-wrapper">
        {dropdownData.map((dropdown, index) => (
          <form key={dropdown.key} className="dropdown-form">
            <label htmlFor={`dropdown-${index}`}>{dropdown.title}</label>
            <select
              id={`dropdown-${index}`}
              value={formData[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">Select...</option>
              {dropdown.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </form>
        ))}
      </div>
      <div className="profile-actions">
        <button className="save-button" onClick={handleSave}>Save</button>
        {saved && (
          <button className="cancel-button" onClick={() => setEditing(false)}>Cancel</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
