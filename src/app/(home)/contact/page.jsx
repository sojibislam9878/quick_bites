import React from 'react';
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import GoogleMap from '@/app/component/googleMap/GoogleMap';
const contactpage = () => {


  return (
    <div className='bg-[#F9F9F9] pb-20'>
      <div className='container mx-auto px-4'>
        <div className=' pt-32'>
          <div>
            <h1 className='text-4xl font-extrabold opacity-90'>Inform us of Yourself</h1>
            <p className='text-lg font-medium opacity-60'>Contact us if you have any queries or merely want to say hi.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            <div className='flex items-center gap-4 p-2 bg-[#FFFFFF] rounded-lg'>
              <div className='text-white bg-gradient-to-r from-[#F29F42] to-[#F07751] p-5 text-xl rounded-xl'><FaPhoneAlt /></div>
              <div>
                <h1 className='text-xl font-semibold'>phone</h1>
                <p className='text-lg opacity-80'>(+1) 618 190 496</p>
              </div>
            </div>
            <div className='flex items-center gap-4 p-2 bg-[#FFFFFF] rounded-lg'>
              <div className='text-white bg-gradient-to-r from-[#F29F42] to-[#F07751] p-4 text-2xl rounded-xl'><MdEmail /></div>
              <div>
                <h1 className='text-xl font-semibold'>Email</h1>
                <p className='text-lg opacity-80'>geweto9420@chokxus.com</p>
              </div>
            </div>
            <div className='flex items-center gap-4 p-2 bg-[#FFFFFF] rounded-lg'>
              <div className='text-white bg-gradient-to-r from-[#F29F42] to-[#F07751] p-4 text-2xl rounded-xl'><IoLocation /></div>
              <div>
                <h1 className='text-xl font-semibold'>London Office</h1>
                <p className='text-lg opacity-80'>Cruce Casa de Postas 29</p>
              </div>
            </div>
            <div className='flex items-center gap-4 p-2 bg-[#FFFFFF] rounded-lg'>
              <div className='text-white bg-gradient-to-r from-[#F29F42] to-[#F07751] p-4 text-2xl rounded-xl'><PiBuildingApartmentFill /></div>
              <div>
                <h1 className='text-xl font-semibold'>Bournemouth Office</h1>
                <p className='text-lg opacity-80'>Visitación de la Encina 22</p>
              </div>
            </div>
          </div>
        </div>
        {/* contact from  */}
        {/* <div className='flex flex-col md:flex-row gap-4 justify-center items-center  mt-16'> */}
        <div className="flex  flex-col md:flex-row my-12 gap-6">
          {/* Left Side - Form */}
          <div className="flex-1 md:h-full">
            <div className="container mx-auto p-2 my-4 bg-white rounded-xl h-full flex flex-col justify-between">
              {/* section header */}
              <div className="text-center">
                <h1 className="text-4xl font-extrabold font-play opacity-90">
                  Let's Stay In Touch
                </h1>
                <p className="leading-7 opacity-80 mt-2 lg:w-2/3 mx-auto">
                  Your bridge to meaningful communication and personalized assistance, we
                  are here to listen and assist you.
                </p>
              </div>
              <form className="p-4 rounded-xl mt-4  flex flex-col">
                <div className="md:flex gap-4">
                  <input
                    type="text"
                    className="p-4 bg-[#f7f5f4] rounded-lg mt-2 w-full focus:outline-none"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="p-4 bg-[#f7f5f4] rounded-lg mt-2 w-full focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
                <div className="lg:flex gap-4">
                  <input
                    type="text"
                    className="p-4 bg-[#f7f5f4] rounded-lg mt-2 w-full focus:outline-none"
                    placeholder="Your Email"
                  />
                </div>
                <textarea
                  className="w-full bg-[#f7f5f4] h-36 rounded-lg mt-2 p-2 focus:outline-none"
                  placeholder="Your message"
                ></textarea>
                <button className="btn w-full bg-[#EA6A12] hover:bg-[#C75A0F] text-white mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="flex-1 md:h-full">
            <GoogleMap />
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default contactpage;