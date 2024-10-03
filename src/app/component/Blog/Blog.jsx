import React from 'react'

function Blog() {
  return (
    <>
    <div className="bg-[#f5f5f5] py-12">
    <div className="container mx-auto px-4">
      <p className="text-center text-xl font-medium text-[#6E6B58]">Latest News</p>
      <h1 className="mt-2 text-center text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
        Stay Updated with the Latest Articles
      </h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://demo.hasthemes.com/aahar-preview/aahar/images/blog/md-blog/4.jpg"
            alt="News Article 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Breaking News: New Technology Trends
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-4 px-4 py-2  bg-[#ed261b] text-white rounded-lg hover:bg-[#555346] transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
  
        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://demo.hasthemes.com/aahar-preview/aahar/images/blog/md-blog/5.jpg"
            alt="News Article 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              How AI is Changing the Industry
            </h2>
            <p className="text-gray-600 mt-2">
              AI technology is rapidly evolving and transforming various industries. Discover how these changes are shaping the future.
            </p>
            <button className="mt-4 px-4 py-2  bg-[#ed261b] text-white rounded-lg hover:bg-[#555346] transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
  
        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://demo.hasthemes.com/aahar-preview/aahar/images/blog/md-blog/6.jpg"
            alt="News Article 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              The Future of Food Delivery
            </h2>
            <p className="text-gray-600 mt-2">
              The food delivery market is evolving fast. Explore how technology and user behavior are driving the change.
            </p>
            <button className="mt-4 px-4 py-2  bg-[#ed261b] text-white rounded-lg hover:bg-[#555346] transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="relative  bg-[#e4c86a] bg-cover bg-center">
        <div classNameName="absolute inset-0 bg-yellow-500 bg-opacity-40 backdrop-blur-sm"></div>
        <div className="relative z-10 mx-auto max-w-9xl   flex  justify-between">
        <div>
            <img src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-4/1.png" alt="" />
        </div>
          <div className=" py-6 md:px-12 lg:flex lg:items-center ">
            <div className=" ">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Email Newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
                Sign up for our email newsletter to stay up to date.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex" id="revue-form" target="_blank">
                <input
                  type="email"
                  autocomplete="email"
                  required=""
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white shadow hover:bg-black-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-white">
                We will never send any spam emails. Promise.
              </p>
            </div>

          </div>
          <div>
            <img src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-4/2.png" alt="" />
        </div>
        </div>
      </div>
      </>
  )
}

export default Blog