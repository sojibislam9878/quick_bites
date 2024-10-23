import Image from 'next/image';
import React from 'react';

const FoodItem = ({ item }) => {
    const { priceRange, restaurant, address, dishName } = item;
    return (
        <div>

            <div className='flex flex-row justify-between items-center gap-4'>
                <div className='flex flex-row justify-between items-center gap-4'>
                    <Image width={80} height={80}
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-full w-16 h-16" />
                    <div className=''>
                        <p>{priceRange}</p>
                        <h2 className='text-xl'>{dishName}</h2>

                    </div>
                </div>
                <div className=" items-center  flex flex-row justify-center gap-4">
                    <Image className='rounded-full w-16 h-16' alt='round-img' width={80} height={80} src={'/assets/banner/2.jpeg'} />
                    <div>
                        <h2 className="text-xl">{restaurant}</h2>
                        <p className='text-base text-[#222222ae]'>{address}</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default FoodItem;