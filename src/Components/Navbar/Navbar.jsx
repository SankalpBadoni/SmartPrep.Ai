import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-indigo-950 to-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white text-3xl font-bold hover:text-gray-300 transition duration-300 ease-in-out">
          SmartPrep.Ai
          </Link>
          <div className="space-x-4 hidden md:flex">
            <Link to="/" className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
              Home
            </Link>
            <Link to="/courses" className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
              Courses
            </Link>
            <Link to="/leaderboard" className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
              Leaderboard
            </Link>
            <Link to="/pricing" className="text-white text-lg hover:text-gray-300 transition duration-300 ease-in-out">
              Pricing
            </Link>
            
          </div>
        </div>

        <div className="flex items-center space-x-4">
  <Link to="/login" className="text-white text-lg py-2 px-4 rounded-full bg-transparent border-2 border-transparent hover:bg-transparent hover:border-white transition duration-300 ease-in-out">
    Log In
  </Link>
  <Link to="/signup" className="text-white text-lg py-2 px-4 rounded-full bg-transparent border-2 border-transparent hover:bg-transparent hover:border-white transition duration-300 ease-in-out">
    Sign Up
  </Link>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
