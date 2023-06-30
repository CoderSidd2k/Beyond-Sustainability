import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Carbon from "../components/Carbon"
const page = () => {
  return (
    <main>
      <Navbar />
      <section className="max-w-screen-lg mx-auto lg:px-0 px-2">
               <Hero />
               <Product/>
               <Carbon/>
      </section>
    </main>
  );
};

export default page;
