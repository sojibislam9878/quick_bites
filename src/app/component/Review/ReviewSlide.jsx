"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { reviewsAll } from './reviewsAll'
// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import Slide from './ReviewText'
import { useState, useEffect } from 'react'

export default function ReviewSlide() {
    // State to hold review data
    const [reviews, setReviews] = useState([]);

    // Optionally, fetch reviews from an API or local array
    useEffect(() => {
        setReviews(reviewsAll)
    }, []);

    return (
        <div>
            <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className='mySwiper rounded-xl'

                // Responsive breakpoints
                breakpoints={{
                    // when window width is >= 320px (mobile)
                    320: {
                        slidesPerView: 1, // show 1 slide on mobile
                    },
                    // when window width is >= 768px (tablet/medium devices)
                    768: {
                        slidesPerView: 2, // show 2 slides on tablets
                    },
                    // when window width is >= 1024px (large devices)
                    1024: {
                        slidesPerView: 3, // show 3 slides on large devices
                    },
                }}
            >
                {/* Map through the reviews and create SwiperSlide dynamically */}
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <Slide
                            image={review.image}
                            name={review.reviewer}
                            designation={review.designation}
                            description={review.review}
                            rating={review.rating}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
