import React from 'react';
import './Profile.css';

const Profile = () => {
  const userInfo = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    memberSince: "March 2023",
    subscriptionPlan: "Premium",
    recentActivity: ["Updated subscription to Spotify", "Added Netflix subscription", "Viewed analytics dashboard"],
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">User Profile</h1>
        <div className="profile-details">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Member Since:</strong> {userInfo.memberSince}</p>
          <p><strong>Subscription Plan:</strong> {userInfo.subscriptionPlan}</p>
        </div>
        <div className="profile-activity">
          <h2>Recent Activity</h2>
          <ul>
            {userInfo.recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
