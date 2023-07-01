import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

const Carbon = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row  md:ml-12 mt-8 md:mt-0 text-left">
        <div>
          <p className="text-gray-600">Our Product</p>
          <h1 className="text-3xl font-bold">Carbon Management</h1>
          <p className="text-gray-600">
            Measure carbon emissions and the supply chain of your business
            Develop de-carbonization projects
            Offset your carbon emissions through offset projects
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-none">
            Book a Demo
          </button>
        </div>
        <div className=" md:ml-12 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold">ESG Strategy</h1>
          <p className="text-gray-600">
            Integrate ESG strategies and governance frameworks
            Identify ESG risks and opportunities
            ESG dashboards & reports
            Generate a yearly ESG report
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-none">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carbon;
