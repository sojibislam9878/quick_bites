'use client'
import React, { useEffect, useState } from 'react';
import SingleRestruent from '@/app/component/allrestrurent/SingleRestruent';
import Head from 'next/head'; // For adding dynamic title
import Spinner from '@/app/component/Spinner';

const Restrurentpage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/allrestrurent');
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
    return <Spinner/>;
  }

  if (allRestrurent.length === 0) {
    return <p className="text-center text-lg py-20 text-gray-600">No restaurants available.</p>;
  }

  return (
    <div className='max-w-[1300px] mx-auto'>
    

      <div className="bg-gray-100  pt-32 pb-24 px-4 md:px-8">
        <h1 className="text-center text-4xl font-bold text-rose-600 mb-12">Explore Our Restaurants</h1>
        
        {/* Grid layout with 1 card on mobile, 3 cards on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allRestrurent.map((restaurant) => (
            <SingleRestruent key={restaurant?._id} data={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restrurentpage;
