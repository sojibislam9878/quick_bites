'use client'
import React, { useEffect, useState } from 'react';
import SingleRestruent from '@/app/component/allrestrurent/SingleRestruent';
import Head from 'next/head';
import Spinner from '@/app/component/Spinner';
import { IoIosArrowForward } from 'react-icons/io';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Restrurentpage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch('https://quick-bites-tau.vercel.app/api/allrestrurent');
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data?.result);


  const allRestrurent = data?.result;

  if (!allRestrurent) {
    return <Spinner />;
  }

  if (allRestrurent.length === 0) {
    return <p className="text-center text-lg py-20 text-gray-600">No restaurants available.</p>;
  }

  return (
    <div className='max-w-[1300px] mx-auto grid md:grid-cols-4'>

<div className='col-span-1 px-6 mt-6 '>
  {/* search filters */}
<section className='mt-8 '>  

<div className='flex items-center gap-2'>
<div className='h-4 w-3 bg-rose-800'></div>
<h1 className='font-semibold'>Search Filters</h1>
</div> 

<div className='bg-gray-200  mt-6 py-8'>
{
  restaurantCategories.map(c => 
  
  
  <div key={c.id}  className='flex px-6 hov cursor-pointer hover:bg-white  py-2 my-4 border-b justify-between'>  
  <MdKeyboardDoubleArrowRight />
  <p>{c.name}</p>
  <p>{c.length}</p>
  
  
  
  </div>)
}
</div>

</section>
{/* quick filters */}
<section></section>

</div>

      <div className="  col-span-3 pt-32 pb-24 px-4 md:px-8">
        <h1 className="text-center text-4xl font-bold text-rose-600 mb-12">Explore Our Restaurants</h1>

        {/* Grid layout with 1 card on mobile, 3 cards on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {allRestrurent.map((restaurant) => (
            <SingleRestruent key={restaurant?._id} data={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};




const restaurantCategories = [
  { id: 1, name: 'Fast Food', length: 34 },
  { id: 2, name: 'Nath\'s Indian', length: 54 },
  { id: 3, name: 'Chinese', length: 45 },
  { id: 4, name: 'Bakery', length: 23 },
  { id: 5, name: 'Pizza', length: 67 },
  { id: 6, name: 'Ice Cream', length: 17 },
  { id: 7, name: 'Rolls', length: 29 },
  { id: 8, name: 'Coffee', length: 38 },
  { id: 9, name: 'Mughlai', length: 12 }
];

export default Restrurentpage;
