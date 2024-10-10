
"use client"
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const SingleRestruent = ({ data }) => {
  console.log(data);
  const renderStars = () => {
    const rating = data?.avgRating || 0; // Default to 0 if no rating provided
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating - fullStars >= 0.5; // Determine if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars
    console.log(data, "data");

    return (
      <div className="flex items-center space-x-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="w-5 h-5" />
        ))}
        {halfStar && <FaStar className="w-5 h-5 half-star" />} {/* Add half star icon here if needed */}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="w-5 h-5 text-gray-300" /> // Empty star
        ))}
      </div>
    );
  };

  return (
    <div className="w-full sm:w-full  mx-auto hover:scale-[1.02] transform transition-transform duration-300">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 relative">

        {/* Restaurant Image */}
        <div className="relative">
          <Image
            src={data?.banner_image}
            alt={data?.name}
            width={500}
            height={250}
            className="w-full h-auto object-cover rounded-lg border-2 border-gray-100"
          />
          {/* Discount Badge */}
          <span className="absolute top-2 right-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-lg">
            QuickBites
          </span>
        </div>

        {/* Restaurant Info */}
        <div className="mt-4 space-y-2">
          {/* Rating */}
          <div className="flex items-center mb-2">
            {renderStars()}
            <span className="ml-2 text-gray-600 text-sm">({data?.rating?.toFixed(1) || 'N/A'})</span>
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold text-gray-800">{data?.name}</h1>

          {/* Location and Timing */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <FaMapMarkerAlt className="text-rose-500" />
            <span>{data?.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
            <FaClock className="text-rose-500" />
            <span>Opens at {data?.opensAt}</span>
          </div>

          <p className="text-sm text-gray-500 mt-2">{data?.locationDetail}</p>
        </div>

        {/* Mobile Button */}
        <Link href={`/allRestaurant/${data?.name}`}>
          <p className="block sm:hidden w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-center font-semibold rounded-md py-2 mt-4 shadow-lg hover:shadow-xl transition duration-300">
            View Menu
          </p>
        </Link>

        {/* Desktop Button */}
        <div className="hidden sm:block mt-8">
          <Link href={`/allRestaurant/${data?.name}`}>
            <p className="inline-block text-center w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-md py-2 px-6 shadow-lg hover:shadow-xl transition duration-300">
              View Menu
            </p>
          </Link>
        </div>
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
    rating: PropTypes.number, // Ensure rating is a number
  }).isRequired,
};

export default SingleRestruent;
