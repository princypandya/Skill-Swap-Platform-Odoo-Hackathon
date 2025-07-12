import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Skillzyy</h2>
          <p>Swap Skills. Learn Together.</p>
        </div>

        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Skillzyy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
