'use client'
import MenuCard from '@/app/component/MenuCard';
import NoData from '@/app/component/NoData';
import Spinner from '@/app/component/Spinner';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBullseye } from 'react-icons/fa6';

const Detailspage = () => {
  const [loading,setLoading] = useState(false)
  const [item, setItem] = useState([])
  const pathName= useParams().name;
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://quick-bites-tau.vercel.app/api/allitem`
        );
        const data = await res.json();
        
    setItem(data)
        setLoading(false);
       
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


    return (
        <div className="pt-24 container mx-auto p-4">
        <div>
     
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
    </div>

    {loading ? (
<Spinner />
) : !item|| !item.result || item.result.length === 0 ? (
<NoData />
) : (
<div className="grid  lg:grid-cols-3 gap-6">
  {item.result.map((item) => (
    <MenuCard key={item._id} item={item} loading={loading} />
  ))}
</div>
)}

    
    

  
  </div>
    );
};

export default Detailspage;