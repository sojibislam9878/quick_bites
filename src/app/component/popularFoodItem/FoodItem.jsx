
import Image from 'next/image';
import React from 'react';

const FoodItem = ({ item }) => {
    const { priceRange, restaurant, address, dishName, image } = item;

    return (
        <div className='flex flex-row justify-between items-center gap-4 p-4 bg-base-100 shadow rounded-lg'>
            <div className='flex items-center gap-4'>
                <Image
                    width={64}
                    height={64}
                    src={image}
                    alt="Dish Image"
                    className="rounded-full w-12 h-12"
                />
                <div>
                    <p>{priceRange}</p>
                    <h2 className='text-xl'>{dishName}</h2>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Image
                    className='rounded-full h-12 w-12'
                    alt='restaurant-img'
                    width={48}
                    height={48}
                    src='/assets/banner/2.jpeg'
                />
                <div>
                    <h2 className='text-xl'>{restaurant}</h2>
                    <p className='text-base text-gray-600'>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
