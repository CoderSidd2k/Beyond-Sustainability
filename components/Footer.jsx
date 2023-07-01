import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import bnbn from '../Resources/bnbn.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="flex items-center">
            <img src={bnbn.src} alt="Logo" className="h-12" />
          </div>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
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
          <div className="flex items-center">
            <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaFacebook />
            </a>
            <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-gray-600 p-2">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-4 text-gray-600 mx-10 px-4 md:hidden">
          <p className="text-sm">
            <span className="">
              © 2020 Beyond Sustainability. All rights reserved.
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline pr-2">
                Privacy Policy
              </a>
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline ">
                Terms of Service
              </a>
            </span>
          </p>
        </div>
        <div className="hidden md:flex justify-center mt-4 text-gray-600 ">
          <p className="text-sm">
            <span className="">
              © 2020 Beyond Sustainability. All rights reserved.
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline">
                Privacy Policy
              </a>
            </span>
            <span className="">
              <a href="#" className="text-gray-600 hover:underline">
                Terms of Service
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
