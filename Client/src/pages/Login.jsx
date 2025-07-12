import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Auth/AuthContext";
import "./LoginForm.css";  // Import the external CSS file

const LoginForm = () => {
  const { login, token } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    // try {
      const body = new URLSearchParams();
      body.append("username", userName);
      body.append("password", password);
      console.log("Network:", import.meta.env.VITE_NETWORK);
      const response = await axios.post(
        `http://${import.meta.env.VITE_NETWORK}:${import.meta.env.VITE_PORT}/token`,
        body.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const data = response.data;
      login(data.access_token, data.refresh_token, data.permissions || [], userName);
      // console.log(token);
      navigate("/");
    // } catch (err) {
    //   setError("Invalid username or password");
    // }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Admin Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="form-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
