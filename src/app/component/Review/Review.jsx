
"use client"
import SectionTitle from "../SectionTitle";
import ReviewSlide from "./ReviewSlide";

const Review = () => {
    return (
        <div className="">
            <SectionTitle head={"Reviews"} title={"Show all Reviews"} para={"there is all rivew which is given by our user, and they have shared they exprence"}></SectionTitle>
            <div className="text-center container mx-auto px-4 ">

                <section className="bg-white">
                    <div className="  mx-auto">
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
