import React from "react";
import "./Home.css";
import UserBox from "./UserBox";

const Home = () => {
  return (
    <div className="bg-red-700 min-h-screen p-6">
      <UserBox
        name="John Doe"
        skillsOffered={["JavaScript", "React"]}
        skillsWanted={["Python", "Django"]}
        rating={3.5}
        profilePhoto="https://via.placeholder.com/100"
      />
    </div>
  );
};

export default Home;
