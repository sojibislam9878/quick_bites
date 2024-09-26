
"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { MdOutlineWatchLater } from 'react-icons/md';

const DiscountBanner = () => {
    // Set initial countdown time for 1 hour (3600 seconds)
    const [timeLeft, setTimeLeft] = useState(3600);

    // Countdown logic
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    // Convert seconds to hours, minutes, and seconds
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return { h, m, s };
    };

    const { h, m, s } = formatTime(timeLeft);

    return (
        <div className='flex flex-col md:flex-row justify-center items-center my-4 gap-8  rounded-xl overflow-hidden'>
            {/* First Banner with Timer */}
            <div className='relative overflow-hidden w-full rounded-xl shadow-lg group'>
                <Image
                    src={'/assets/discount/2.jpg'}
                    alt='promotion Card'
                    width={565}
                    height={200}
                    className='bg-cover  inset-0     w-full  bg-center object-cover'
                />

                <div className='absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 to-transparent text-white p-4'>
                    <h2 className="text-2xl md:text-4xl text-white font-bold  text-center mb-4 hover:scale-x-125 duration-200" >
                        50% Off for First Order
                    </h2>
                    {/* Countdown Timer Display */}

                    <div className='flex flex-row justify-center items-center gap-2'>
                        <div className="  text-white rounded px-2 py-2 text-2xl md:text-4xl font-bold"> <MdOutlineWatchLater />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold flex space-x-2">
                            <span className="bg-black/70 text-white rounded px-2 py-1">{h}</span>
                            <span>:</span>
                            <span className="bg-black/70 text-white rounded px-2 py-1">{m}</span>
                            <span>:</span>
                            <span className="bg-black/70 text-white rounded px-2 py-1">{s}</span>

                        </div>
                    </div>
                    <p className="mt-2 text-lg font-bold">Deal ends soon!</p>
                </div>
            </div >

            {/* Second Banner */}
            < div className='relative overflow-hidden w-full rounded-xl shadow-lg group' >
                <Image
                    src={'/assets/discount/3.jpg'}
                    alt='promotion Card'
                    width={565}
                    height={200}
                    className='bg-cover inset-0 w-full  bg-center object-cover bg-no-repeat'
                />
                <div className='absolute inset-0 flex flex-col  justify-center items-center  bg-gradient-to-t from-black/60 to-transparent text-white p-4'>
                    <h2 className="text-2xl md:text-4xl font-bold hover:scale-x-125 duration-200">
                        Free Delivery
                    </h2>
                    <h4 className='text-xl font-bold hover:scale-x-125 duration-200'>
                        For orders over $20
                    </h4>
                </div>

            </div >
        </div >
    );
};

export default DiscountBanner;

