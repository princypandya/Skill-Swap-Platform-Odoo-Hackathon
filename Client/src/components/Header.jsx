// Header.jsx
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/skillzyylogo.png";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Placeholder */}
        <div className="logo-placeholder">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </div>

        {/* Navigation */}
        {/* Navigation + Profile in one flex group */}
<div className="nav-profile-wrapper">
  <nav className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
    {location.pathname !== "/" && (
      <Link to="/" className="nav-link">
        Home
      </Link>
    )}
    <Link
      to="/requests"
      className={location.pathname === "/requests" ? "active" : ""}
    >
      Requests
    </Link>
  </nav>

  <div className="profile-container">
    <div
      className="profile-icon"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="Profile"
      />
    </div>
    {showDropdown && (
      <div className="dropdown-menu">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    )}
  </div>
</div>

       

        <div className="menu-toggle">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-icon"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
