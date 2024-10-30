
"use client"
import React, { useEffect, useState } from 'react';
import { dishItem } from './dishItem';
import PopularFood from './PopularFood';
import FoodItem from './FoodItem';
import SectionTitle from '../SectionTitle';

const PopularFoodItem = () => {
    const [dishItem, setDishItem] = useState([]);

    useEffect(() => {
        fetch('https://quick-bites-tau.vercel.app/api/allitem')
            .then(res => res.json())
            .then(data => setDishItem(data?.result))
    }, [])


    return (
        <div className='container mx-auto text-center mt-12 lg:mt-20'>
            <SectionTitle head={'Your Favourite Food'} title={'Popular This Month'} para={" Discover this months most popular picks across tech, design, and web development!"} />

            {/* Responsive Grid Layout */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* First Column - PopularFood */}
                <div className='md:col-span-1'>
                    {
                        dishItem?.slice(0, 1).map(item => (<PopularFood key={item.id} item={item} />))
                    }
                </div>

                {/* Second Column - FoodItem */}
                <div className='md:col-span-2'>
                    <div className='flex flex-col gap-4'>
                        {
                            dishItem?.slice(0, 5).map(item => (<FoodItem key={item.id} item={item} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFoodItem;
