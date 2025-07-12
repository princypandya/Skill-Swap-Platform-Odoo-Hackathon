import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">
        <Link to="/">SkillSwap</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100">Login</button>
        <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100">Register</button>
      </nav>
    </header>
  );
};

export default Header;
