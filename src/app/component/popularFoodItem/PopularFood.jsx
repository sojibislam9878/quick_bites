
import Image from 'next/image';
import React from 'react';

const PopularFood = ({ item }) => {
    const { ratings, price, image, foodName, description, category, brand } = item;

    return (
        <div className="bg-base-100 w-full shadow-xl rounded-lg p-4">
            <figure className="px-4 pt-4">
                <Image
                    width={260}
                    height={220}
                    src={image}
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
                    src={image}
                />
                <div>
                    <h2 className="text-xl">{foodName}</h2>
                    <p className='text-base text-gray-600'>{description}</p>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='text-xl'>{brand}</h2>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default PopularFood;
