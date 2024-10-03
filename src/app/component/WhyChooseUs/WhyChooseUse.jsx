import React from "react";

function WhyChooseUse() {
  return (
    <div className="text-center  pt-10 mt-10 bg-[#f3f3f3]">
      <section className=" ">
        <div className=" mx-auto text-center">
        
          <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Why Choose Us
          </h1>
          <div className=" flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/4">
              <img
                src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-1/2.png"
                alt="Service Image 1"
                className=""
              />
            </div>

            <div className="lg:w-1/2 text-center">
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                tempor incididunt ut labore et dolore magna aliqua. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div className="mb-6 text-center flex  gap-10 justify-between mx-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  1. Ontime Delivery
                </h2>
                <h2 className="text-xl font-semibold text-gray-800">
                  2. Free Delivery Cost
                </h2>
                <h2 className="text-xl font-semibold text-gray-800">
                  3. Best Quality Food
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                We pride ourselves on delivering top-quality service, ensuring
                your food arrives on time, with no extra delivery costs. We
                strive to provide the best culinary experience with freshly
                made, delicious meals.
              </p>
              <button className="px-6 py-3 bg-[#ed261b] text-white rounded-md hover:bg-[#20c0d2] transition duration-300">
                Read More
              </button>
            </div>

            <div className="lg:w-1/4">
              <img
                src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-1/1.png"
                alt="Service Image 2"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUse;
