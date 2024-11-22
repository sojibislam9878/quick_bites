"use client"
import Image from 'next/image';
import React from 'react';
import { CgChevronRightO } from 'react-icons/cg';
import { FaMotorcycle, FaRegStar } from 'react-icons/fa';


const MenuList1 = ({ item }) => {
    const { status, locationDetail, opensAt, location, avgRating, working_hours, banner_image, slug, about_us, name } = item;
    return (
        <div>
            <div className=' flex flex-col justify-start gap-2'>
                <div>
                    <Image src={banner_image} alt='img' width={500} height={500} />
                </div>
                <div className='space-y-2'>
                    <div className='flex flex-row justify-between items-center '>
                        <div className='space-y-4'>
                            <p>{location}</p>
                            <h2 className='text-xl font-bold'>{name}</h2>
                        </div>
                        <div>
                            <p className='p-1 bg-[#bef754] flex flex-row justify-start items-center'>
                                <FaRegStar />
                                <span>{avgRating}</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-6'>
                        <h2 className='text-xl font-bold'>{slug}</h2>
                        <p className='flex flex-row justify-start items-center'>
                            <CgChevronRightO />
                            <span>Start {opensAt}</span>
                        </p>
                        <p className='flex flex-row justify-start items-center'>
                            <FaMotorcycle />
                            <span>{locationDetail}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuList1;