import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              VR Arena
            </span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/games" className="text-gray-300 hover:text-purple-400 transition">Games</Link>
            <Link to="/tournaments" className="text-gray-300 hover:text-purple-400 transition">Tournaments</Link>
            <Link to="/events" className="text-gray-300 hover:text-purple-400 transition">Events</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar