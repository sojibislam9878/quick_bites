"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='w-full font-poppins bg-[#00000077] font-semibold  p-2  text-white grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-6 text-2xl'>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <div className='bg-white rounded-full p-4'>
                        <Image src={'/assets/images/viewer.png'} alt='viewer' width={50} height={50} />
                    </div>
                    <div className='flex flex-col justify-start items-center '>
                        <h1>
                            <span>{counterOn && <CountUp start={0} end={1600} duration={2} delay={0} />}</span>+
                        </h1>
                        <h1 className='text-xl'>Viewers</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <div className='bg-white rounded-full p-4'>
                        <Image src={'/assets/images/customer.png'} alt='viewer' width={50} height={50} />
                    </div>
                    <div className='flex flex-col justify-start items-center '>
                        <h1>
                            <span >{counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}</span>+
                        </h1>
                        <h1 className='text-xl'>Customers</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <div className='bg-white rounded-full p-4'>
                        <Image src={'/assets/images/client.png'} alt='viewer' width={50} height={50} />
                    </div>
                    <div className='flex flex-col justify-start items-center '>
                        <h1>
                            <span >{counterOn && <CountUp start={0} end={1800} duration={2} delay={0} />} </span>+
                        </h1>
                        <h1 className='text-xl'>Clients</h1>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <div className='bg-white rounded-full p-4'>
                        <Image src={'/assets/images/restaurant.png'} alt='viewer' width={50} height={50} />
                    </div>
                    <div className='flex flex-col justify-start items-center '>
                        <h1>
                            <span>{counterOn && <CountUp start={0} end={1800} duration={2} delay={0} />}</span>+
                        </h1>
                        <h1 className='text-xl'>Restaurants</h1>
                    </div>
                </div>



            </div>
        </ScrollTrigger>
    );
};

export default Counter;