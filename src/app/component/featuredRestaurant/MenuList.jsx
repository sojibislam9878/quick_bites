import Image from 'next/image';
import React from 'react';
import { CgChevronRightO } from 'react-icons/cg';
import { FaMotorcycle, FaRegStar } from 'react-icons/fa';
import { menuData } from './menuData';

const MenuList = ({ item }) => {
    const { name, price, minOrder, rating, image, location, deliveryTime } = item;
    return (
        <div>
            <div className=' flex flex-row  gap-4 '>
                <div>
                    <Image src={image} alt='img' width={100} height={100} className='rounded-full w-24 h-24 bg-center' />
                </div>
                <div className='space-y-4'>
                    <div className='flex flex-row justify-between '>
                        <div className='space-y-4'>
                            <p>{location}</p>
                            <h2 className='text-xl font-bold'>{name}</h2>
                        </div>
                        <div>
                            <p className='p-1 bg-[#bef754] flex flex-row justify-start items-center'>
                                <FaRegStar />
                                <span>{rating}</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-6'>
                        <h2 className='text-xl font-bold'>${price}</h2>
                        <p className='flex flex-row justify-start items-center'>
                            <CgChevronRightO />
                            <span>Min order: {minOrder}</span>
                        </p>
                        <p className='flex flex-row justify-start items-center'>
                            <FaMotorcycle />
                            <span>{deliveryTime}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuList;