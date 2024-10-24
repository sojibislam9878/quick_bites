
import Image from 'next/image';
import React from 'react';

const PopularFood = ({ item }) => {
    const { priceRange, restaurant, address, dishName } = item;

    return (
        <div className="bg-base-100 w-full shadow-xl rounded-lg p-4">
            <figure className="px-4 pt-4">
                <Image
                    width={260}
                    height={220}
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl w-full object-cover"
                />
            </figure>
            <div className="flex items-center gap-4 p-4">
                <Image
                    className='rounded-full w-12 h-12'
                    alt='round-img'
                    width={48}
                    height={48}
                    src='/assets/banner/2.jpeg'
                />
                <div>
                    <h2 className="text-xl">{dishName}</h2>
                    <p className='text-base text-gray-600'>{address}</p>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='text-xl'>{restaurant}</h2>
                <p>{priceRange}</p>
            </div>
        </div>
    );
};

export default PopularFood;
