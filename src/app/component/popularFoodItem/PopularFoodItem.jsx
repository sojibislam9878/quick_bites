import React from 'react';
import { dishItem } from './dishItem';
import PopularFood from './PopularFood';
import FoodItem from './FoodItem';
import SectionTitle from '../SectionTitle';

const PopularFoodItem = () => {

    return (
        <div>
            <div className='container mx-auto text-center mt-12 lg:mt-20'>
                <SectionTitle head={'Your Favourite Food'} title={'Popular This Month'} />

                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <div className=''>
                        {
                            dishItem.slice(0, 1).map(item => (<PopularFood key={item.id} item={item} />))
                        }
                    </div>
                    <div className=' md:col-span-2 flex flex-col gap-4'>
                        {
                            dishItem.slice(0, 5).map(item => (<FoodItem key={item.id} item={item} />))
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PopularFoodItem;