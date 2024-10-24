import Image from 'next/image';
import React from 'react';
import { CgChevronRightO } from "react-icons/cg";
import { FaMotorcycle, FaRegStar } from "react-icons/fa";
import MenuList from './MenuList';
import { menuData } from './menuData';
import MenuList1 from './MenuList1';
import SectionTitle from '../SectionTitle';

const FeaturedRestaurant = () => {
    return (
        <div className='container mx-auto  text-center mt-12 lg:mt-20'>
            <SectionTitle head={"Featured Restaurant"} title={"Featured"} ></SectionTitle>

            <div className='flex flex-col md:flex-row justify-between items-center '>
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

export default FeaturedRestaurant;