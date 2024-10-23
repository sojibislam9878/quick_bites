import Image from "next/image"
import React from "react"
import { blogs } from "./blogText"
import BlogCard from "./BlogCard"

function Blog() {

  return (
    <>

      <div className="max-w-6xl  py-4 mx-auto text-center">
        <p className="text-xl font-medium text-[#6E6B58] font-greatVibes ">Website for Restaurant and Cafe</p>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
          Top Restaurants
        </h1>

        <div className="flex flex-row justify-center items-center gap-6 w-full mx-auto mt-8">
          <div className="p-12 border-2 rounded-full  ">
            <Image className="transition-transform hover:scale-125 hover:rotate-6 duration-200" src={"/assets/images/top-restaurant1.png"} alt="res-1" height={100} width={100} />
          </div>
          <div className="p-12 border-2 rounded-full">
            <Image src={"/assets/images/top-restaurant2.png"} className="hover:rotate-6 transition-transform hover:scale-125 duration-200" alt="res-1" height={100} width={100} />
          </div>
          <div className="p-12 border-2 rounded-full  ">
            <Image src={"/assets/images/top-restaurant3.png"} className="hover:rotate-6 transition-transform hover:scale-125 duration-200" alt="res-1" height={100} width={100} />
          </div>
          <div className="p-12 border-2 rounded-full  ">
            <Image src={"/assets/images/top-restaurant4.png"} className="hover:rotate-6 transition-transform hover:scale-125 duration-200" alt="res-1" height={100} width={100} />
          </div>
          <div className="p-12 border-2 rounded-full ">
            <Image src={"/assets/images/top-restaurant5.png"} alt="res-1" height={100} width={100} className="hover:rotate-6 transition-transform hover:scale-125 duration-200" />
          </div>
          <div className="p-12 border-2 rounded-full ">
            <Image src={"/assets/images/top-restaurant6.png"} alt="res-1" height={100} width={100} className="hover:rotate-6 transition-transform hover:scale-125 duration-200" />
          </div>
        </div>
      </div >
    </>
  )
}

export default Blog