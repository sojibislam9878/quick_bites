'use client'
import React, { useEffect, useState } from 'react';
import SingleRestruent from '@/app/component/allrestrurent/SingleRestruent';
import Head from 'next/head'; // For adding dynamic title

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
    return <p className="text-center text-lg py-20 text-gray-600">Loading...</p>; // Loading message with better styling
  }

  if (allRestrurent.length === 0) {
    return <p className="text-center text-lg py-20 text-gray-600">No restaurants available.</p>; // If there's no data to show
  }

  return (
    <>
      <Head>
        <title>All Restaurants - Discover the Best Places to Eat</title>
      </Head>

      <div className="bg-gray-100 space-y-14 pt-40 pb-24 px-4 md:px-8">
        <h1 className="text-center text-4xl font-bold text-rose-600 mb-12">Explore Our Restaurants</h1>
        {allRestrurent.map((restaurant) => (
          <SingleRestruent key={restaurant?._id} data={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Restrurentpage;
