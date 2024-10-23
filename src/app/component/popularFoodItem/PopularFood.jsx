import Image from 'next/image';
import React from 'react';
import FoodItem from './FoodItem';

const PopularFood = ({ item }) => {
    const { image, priceRange, restaurant, address, dishName } = item;
    return (


        <div className=" space-y-4 bg-base-100 shadow-xl w-full  p-4">
            <figure className=" ">
                <Image width={400} height={320}
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className=" items-center  flex flex-row justify-center gap-4">
                <Image className='rounded-full w-16 h-16' alt='round-img' width={40} height={40} src={'/assets/banner/2.jpeg'} />
                <div>
                    <h2 className="text-xl">{dishName}</h2>
                    <p className='text-base text-[#222222ae]'>{address}</p>

                </div>
            </div>
            <hr class="border-t-1 border-gray-200 rounded-lg shadow-lg" />
            <div>
                <div className='text-center'>
                    <h2 className='text-xl'>{restaurant}</h2>
                    <p>{priceRange}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularFood;