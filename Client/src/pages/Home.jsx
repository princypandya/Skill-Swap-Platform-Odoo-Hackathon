// src/components/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <h2 className="home-title">Swap Skills. Learn Together.</h2>
      <p className="home-description">
        Offer what you know. Learn what you don't. Connect with people to exchange skills — completely free.
      </p>
      <div className="home-buttons">
        <button className="post-skill-button">Post a Skill</button>
        <button className="browse-skill-button">Browse Skills</button>
      </div>
    </section>
  );
};

export default Home;
