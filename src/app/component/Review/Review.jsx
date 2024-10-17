
"use client"
import ReviewSlide from "./ReviewSlide";

const Review = () => {
    return (

        <section className="bg-white px-12 text-center">
            <div className="max-w-6xl py-10 mx-auto text-center">
                <p className="text-xl font-medium text-[#6E6B58] font-greatVibes">Reviews</p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Our Special Client Reviews
                </h1>
                <div className="mt-4">
                    <ReviewSlide />
                </div>
            </div>
        </section>




    );
};

export default Review;
