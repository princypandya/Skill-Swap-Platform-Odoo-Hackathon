import React, { useState } from 'react';
import './Auth.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [visibility, setVisibility] = useState("public");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const payload = {
      name: form[0].value,
      email: form[1].value,
      password: form[2].value,
      confirm_password: form[3].value,
      visibility: visibility,
      location: "", // optional, add if needed
      image: null   // optional, handle file/image upload if needed
    };

    try {
      const response = await fetch(`http://${import.meta.env.VITE_NETWORK}:${import.meta.env.VITE_PORT}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        console.log(data);
        // Redirect or login user
      } else {
        alert(data.detail || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
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
