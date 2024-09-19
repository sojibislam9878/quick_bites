"use client"

import React, { useState, useEffect } from 'react';

const P = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  return (
    <div className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white py-6 px-10 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold tracking-wide">🔥 50% off first order!</span>
        </div>
        
        <div className="flex items-center space-x-4 text-xl">
          <span>Deal ends in:</span>
          <div className="flex space-x-2 font-semibold">
            <span className="bg-black bg-opacity-30 py-2 px-4 rounded-md">{timeLeft.hours}h</span>
            <span className="bg-black bg-opacity-30 py-2 px-4 rounded-md">{timeLeft.minutes}m</span>
            <span className="bg-black bg-opacity-30 py-2 px-4 rounded-md">{timeLeft.seconds}s</span>
          </div>
        </div>


        <div className="flex items-center space-x-4">
          <span className="text-2xl font-semibold">Free delivery for orders over $20!</span>
          <button className="bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 py-3 px-8 rounded-md font-semibold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default P;
