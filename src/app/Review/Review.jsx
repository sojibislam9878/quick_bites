"use client"
// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css';
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { reviewData } from "../lib/reviews";
// // import Rating from "react-rating";

// const Review = () => {

//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         setReviews(reviewData)
//     }, [])


//     return (
//         <div>

//             {/* Other product details here */}

//             <h2>Reviews</h2>
//             <div className='flex flex-col md:flex-row items-center gap-6 flex-wrap'>
//                 {reviews.map(review => (
//                     <div key={review._id} className="w-[32%] px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
//                         <div className="mt-2">
//                             <p className="mt-2 text-black dark:text-gray-300">Comment: {review.description}</p>
//                         </div>
//                         <div className="flex items-center justify-between mt-4">
//                             <Rating
//                                 style={{ maxWidth: 180 }}
//                                 value={review.rating}
//                                 readOnly
//                             />
//                             <div className="flex items-center">
//                                 <Image className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={review.image} alt="avatar" />
//                                 <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">{review.name}</a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Review;


import ReviewSlide from "./ReviewSlide";


const Review = () => {
    return (
        <div>
            <div className="text-center space-y-2 mb-6">

                <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-6xl px-6 py-10 mx-auto">
                        <p className="text-xl font-medium text-[#6E6B58] ">Reviews</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Our Special Client Reviews
                        </h1>
                        <div className="my-4">
                            <ReviewSlide />
                        </div>
                    </div>
                </section>

            </div>

        </div>
    );
};

export default Review;
