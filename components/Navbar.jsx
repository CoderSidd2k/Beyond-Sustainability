"use client"
import React, { useState } from 'react';
import bnbn from '../Resources/bnbn.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
        <img src={bnbn.src} alt="" className="h-12 w-auto" />

        </div>
        <div className="hidden md:flex md:items-center">
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 px-4">Services</a>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
        <div className="relative md:hidden">
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-white py-2 px-4 shadow-lg w-56">
              <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">
                Home
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">
                About
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">
                Services
              </a>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
