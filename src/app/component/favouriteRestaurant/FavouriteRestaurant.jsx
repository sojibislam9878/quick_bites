import Image from 'next/image';
import React from 'react';
import { CgChevronRightO } from "react-icons/cg";
import { FaMotorcycle, FaRegStar } from "react-icons/fa";
import MenuList from './MenuList';
import { menuData } from './menuData';
import MenuList1 from './MenuList1';

const FavouriteRestaurant = () => {
    return (
        <div className='px-12'>
            <div className="max-w-6xl lg:max-w-7xl px-6 py-10 mx-auto text-center">
                <h3 className="text-xl font-medium text-[#6E6B58] "> Featured</h3>
                <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Featured Restaurant</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='flex-1 flex flex-col items-center gap-8'>
                    {
                        menuData.slice(0, 3).map(item => (<MenuList key={item._id} item={item} />))
                    }

                </div>
                <div>

                    {
                        menuData.slice(0, 1).map(item => (<MenuList1 key={item._id} item={item} />))
                    }
                </div>
            </div>
        </div>
    );
};

export default FavouriteRestaurant;