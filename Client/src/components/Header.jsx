import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">SkillSwap</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/requests" className="hover:underline">Requests</Link>

          <div className="relative">
            <FaUserCircle
              size={24}
              className="cursor-pointer"
              title="Profile"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-50">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Login</button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Register</button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <FaBars size={22} className="cursor-pointer" onClick={() => setShowMobileNav(!showMobileNav)} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showMobileNav && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2 text-sm">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/requests" className="block hover:underline">Requests</Link>
          <button className="block w-full text-left hover:underline">Login</button>
          <button className="block w-full text-left hover:underline">Register</button>
        </div>
      )}
    </header>
  );
};

export default Header;
