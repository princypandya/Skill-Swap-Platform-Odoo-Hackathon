import React from 'react';
import './UserBox.css';

const UserBox = ({ name, skillsOffered, skillsWanted, rating, profilePhoto }) => {
  // Determine rating color class
  let ratingClass = '';
  if (rating >= 4) ratingClass = 'high-rating';
  else if (rating >= 2.5) ratingClass = 'mid-rating';
  else ratingClass = 'low-rating';

  return (
    <div className={`user-box ${ratingClass}`}>
      <div className="profile-section">
        <img
          src={profilePhoto || "https://via.placeholder.com/100"}
          alt="Profile"
          className="profile-photo"
        />
      </div>

      <div className="info-section">
        <h2 className="user-name">{name}</h2>
        <div className="skills">
          <span className="label offered">Skills Offered =&gt;</span>
          {skillsOffered.map((skill, index) => (
            <span className="skill-tag" key={index}>{skill}</span>
          ))}
        </div>
        <div className="skills">
          <span className="label wanted">Skill Wanted =&gt;</span>
          {skillsWanted.map((skill, index) => (
            <span className="skill-tag" key={index}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="action-section">
        <button className="request-button">Request</button>
        <div className="rating">Rating: {rating}/5</div>
      </div>
    </div>
  );
};

export default UserBox;
