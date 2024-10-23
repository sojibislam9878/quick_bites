import Image from 'next/image';
import React from 'react';
import { CgChevronRightO } from 'react-icons/cg';
import { FaMotorcycle, FaRegStar } from 'react-icons/fa';
import { menuData } from './menuData';

const MenuList = () => {
    return (
        <div>
            <div className=' flex flex-row items-center justify-center gap-4'>
                <div>
                    <Image src={'/assets/banner/3.jpeg'} alt='img' width={100} height={100} className='rounded-full w-24 h-24 bg-center' />
                </div>
                <div className='space-y-4'>
                    <div className='flex flex-row justify-between items-center '>
                        <div className='space-y-4'>
                            <p>Address</p>
                            <h2 className='text-xl font-bold'>Tuna Fish</h2>
                        </div>
                        <div>
                            <p className='p-1 bg-[#bef754] flex flex-row justify-start items-center'>
                                <FaRegStar />
                                <span>Ratings</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-6'>
                        <h2 className='text-xl font-bold'>$84.40</h2>
                        <p className='flex flex-row justify-start items-center'>
                            <CgChevronRightO />
                            <span>Min order $40</span>
                        </p>
                        <p className='flex flex-row justify-start items-center'>
                            <FaMotorcycle />
                            <span>40 Mins</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuList;