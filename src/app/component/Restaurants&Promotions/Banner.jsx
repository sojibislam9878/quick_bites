
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';

const Banner = () => {
    const banners = [
        {
            title: "Fast & Fresh Food Delivery",
            description: "Quick Bites Home Delivery offers fast, delicious meals delivered straight to your door, ensuring convenience and great taste.",
            prev: "#slide2",
            next: "#slide1"
        },
        {
            title: "Fast & Fresh Food Delivery",
            description: "Quick Bites Home Delivery offers fast, delicious meals delivered straight to your door, ensuring convenience and great taste.",
            prev: "#slide3",
            next: "#slide2"
        },
        {
            title: "Fast & Fresh Food Delivery",
            description: "Quick Bites Home Delivery offers fast, delicious meals delivered straight to your door, ensuring convenience and great taste.",
            prev: "#slide4",
            next: "#slide3"
        },
        {
            title: "Fast & Fresh Food Delivery",
            description: "Quick Bites Home Delivery offers fast, delicious meals delivered straight to your door, ensuring convenience and great taste.",
            prev: "#slide1",
            next: "#slide4"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Autoplay functionality using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        }, 5000); // Slide changes every 5 seconds (5000 ms)

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [banners.length]);


    return (
        <div className=''>
            <div className="carousel w-full">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className={`h-screen bg-cover bg-no-repeat rounded-md carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}
                        style={{ backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.10)), url(/assets/banner/${index + 1}.jpeg)` }}
                    >
                        <div className='w-full flex h-full justify-center  items-center'>
                            <div className='space-y-6  text-white text-center'>
                                <h1 className='text-6xl font-bold tracking-wide'>{banner.title}</h1>

                                <div className="flex items-center justify-between w-[60%] mx-auto bg-white rounded-full shadow-lg">
                                    <span className="p-4 text-black">
                                        <FiMapPin size={24} />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter your delivery address"
                                        className="w-full px-6 py-4 text-black outline-none rounded-s-full"
                                    />
                                    <br /><br />
                                    <button className="bg-[#de0d67] text-white px-6 py-4 rounded-s-full rounded-e-full font-bold border-none hover:bg-[#90013f] w-[50%]">
                                        Find now
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Custom Round Circle Buttons */}
                        <div className="absolute flex gap-2 justify-center bottom-12 w-full">
                            {banners.map((_, i) => (
                                <a
                                    key={i}
                                    href={`#slide${i + 1}`}
                                    className={`w-4 h-4 rounded-full flex items-center justify-center ${currentSlide === i ? 'bg-[#de0d67]' : 'bg-[#ededed]'} hover:bg-[#90013f]`}
                                    onClick={() => setCurrentSlide(i)} // Manually change slide on click
                                >
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
