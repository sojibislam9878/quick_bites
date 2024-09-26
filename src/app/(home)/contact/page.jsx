import React from 'react';
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
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
                <div>
                {/* form */}
                <div>
                <div className="container mx-auto p-4 bg-white rounded-xl mt-16 ">
      {/* section header */}
      <div className="text-center ">
        <h1 className="text-4xl font-extrabold mt-6 font-play opacity-90">
          Lets Stay In Touch
        </h1>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
          Your brige to meaningful commuication and personalized assistance, we
          are here to listen and assist you.
        </p>
      </div>
      <div className="p-4 rounded-xl mt-10">
        <div className="md:flex gap-4">
          <input
            type="text"
            className=" p-4 bg-[#f7f5f4] rounded-lg mt-2  w-full focus:outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            className=" p-4 bg-[#f7f5f4] rounded-lg mt-2  w-full focus:outline-none"
            placeholder="Last Name"
          />
        </div>
        <div className="lg:flex gap-4">
          <input
            type="text"
            className=" p-4 bg-[#f7f5f4] rounded-lg mt-2 w-full focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        <textarea
          className=" w-full bg-[#f7f5f4] rounded-lg mt-3 h-52 p-2 focus:outline-none "
          placeholder="Your messages"
        ></textarea>
        <button className="btn w-full bg-[#EA6A12] hover:bg-[#C75A0F] text-white">
          {" "}
          Submit
        </button>
      </div>
    </div>

                </div>
                {/* map  */}
                <div>
                    {/* map will be add here */}
                </div>

                </div>
            </div>
        </div>
    );
};

export default contactpage;