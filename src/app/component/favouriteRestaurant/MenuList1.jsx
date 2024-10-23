import Image from 'next/image';
import React from 'react';
import { CgChevronRightO } from 'react-icons/cg';
import { FaMotorcycle, FaRegStar } from 'react-icons/fa';
import { menuData } from './menuData';

const MenuList1 = () => {
    return (
        <div>
            <div className=' flex flex-col items-center justify-center gap-4'>
                <div>
                    <Image src={'/assets/banner/3.jpeg'} alt='img' width={500} height={500} className='bg-center' />
                </div>
                <div className='space-y-2'>
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

export default MenuList1;