import React from 'react'

import { ReviewCard } from '../ReviewCard';
import { useTitle } from './../../Hook/useTitle';

// Import dynamically with no server-side rendering

export const Review = () => {
  

  return (
    <div>
    <div className="relative lg:py-28 md:py-16 py-10 w-full space-y-4">
    <h1 className="lg:text-6xl md:text-5xl text-2xl text-center text-orange uppercase">
   Customer
      <span className="text-orange-600 font-serif"> Rating</span>
    </h1>
    </div>
    <ReviewCard
    userName="John Doe"
    reviewText="This is an amazing product! I highly recommend it to everyone."
    rating={2}
    date="September 19, 2024"
  />
    
    </div>
  )
}
