import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import React from 'react';
import '@smastrom/react-rating/style.css';

const PromotionCard = ({ pData }) => {
    const { image, dishName, rating, shortDescription, reorderButton, price, discount } = pData;
    return (

        <div className="relative overflow-hidden w-full rounded-xl shadow-lg group">
            {/* Wrapper div for hover effects */}
            <div className="transition-transform group-hover:scale-110 group-hover:rotate-3 duration-200 w-full h-[340px]">
                <Image
                    src={image}
                    alt="promotion Card"
                    width={340}
                    height={280}
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="ps-6 space-y-1">
                    <h2 className="text-xl font-bold">{dishName}</h2>
                    <Rating
                        style={{ maxWidth: 80 }}
                        value={rating}
                        readOnly
                    />
                    <p><span className="text-white font-medium">Price:</span> ${price}</p>
                    <p><span className="text-white font-medium">Discount:</span> {discount}</p>

                    <div className="mb-3">
                        <button className="outline-2 px-4 py-2 rounded-lg hover:bg-[#EA6A12] font-medium text-white bg-[#ff7519] mb-2">
                            Re-Order
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PromotionCard;