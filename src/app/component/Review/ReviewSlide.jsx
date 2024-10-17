// "use client"
// import { Swiper, SwiperSlide } from 'swiper/react'
// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import { reviewsAll } from './reviewsAll'
// // import required modules
// import { Autoplay, Pagination } from 'swiper/modules'
// import Slide from './ReviewText'
// import { useState, useEffect } from 'react'

// export default function ReviewSlide() {
//     // State to hold review data
//     const [reviews, setReviews] = useState([]);

//     // Optionally, fetch reviews from an API or local array
//     useEffect(() => {
//         setReviews(reviewsAll)
//     }, []);

//     return (
//         <div>
//             <Swiper
//                 spaceBetween={20}
//                 loop={true}
//                 autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Autoplay]}
//                 className='mySwiper rounded-xl'

//                 // Responsive breakpoints
//                 breakpoints={{
//                     // when window width is >= 320px (mobile)
//                     320: {
//                         slidesPerView: 1, // show 1 slide on mobile
//                     },
//                     // when window width is >= 768px (tablet/medium devices)
//                     768: {
//                         slidesPerView: 2, // show 2 slides on tablets
//                     },
//                     // when window width is >= 1024px (large devices)
//                     1024: {
//                         slidesPerView: 3, // show 3 slides on large devices
//                     },
//                 }}
//             >
//                 {/* Map through the reviews and create SwiperSlide dynamically */}
//                 {reviews?.map((review, index) => (
//                     <SwiperSlide key={index}>
//                         <Slide
//                             image={review?.image}
//                             name={review.reviewer}
//                             designation={review.designation}
//                             description={review.review}
//                             rating={review.rating}
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }
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

// Helper function to chunk the reviews array into groups of 6
const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

export default function ReviewSlide() {
    // State to hold review data
    const [reviews, setReviews] = useState([]);

    // Optionally, fetch reviews from an API or local array
    useEffect(() => {
        setReviews(reviewsAll)
    }, []);

    // Chunk the reviews array into groups of 6
    const chunkedReviews = chunkArray(reviews, 6);

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
                modules={[Autoplay, Pagination]}
                className='mySwiper rounded-xl  '
            >
                {/* Map through the chunked reviews and create SwiperSlide dynamically */}
                {chunkedReviews.map((chunk, index) => (
                    <SwiperSlide key={index}>
                        {/* Create 2 rows with 3 cards in each row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {chunk.map((review, i) => (
                                <div key={i} className="col-span-1 ">
                                    <Slide
                                        image={review?.image}
                                        name={review.reviewer}
                                        designation={review.designation}
                                        description={review.review}
                                        rating={review.rating}
                                    />
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
