
"use client"
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { BsCash } from 'react-icons/bs';

const SingleRestruent = ({ data }) => {
  console.log(data);
  const renderStars = () => {
    const rating = data?.avgRating|| 0;
    const fullStars = Math.floor(rating); 
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 
    console.log(data, "data");

    return (
      <div className="flex items-center space-x-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="w-5 h-5" />
        ))}
        {halfStar && <FaStar className="w-5 h-5 half-star" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
    );
  };


  return (
    <div className=" hover:scale-[1.02] transform transition-transform duration-300 ">
      <div className="bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex gap-4 items-center p-6 relative">

        {/* Restaurant Image */}
        <div className="relative">
          <Image
            src={data?.banner_image}
            alt={data?.name}
            width={100}
            height={100}
            className="   rounded-full  "
          />
          {/* Discount Badge */}
          {/* <span className="absolute top-2 right-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-lg">
            QuickBites
          </span> */}
        </div>

        {/* Restaurant Info */}
        <div className="mt-4 space-y-2">
          {/* Rating */}
          {/* <div className="flex items-center mb-2">
            {renderStars()}
            <span className="ml-2 text-gray-600 text-sm">({data?.rating?.toFixed(1) || 'N/A'})</span>
          </div> */}

          <p className='text-rose-600 flex gap-2 items-center'>          <FaMapMarkerAlt className="text-rose-500" /> {data?.location}{data?.locationDetail
          }</p>

          {/* Name */}
          <h1 className="text-xl font-bold text-gray-800">{data?.name}</h1>
          <h1 className=" "> <span className='font-semibold text-rose-800'> Type Of Food: </span>Type</h1>

          {/* Location and Timing */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
      
            
          </div>

          

          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <FaClock className="text-rose-500" />
            <span>Opens at {data?.opensAt}</span>
          </div>
          <p className='flex gap-2 items-center'>   <span><BsCash /></span> <span>Accept Cash And Online payment</span></p>
         
        </div>

       
      </div>
       {/* Mobile Button */}
       <Link href={`/allRestaurant/${data?.slug}`}>
          <p className="block sm:hidden w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-center font-semibold rounded-md py-2 mt-4 shadow-lg hover:shadow-xl transition duration-300">
            View Menu
          </p>
        </Link>

        {/* Desktop Button */}
        <div className="hidden sm:block mt-8">
          <Link href={`/allRestaurant/${data?.slug}`}>
            <p className="inline-block text-center w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-md py-2 px-6 shadow-lg hover:shadow-xl transition duration-300">
              View Menu
            </p>
          </Link>
        </div>
    </div>
  );
};

SingleRestruent.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    locationDetail: PropTypes.string,
    opensAt: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default SingleRestruent;
