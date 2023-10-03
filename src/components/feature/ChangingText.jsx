"use client"

// components/ChangingText.js
import { useState, useEffect } from 'react';
import { Orbitron } from 'next/font/google';

// FONT FOR H1

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const ChangingText = ({ text }) => {

  // TITLE CAREER
  const changingTexts = ["Software Engineer", "Full-Stack Developer", "Indie Hacker", "Web Developer", ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // USING USEEFFECT TO LOOP THROUGH THE ARRAY"
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 1000); // Change the text every 2 seconds (2000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [changingTexts.length]);

  return (
    <section>
      <div className=''>

        {/* MAIN CONTENT */}
        <h1 
          className={`${orbitron.className} font-bold text-lg md:text-2xl lg:text-3xl transition-all duration-500 ease-in-out`}
        >
          {changingTexts[currentIndex]}
        </h1>
      </div>
    </section>
    
  );
};

export default ChangingText;
