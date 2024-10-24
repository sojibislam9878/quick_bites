import Image from 'next/image';
import React from 'react';
import FoodItem from './FoodItem';

const PopularFood = ({ item }) => {
    const { image, priceRange, restaurant, address, dishName } = item;
    return (


        <div className=" space-y-4 bg-base-100 flex flex-col gap-4 ">
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-10 pt-10">
                    <Image width={260} height={220}
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className=" items-center  flex flex-row justify-center gap-4">
                    <Image className='rounded-full w-12 h-12' alt='round-img' width={20} height={20} src={'/assets/banner/2.jpeg'} />
                    <div>
                        <h2 className="text-xl">{dishName}</h2>
                        <p className='text-base text-[#222222ae]'>{address}</p>

                    </div>
                </div>
                {/* <hr class="border-t-1 border-gray-200 rounded-lg shadow-lg" /> */}
                <div>
                    <div className='text-center'>
                        <h2 className='text-xl'>{restaurant}</h2>
                        <p>{priceRange}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularFood;