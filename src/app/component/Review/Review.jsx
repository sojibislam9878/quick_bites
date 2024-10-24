
"use client"
import ReviewSlide from "./ReviewSlide";

const Review = () => {
    return (
        <div className="">
            <div className="text-center container mx-auto px-4 ">

                <section className="bg-white">
                    <div className="  mx-auto">
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
