import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
  const [photo, setPhoto] = useState('https://via.placeholder.com/150');
  const [name, setName] = useState('Aum Patel');
  const [email, setEmail] = useState('aum@example.com');
  const [dob, setDob] = useState('2004-01-01');
  const [skillsOffered, setSkillsOffered] = useState('JavaScript, React, C++');
  const [skillsWanted, setSkillsWanted] = useState('UI/UX Design, Python');
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await fetch('http://127.0.0.1:5000/upload-photo', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setPhoto(`http://127.0.0.1:5000${data.url}`);
        alert('✅ Photo uploaded successfully!');
      } else {
        alert('❌ Upload failed');
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('❌ Error uploading photo');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const userData = {
      name,
      email,
      dob,
      skills_offered: skillsOffered,
      skills_wanted: skillsWanted,
      profile_photo: photo,
    };

    try {
      setLoading(true);
      const res = await fetch('http://127.0.0.1:5000/save-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (data.success) {
        alert('✅ Profile saved successfully!');
      } else {
        alert('❌ Failed to save profile');
      }
    } catch (err) {
      console.error('Save error:', err);
      alert('❌ Error saving profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          {/* Left Side: Editable Fields */}
          <div className="profile-left">
            <h2>Edit Profile</h2>

            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label>
              Date of Birth:
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </label>

            <label>
              Skills Offered:
              <input type="text" value={skillsOffered} onChange={(e) => setSkillsOffered(e.target.value)} />
            </label>

            <label>
              Skills Wanted:
              <input type="text" value={skillsWanted} onChange={(e) => setSkillsWanted(e.target.value)} />
            </label>

            <button className="save-btn" onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save Profile'}
            </button>
          </div>

          <div className="profile-right">
            <img src={photo} alt="Profile" className="profile-pic" />
            <label className="upload-label">
              {loading ? 'Uploading...' : 'Upload Photo'}
              <input type="file" hidden onChange={handleUpload} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
