'use client'
import React, { useEffect, useState } from 'react';
import SingleRestruent from '@/app/component/allrestrurent/SingleRestruent';

const Restrurentpage = () => {
  const [data, setData] = useState(null); // Start with `null` to differentiate between no data and empty data

  const fetchData = async () => {
    try {
      const res = await fetch('/api/allrestrurent');
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const allRestrurent = data?.result;

  // Check for undefined or empty array before mapping
  if (!allRestrurent) {
    return <p>Loading...</p>; // Loading message while data is fetched
  }

  if (allRestrurent.length === 0) {
    return <p>No restaurants available.</p>; // If there's no data to show
  }

  return (
    
    <div className='bg-gray-100 space-y-14 pt-40 pb-24 '>
      {allRestrurent.map((restaurant) => (
        <SingleRestruent key={restaurant?._id} data={restaurant} />
      ))}
    </div>
  );
};

export default Restrurentpage;
