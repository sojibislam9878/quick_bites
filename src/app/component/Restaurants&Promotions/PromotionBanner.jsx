"use client"
import React, { useState, useEffect } from 'react';
import { FaClock, FaTruck } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

const PromotionBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 0, seconds: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000 });

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
    <section
      
      className="w-[96%] md:w-[80%] mx-auto max-w-[1220px] mt-9 flex flex-col md:flex-row  "
    >
      {/* First Coupon Card */}
      <div
        className="md:flex bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-l-xl rounded-r-xl md:rounded-r-none relative md:border-r-2 md:border-dashed w-full md:w-1/2"
        
        data-aos="fade-right"
      >
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">🔥 50% off first order!</h1>
          <p className="text-white text-sm lg:text-base mb-4">Deal ends in:</p>
          <div className="flex items-center space-x-3 text-white">
            <FaClock className="text-lg lg:text-xl" /> {/* React Icon */}
            <div className="flex space-x-2 text-lg lg:text-xl font-semibold">
              <span className="py-1 px-3 bg-black bg-opacity-50 rounded-md">{timeLeft.hours}h</span>
              <span className="py-1 px-3 bg-black bg-opacity-50 rounded-md">{timeLeft.minutes}m</span>
              <span className="py-1 px-3 bg-black bg-opacity-50 rounded-md">{timeLeft.seconds}s</span>
            </div>
          </div>
        </div>
    
      </div>

      {/* Second Coupon Card */}
      <div
        className="flex bg-gradient-to-r from-pink-400 to-pink-600 p-6 relative w-full md:w-1/2 md:border-l-2  md:border-dashed rounded-r-xl rounded-l-xl md:rounded-l-none mt-4 md:mt-0  border-[#25669f]"
       
        data-aos="fade-left"
      >
        <div className="flex-1">
          <h1 className="text-3xl  lg:text-4xl font-bold text-white mb-2">Free delivery</h1>
          <p className="text-white text-sm lg:text-base font-semibold mb-4">for orders over $20!</p>
          <button className="bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300 py-2 px-6 rounded-md text-white font-semibold flex items-center">
            <FaTruck className="mr-2" /> {/* React Icon */}
            Shop Now
          </button>
        </div>
    
      </div>
    </section>
  );
};

export default PromotionBanner;
