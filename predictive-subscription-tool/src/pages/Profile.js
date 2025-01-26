import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState(Array(5).fill(''));

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
      <div className="form-wrapper">
        {formData.map((value, index) => (
          <form key={index} className="dropdown-form">
            <label htmlFor={`dropdown-${index}`}>Select Option:</label>
            <select
              id={`dropdown-${index}`}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              <option value="">Select...</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </form>
        ))}
      </div>
      <button className="save-button" onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default Profile;
