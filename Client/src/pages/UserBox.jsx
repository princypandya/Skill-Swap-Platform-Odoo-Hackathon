import React from 'react';
import './UserBox.css';

const UserBox = ({
  name,
  skillsOffered,
  skillsWanted,
  rating,
  profilePhoto,
  status,
  showActions,
  showRequestButton,
}) => {
  let ratingClass = '';
  if (rating >= 4) ratingClass = 'high-rating';
  else if (rating >= 2.5) ratingClass = 'mid-rating';
  else ratingClass = 'low-rating';

  return (
    <div className={`user-box ${ratingClass}`}>
      <div className="profile-section">
        <img
          src={profilePhoto || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
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
        {showActions && (
          <>
            {status === "Pending" && (
              <div className="button-group">
                <button className="accept">Accept</button>
                <button className="reject">Reject</button>
              </div>
            )}
            {status && status !== "Pending" && (
              <div className={`status-label ${status.toLowerCase()}`}>{status}</div>
            )}
          </>
        )}

        {showRequestButton && (
  <button
    style={{
      backgroundColor: "#e0f2ff",
      color: "#0369a1",
      padding: "0.5rem 1.2rem",
      border: "none",
      borderRadius: "9999px",
      fontWeight: "600",
      fontSize: "0.95rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#bae6fd";
      e.target.style.transform = "translateY(-1px)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#e0f2ff";
      e.target.style.transform = "translateY(0)";
    }}
  >
    Request
  </button>
)}


        <div className="rating">Rating: {rating}/5</div>
      </div>
    </div>
  );
};

export default UserBox;
