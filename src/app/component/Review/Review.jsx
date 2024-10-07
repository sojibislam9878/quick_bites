
"use client"
import ReviewSlide from "./ReviewSlide";

const Review = () => {
    return (
        <div>
            <div className="text-center space-y-2 py-4">

                <section className="bg-white">
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
