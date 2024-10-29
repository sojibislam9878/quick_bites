
import Image from 'next/image';
import React from 'react';

const FoodItem = ({ item }) => {
    const { brand, category, description, foodName, ratings, price, image } = item;

    return (
        <div className='flex flex-row justify-between items-center gap-4 p-4 bg-base-100 shadow rounded-lg'>
            <div className=' flex-1 flex items-center gap-4'>
                <Image
                    width={64}
                    height={64}
                    src={image}
                    alt="Dish Image"
                    className="rounded-full w-12 h-12"
                />
                <div>
                    <p>$ {price}</p>
                    <h2 className='text-xl'>{foodName}</h2>
                </div>
            </div>
            <div className='flex-1 flex items-center gap-4'>
                <Image
                    className='rounded-full h-12 w-12'
                    alt='restaurant-img'
                    width={48}
                    height={48}
                    src={image}
                />
                <div>
                    <h2 className='text-xl'>{brand}</h2>
                    <p className='text-base text-gray-600'>{description.substring(0, 50)}...</p>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
