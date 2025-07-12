// src/App.jsx
import React from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <section className="home-container">
        <h1 className="home-heading">Swap Skills. Learn Together.</h1>
        <p className="home-subtext">
          Offer what you know. Learn what you don’t. Connect with people — completely free.
        </p>
        <div className="home-buttons">
          <button className="post-button">Post a Skill</button>
          <button className="browse-button">Browse Skills</button>
        </div>
      </section>
    </div>
  );
};

export default App;
