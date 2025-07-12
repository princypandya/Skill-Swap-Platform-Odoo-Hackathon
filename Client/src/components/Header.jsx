// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-bar">
            {/* Logo */}
            <div className="logo-section">
              <div className="logo-icon">L</div>
              <span className="logo-text">Logo</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#requests">Requests</a>
            </nav>

            {/* Right Side Icons */}
            <div className="right-icons">
              <button onClick={() => openAuthModal('login')} className="auth-button">👤</button>
              <button onClick={toggleMenu} className="menu-toggle">
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <a href="#home">Home</a>
              <a href="#requests">Requests</a>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="modal-overlay">
          <div className="auth-modal">
            <button onClick={closeAuthModal} className="close-button">✕</button>
            <h2>{authMode === 'login' ? 'Login' : 'Register'}</h2>
            <p>Form coming soon...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
