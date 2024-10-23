import React from 'react';
import { dishItem } from './dishItem';
import PopularFood from './PopularFood';
import FoodItem from './FoodItem';

const PoularFoodItem = () => {
    console.log(dishItem);
    return (
        <div>
            <div className='px-12'>
                <div className="max-w-6xl lg:max-w-7xl px-6 py-10 mx-auto text-center">
                    <h3 className="text-xl font-medium text-[#6E6B58] "> Your Favourite Food</h3>
                    <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">POPULAR THIS MONTH</h2>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='col-span-1'>
                        {
                            dishItem.slice(0, 1).map(item => (<PopularFood key={item.id} item={item} />))
                        }
                    </div>
                    <div className='col-span-2 flex flex-col gap-4'>
                        {
                            dishItem.slice(0, 5).map(item => (<FoodItem key={item.id} item={item} />))
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PoularFoodItem;