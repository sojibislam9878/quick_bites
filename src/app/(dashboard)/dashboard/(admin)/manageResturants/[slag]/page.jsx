'use client'

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const RestuarantDetailsPage = () => {
    const [item, setItem] = useState({})
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)



 
const {slag} = useParams();



useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/allrestrurent/${slag}`);
        const data = await res.json();
        setItem(data.result);
        setReviews(data.result.reviews || []); // Set existing reviews
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slag) {
      fetchData();
    }
  }, [slag]);


  console.log('item---->' ,item,'reviews --->', reviews );
    return (
        <div>
            this is slug
        </div>
    );
};

export default RestuarantDetailsPage ;