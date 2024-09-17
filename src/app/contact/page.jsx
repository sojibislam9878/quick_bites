import React from 'react';
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
const contactpage = () => {
    return (
        <div className='bg-[#F9F9F9]'>
            <nav className='bg-blue-600 p-10'></nav>
            <div className='min-h-[90vh] container mx-auto px-4 mt-12'>
                <div className=''>
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
            </div>
            <footer className='bg-orange-700 p-20'></footer>
        </div>
    );
};

export default contactpage;