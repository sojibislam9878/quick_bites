import Image from 'next/image'
import React from 'react'
import { blogs } from "./blogText"
import BlogCard from './BlogCard'

function Blog() {

  return (
    <>

      <div className="max-w-6xl  py-4 mx-auto text-center">
        <p className="text-xl font-medium text-[#6E6B58] ">Latest News</p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Stay Updated with the Latest Articles
        </h1>




        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

          {
            blogs.slice(0, 3).map(blog => (<BlogCard key={blog.id} blog={blog} />))
          }
        </div>




      </div >

    </>
  )
}

export default Blog