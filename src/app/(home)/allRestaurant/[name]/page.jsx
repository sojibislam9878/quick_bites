'use client';
import MenuCard from '@/app/component/MenuCard';
import NoData from '@/app/component/NoData';
import Spinner from '@/app/component/Spinner';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Detailspage = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({ result: [] }); // Make sure item starts with an object containing 'result' as an array
  const pathName = useParams().name;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3000/api/allitem');
        const data = await res.json();
        setItem(data); // Make sure data has 'result' array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Initialize the filtered data
  let filterItem = [];

  if (pathName && item.result) {
    // Filter based on the pathName
    filterItem = item.result.filter(i => i.brand?.toLowerCase() === pathName.toLowerCase());
  }

  return (
    <div className="pt-24 container mx-auto p-4">
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>

      {loading ? (
        <Spinner />
      ) : !filterItem || filterItem.length === 0 ? (
        <NoData />
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {filterItem.map(item => (
            <MenuCard key={item._id} item={item} loading={loading} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Detailspage;
