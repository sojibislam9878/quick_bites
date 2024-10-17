
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { CiLocationOn, CiLocationArrow1 } from "react-icons/ci";
import Counter from '@/app/(home)/counter/page';


const Banner = () => {
    return (
        <div className='w-full  h-screen  bg-fixed bg-center bg-cover bg-no-repeat flex justify-center items-center'
            style={{ backgroundImage: "url('/assets/banner/bg-food.jpg')" }}>
            <div className='space-y-6 text-white text-center '>
                <h1 className='text-2xl md:text-5xl  font-bold tracking-wide '>Serve <span className='font-greatVibes'>Fast & Fresh Food</span> Delivery</h1>
                <div className='bg-[#ffbe00]  flex flex-row justify-evenly items-center p-5 gap-4'>
                    <div className='w-5/12'>
                        <input placeholder='Restaurant' className='text-black ps-4 w-full py-4' type="text" />
                    </div>
                    <div className='w-4/12 relative text-black'>
                        <input placeholder="Search Location" className='w-full py-4 pl-10 pr-10' type="text" />
                        <span className='flex flex-row justify-between items-center absolute pointer-events-none inset-y-0 left-0 right-0 px-4 text-[#525252]'>
                            <CiLocationOn className='mr-2' />
                            <CiLocationArrow1 />
                        </span>
                    </div>
                    <div className='w-3/12'>
                        <button className='bg-red-600 w-full text-white font-bold py-4'>Search</button>
                    </div>
                </div>
                <Counter />
            </div>
        </div>


    );
};

export default Banner;
