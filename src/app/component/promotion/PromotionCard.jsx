import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import React from 'react';
import '@smastrom/react-rating/style.css';

const PromotionCard = ({ pData }) => {
    const { image, dishName, rating, shortDescription, reorderButton, price, discount } = pData;
    return (
        <div>

            <div className='relative overflow-hidden max-w-xl rounded-xl shadow-lg group'>
                <Image
                    src={image}
                    alt='promotion Card'
                    width={340}
                    height={280}
                    className='transition-transform group-hover:scale-110 duration-200 object-cover w-full h-[340px]'  // Added class for image sizing
                />
                <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to transparent text-white'>
                    <div className='ps-6 space-y-1'>
                        {/* <div className='flex flex-row justify-normal items-center px-4 mb-2 flex-wrap'>
                            
                        </div> */}
                        <h2 className='text-xl font-bold  '>{dishName}</h2>
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={rating}
                            readOnly
                        />
                        {/* <p className='text-sm font-extralight'>{shortDescription}</p> */}
                        <p><span className='text-white font-medium'>Price:</span> ${price}</p>
                        <p><span className='text-white font-medium'>Discount: </span> {discount}</p>
                        {/* <div className='flex text-sm flex-row justify-between items-center px-4 my-2 '>
                           
                        </div> */}
                        <div className='mb-3'>
                            <button className='outline-2 px-4 py-2 rounded-lg hover:bg-[#EA6A12] font-medium text-white bg-[#ff7519] mb-2'>Re-Order</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PromotionCard;