import React from 'react';
import heroimg from "../Resources/heroimg.jpg";
import compone from "../Resources/compone.jpg";
import comp2 from "../Resources/comp2.jpg";
import comp3 from "../Resources/comp3.jpg";
import Contact from "../components/Contact";
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=' pt-20'>
      <div className='flex items-center justify-center  mb-12'>
        <div className='flex justify-between items-center gap-10 lg:flex-row flex-col-reverse'>
          <div className='p-5 text-left'>
            <h1 className='text-3xl font-bold mb-4'>Let us Transform your sustainability journey.</h1>
            <p className='mb-4'>Reduce your environmental impact by using a scientific data-driven approach and restore damage</p>
            <Link
                href="/contact"
                className="bg-green-600 text-white px-4 py-2 rounded-none "
              >
                Contact us
              </Link>


            
          </div>
          
            <img className='lg:w-1/2 ' src={heroimg.src} alt="" />
          
        </div>
        
      </div>
      <div className="flex flex-col mt-4 gap-5 items-center lg:items-start ">
              <p >Trusted by companies</p>
              <div className=" flex flex-row  h-5 gap-5 items-center justify-between  lg:w-auto">
                <img className='' src={compone.src} alt=""/>
                <img className='' src={comp2.src} alt=""/>
                <img className='h-5 lg:h-auto' src={comp3.src} alt=""/>
                
              </div>
            </div>
    </div>
  );
}

export default Hero;

