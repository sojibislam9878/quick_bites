"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CgChevronRightO } from "react-icons/cg";
import { FaMotorcycle, FaRegStar } from "react-icons/fa";
import MenuList from './MenuList';
import MenuList1 from './MenuList1';
import SectionTitle from '../SectionTitle';

const FeaturedRestaurant = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('https://quick-bites-tau.vercel.app/api/allrestrurent')
            .then(res => res.json())
            .then(data => setMenuData(data?.result))
    }, [])

    console.log(menuData);
    return (
        <div className='container mx-auto  mt-12 lg:mt-20 p-4'>
            <SectionTitle head={"Featured Restaurant"} title={"Featured"} para={"Indulge in culinary excellence with our featured restaurant, where every dish is a perfect blend of flavor, freshness, and creativity!"} />

            <div className='flex flex-col md:flex-row justify-between '>
                {/* Left Column */}
                <div className=' flex flex-col  gap-8'>
                    {
                        menuData?.slice(1, 5).map(item => (
                            <MenuList key={item?._id} item={item} />
                        ))
                    }
                </div>

                {/* Right Column */}
                <div className='flex flex-col  gap-8'>
                    {
                        menuData.slice(0, 1).map(item => (
                            <MenuList1 key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default FeaturedRestaurant;
