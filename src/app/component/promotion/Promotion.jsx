import React from 'react';
import { promotionsData } from './PromotionsData';
import PromotionCard from './PromotionCard';
import DiscountBanner from '../discount/discountBanner';

const Promotion = () => {
    return (
        <div className='px-12'>
            <div className="max-w-6xl px-6 py-10 mx-auto text-center">
                <h3 className="text-xl font-medium text-[#6E6B58] "> Promotion</h3>
                <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Promotion & Discount</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl '>
                {
                    promotionsData.map(pData => (
                        <PromotionCard key={pData.id} pData={pData} />
                    ))
                }
            </div>
            <div className='my-8  flex flex-row justify-center items-center'><button className='outline-2 px-12 py-3 bg-[#de0d67] hover:bg-[#ff0b75]  text-white my-4'>See More</button></div>
            <div className='mt-12'>
                <DiscountBanner />
            </div>
        </div>
    );
};

export default Promotion;