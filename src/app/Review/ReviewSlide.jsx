// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { reviewsAll } from '../lib/reviewsAll'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import Slide from '../component/ReviewText'
import { useState, useEffect } from 'react'

export default function ReviewSlide() {
    // State to hold review data
    const [reviews, setReviews] = useState([]);

    // Optionally, fetch reviews from an API
    useEffect(() => {
        setReviews(reviewsAll)
    }, []);

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={false}
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
