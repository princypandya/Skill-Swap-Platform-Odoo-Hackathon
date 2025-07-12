import React, { useState } from 'react';
import './Auth.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [visibility, setVisibility] = useState("public");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use `visibility` state here for backend/form submission
    console.log("Visibility:", visibility);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          required
        />
        <label className="visibility-toggle">
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Passwords
        </label>

        <label className="visibility-setting">
          Profile Visibility:
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>

        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;
