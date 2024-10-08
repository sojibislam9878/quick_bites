import Image from "next/image";
import React from "react";
import { FaDotCircle } from "react-icons/fa";

function WhyChooseUse() {

  return (
    <div className="max-w-6xl  py-4 mx-auto text-center">
      <p className="text-xl font-medium text-[#6E6B58] ">Choose</p>

      <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Why Choose Us
      </h1>
      <div className="">

        <div className=" flex flex-col lg:flex-row items-center justify-between gap-10">
          <div >
            <Image
              src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-1/2.png"
              alt="Service Image 1" width={300} height={200}
              className=""
            />
          </div>

          <div className="lg:w-1/2 text-center">

            <div className="space-y-2 mb-6 flex flex-col  justify-start items-center">
              <h2 className="text-xl font-light text-gray-800 flex flex-row justify-start gap-2 items-center">
                <FaDotCircle /> Ontime Delivery
              </h2>

              <h2 className="text-xl font-light text-gray-800 flex flex-row justify-start gap-2 items-center">
                <FaDotCircle /> Best Quality Food
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              We pride ourselves on delivering top-quality service, ensuring
              your food arrives on time, with no extra delivery costs. We
              strive to provide the best culinary experience with freshly
              made, delicious meals.
            </p>
            <button className="px-6 py-3 bg-[#ff7519] text-white rounded-md hover:bg-[#ff8c3f] transition duration-300">
              Read More
            </button>
          </div>

          <div className="">
            <Image
              src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-1/1.png"
              alt="Service Image 2" width={300} height={200}
              className=""
            />
          </div>
        </div>
      </div>
    </div>



  );
}

export default WhyChooseUse;
