"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'; // Custom navigation icons

import image1 from '@/asset/image/restaurant1.jpg';
import image2 from '@/asset/image/restaurant2.jpg';
import image3 from '@/asset/image/restaurant3.jpg';
import image4 from '@/asset/image/restaurant4.jpg';
import PromotionsSlider from './PromotionsSIider';


const Promotions = () => {
  return (
    <div className="relative mt-28 w-[80%] mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-8">Restaurants & Promotions</h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <PromotionsSlider
            name="Gilded Palate"
            avgDeliveryTime="30 minutes"
            image={image1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsSlider
            name="Opulent Essence"
            avgDeliveryTime="45 minutes"
            image={image2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsSlider
            name="Elysian Table"
            avgDeliveryTime="25 minutes"
            image={image3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PromotionsSlider
            name="Top Restaurant 4"
            avgDeliveryTime="35 minutes"
            image={image4}
          />
        </SwiperSlide>
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-lg cursor-pointer">
          <IoChevronBack size={24} />
        </div>
        <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-lg cursor-pointer">
          <IoChevronForward size={24} />
        </div>
      </Swiper>
    </div>
  );
};

export default Promotions;
