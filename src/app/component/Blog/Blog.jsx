import Image from "next/image"
import React from "react"
import { blogs } from "./blogText"
import BlogCard from "./BlogCard"
import SectionTitle from "../SectionTitle"

function Blog() {

  return (
    <>

      <div className=" container mx-auto p-4 ">
       <SectionTitle head={"Website for Restaurant and Cafe"} title={"Top Restaurants"} para={"Things that get tricky are things like burgers and fries, or things that are deep-fried. We do have a couple of burger restaurants that are capable of doing a good job transporting but it's Fries are almost impossible."}></SectionTitle>

        <div className="flex flex-row justify-center flex-wrap items-center gap-6 w-full mx-auto mt-8">
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