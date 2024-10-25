import Image from 'next/image';
import React from 'react';
import { CgChevronRightO } from 'react-icons/cg';
import { FaMotorcycle, FaRegStar } from 'react-icons/fa';
import { menuData } from './menuData';

const MenuList1 = ({ item }) => {
    const { name, price, minOrder, rating, image, location, deliveryTime } = item;
    return (
        <div>
            <div className=' flex flex-col justify-start gap-2'>
                <div>
                    <Image src={image} alt='img' width={500} height={500} />
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
                                <span>{rating}</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center gap-6'>
                        <h2 className='text-xl font-bold'>${price}</h2>
                        <p className='flex flex-row justify-start items-center'>
                            <CgChevronRightO />
                            <span>Min order {minOrder}</span>
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

export default MenuList1;