import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import bnbn from '../Resources/bnbn.png';
const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto flex items-center justify-between max-w-6xl px-4">
        <div className="flex items-center">
          <img src={bnbn.src} alt="Logo" className="h-12" />
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-black hover:text-gray-600">
            Products
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            About Us
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            Careers
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            Blogs
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-600">
            <FaInstagram />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaFacebook />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaPinterest />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
