"use client"
import { useState } from 'react';

const QuoteCarousel = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    // Add more quotes here
  ];

  const nextQuote = () => {
    setActiveQuote((activeQuote + 1) % quotes.length);
  };

  const prevQuote = () => {
    setActiveQuote((activeQuote + quotes.length - 1) % quotes.length);
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="max-w-lg bg-white rounded-lg p-8 relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
        <p className="text-lg italic text-center">{quotes[activeQuote]}</p>
        <div className="absolute top-0 left-0 right-0 flex justify-between mt-4">
          <button
            className="text-black text-2xl p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
            onClick={prevQuote}
          >
            &lt;
          </button>
          <button
            className="text-black text-2xl p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
            onClick={nextQuote}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">Find out how you can improve your sustainability journey with a free assessment</h1>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Let's do it</button>
      </div>
    </div>
  );
};

export default QuoteCarousel;
