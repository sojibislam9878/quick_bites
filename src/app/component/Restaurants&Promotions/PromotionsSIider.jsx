import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

const PromotionsSlider = ({ name, avgDeliveryTime, image }) => {
  return (
    <div className="relative h-[500px] flex items-center justify-start rounded-lg mt-8 text-[#f7b614]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg"
        />
        {/* Overlay for Better Text Visibility */}
        <div className="absolute rounded-lg inset-0 bg-black/40" />
      </div>
      
      {/* Deals Text */}
      <div className="relative  text-center rounded-xl p-8 ml-12 w-full h-full flex flex-col items-center justify-center z-10">
       
        <h1 className="text-2xl text-white font-bold my-4">{name}</h1>
      
        <h2 className="text-xl font-semibold text-[#f7b614]">Avarage Delevery time  {avgDeliveryTime} </h2>
        <button className="mt-4 px-6 py-3 bg-[#f7b614] text-white rounded-lg">Order Now</button>
      </div>
    </div>
  );
};

PromotionsSlider.propTypes = {
  name: PropTypes.string.isRequired,
  avgDeliveryTime: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PromotionsSlider;
