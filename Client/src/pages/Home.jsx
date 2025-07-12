import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import UserBox from "./UserBox";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getAppUser"); // adjust your API URL
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error loading users.</div>;
  const extractSkillNames = (skillsArray) => {
    if (!Array.isArray(skillsArray) || skillsArray.length === 0) return [];
    return skillsArray.map(skillObj => skillObj.Skills);
  };

  return (
    <div className="home-container">
      <div>
        <h1>Welcome to Skillzyy</h1>  
        <h3>A place where you can Swap Skills and Learn Together</h3>
        <p>Offer what you know, Learn what you don't</p>
      </div>
      <div className="request-wrapper">
        {users.map((user) => (
        <UserBox
          key={user.id}
          name={user.username}
          skillsOffered={extractSkillNames(user.userskills)}
          skillsWanted={extractSkillNames(user.wantedskills)}
          rating={user.rating ?? 0}
          profilePhoto={user.profilePhoto ?? "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          showRequestButton={true}
          showActions={false}
        />
        ))}
      </div>
    </div>
  );
};

export default Home;
