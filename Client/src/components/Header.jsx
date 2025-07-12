import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import Login from "../pages/login";
import Signup from "../pages/signup";
import Requests from "../pages/Requests";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Placeholder */}
        <div className="logo-placeholder">
          {/* <img src={logo} alt="Logo" className="logo" /> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-icon">
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/requests" className={location.pathname === "/requests" ? "active" : ""}>Requests</Link>
          <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
          <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>SignUp</Link>
        </nav>

        {/* Desktop Button */}
        <div className="member-btn-desktop">
          <button onClick={() => navigate("/Membership")} className="member-btn">
            Become a member
          </button>
        </div>

        {/* Mobile Button */}
        {isMenuOpen && (
          <div className="member-btn-mobile">
            <button onClick={() => navigate("/Membership")} className="member-btn">
              Become a member
            </button>
          </div>
        )}
      </div>
    </header>

  );
}

export default Header;
