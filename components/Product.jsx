import React from 'react';
import buisimg from '../Resources/buisimg.jpg';
import { CiCircleCheck } from 'react-icons/ci';

const Product = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col md:flex-row">
        <div className="">
          <img src={buisimg.src} alt="Business" className="md:max-w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-8">
          <h1 className="text-3xl font-bold mb-4">Why Make Our Business Sustainable?</h1>
          <ul className="mb-8">
            <li className="flex items-start">
              <CiCircleCheck className="inline-block mr-2 text-green-500" />
              <span>Reduce cost</span>
            </li>
            <li className="flex items-start">
              <CiCircleCheck className="inline-block mr-2 text-green-500" />
              <span>Competitive advantage</span>
            </li>
            <li className="flex items-start">
              <CiCircleCheck className="inline-block mr-2 text-green-500" />
              <span>Transparency to customers and investors</span>
            </li>
            <li className="flex items-start">
              <CiCircleCheck className="inline-block mr-2 text-green-500" />
              <span>Be ahead of climate regulations and compliances</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
