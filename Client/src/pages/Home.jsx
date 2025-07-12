import React from "react";
import "./Home.css";
import UserBox from "./UserBox";

const Home = () => {
  return (
    <div className="home-container">
      <div className="request-wrapper">
        <UserBox
          name="John Doe"
          skillsOffered={["JavaScript", "React"]}
          skillsWanted={["Python", "Django"]}
          rating={3.5}
          profilePhoto="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          showRequestButton={true}
          showActions={false}
        />
      </div>
    </div>
  );
};

export default Home;
