'use client'
import React, { useEffect, useState } from 'react';
import SingleRestruent from '@/app/component/allrestrurent/SingleRestruent';
import Spinner from '@/app/component/Spinner';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const Restrurentpage = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(null); 
  const perPage = 6;
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // New loading state

  // Fetch data for the current page
  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const res = await fetch(`/api/allrestrurent?currentPage=${currentPage}`);
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Fetch the total count of restaurants
  const fetchCount = async () => {
    try {
      const res = await fetch('/api/restruarentCount');
      const jsonData = await res.json();
      setCount(jsonData.count);

      // Calculate total pages once count is fetched
      setTotalPage(Math.ceil(jsonData.count / perPage));
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    fetchCount();
  }, []);

  const allRestrurent = data?.result;

  if (!allRestrurent) {
    return <Spinner />;
  }

  if (allRestrurent.length === 0) {
    return <p className="text-center text-lg py-20 text-gray-600">No restaurants available.</p>;
  }

  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-4'>
      <div className='col-span-1 px-6 mt-6 '>
        {/* Search Filters */}
        <section className='mt-8 '>  
          <div className='flex items-center gap-2'>
            <div className='h-4 w-3 bg-rose-800'></div>
            <h1 className='font-semibold'>Search Filters</h1>
          </div> 
          <div className='bg-gray-200 rounded mt-6 py-8'>
            {restaurantCategories.map(c => (
              <div key={c.id} className='flex px-6 hov cursor-pointer hover:bg-white py-2 my-4 border-b justify-between'>  
                <MdKeyboardDoubleArrowRight />
                <p>{c.name}</p>
                <p>{c.length}</p>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-2 mt-6'>
            <div className='h-4 w-3 bg-rose-800'></div>
            <h1 className='font-semibold'>Quick Filters</h1>
          </div> 
          <div className='bg-gray-200 rounded mt-6 py-8'>
            {type.map(c => (
              <div key={c.id} className='flex px-6 hov cursor-pointer hover:bg-white py-2 my-4 border-b justify-between'>  
                <RiCheckboxBlankCircleLine />
                <p>{c.name}</p>
                <p>{c.length}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="col-span-3 pt-28 pb-24 px-4 md:px-8">
        <h2 className="text-xl font-semibold mb-6">Total Restaurants: {count}</h2>
        
        {loading ? (
          <Spinner /> // Show Spinner while loading
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allRestrurent.map((restaurant) => (
              <SingleRestruent key={restaurant?._id} data={restaurant} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-4">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Prev
          </button>
          {Array.from({ length: totalPage }, (_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentPage(idx + 1)} 
              className={`px-4 py-2 rounded hover:bg-gray-300 ${currentPage === idx + 1 ? 'bg-yellow-500' : 'bg-gray-200'}`}>
              {idx + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPage} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// Mock data for categories and filters
const restaurantCategories = [
  { id: 1, name: 'Fast Food', length: 34 },
  { id: 2, name: "Nath's Indian", length: 54 },
  { id: 3, name: 'Chinese', length: 45 },
  { id: 4, name: 'Bakery', length: 23 },
  { id: 5, name: 'Pizza', length: 67 },
  { id: 6, name: 'Ice Cream', length: 17 },
  { id: 7, name: 'Rolls', length: 29 },
  { id: 8, name: 'Coffee', length: 38 },
  { id: 9, name: 'Mughlai', length: 12 }
];

const type = [
  { id: 1, name: 'Promotions', length: 34 },
  { id: 2, name: 'Bookmarked', length: 54 },
  { id: 3, name: 'Pure Veg', length: 45 },
  { id: 4, name: 'Free delivery', length: 23 },
];

export default Restrurentpage;
