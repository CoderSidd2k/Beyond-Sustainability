import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Carbon from "../components/Carbon";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
const page = () => {
  return (
    <main>
      <Navbar />
      <section className="max-w-screen-lg mx-auto lg:px-0 px-2">
               <Hero />
               <Product/>
               <Carbon/>
               <Slider/>
               <Footer/>
      </section>
    </main>
  );
};

export default page;
