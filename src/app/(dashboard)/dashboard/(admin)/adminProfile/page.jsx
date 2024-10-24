'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const AdminProfile = () => {
    const data = {
        name: "John do",
        role: "user",
        email: "john@example.com",
        image: "https://thumbs.dreamstime.com/b/delivery-boy-ride-scooter-motorcycle-servic-service-order-worldwide-shipping-fast-free-transport-75096257.jpg",
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center py-12">
            <div className="bg-white shadow-2xl rounded-lg w-full lg:w-3/4 xl:w-2/3 p-8 lg:p-12 mx-4">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
                    {/* Profile Picture */}
                    <div className="lg:w-1/4 mb-8 lg:mb-0">
                        <Image
                            src={data.image}
                            alt="Profile Picture"
                            className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-lg"
                            width={160}
                            height={160}
                        />
                    </div>

                    {/* Profile Info */}
                    <div className="lg:w-3/4 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-gray-800">{data.name}</h2>
                        <p className="text-xl text-gray-600 mb-2">{data.role}</p>
                        <p className="text-lg text-gray-500 mb-6">{data.email}</p>

                        {/* About */}
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h3>
                        <p className="text-gray-600 mb-6">
                            I am a passionate frontend developer specializing in creating interactive and responsive user interfaces.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                            <Link href={'/dashboard/registarOwner'} className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
                                Register as Restaurant Owner
                            </Link>
                            <Link href={'/dashboard/registarDeleveryBoy'} className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition">
                                Apply as Delivery Partner
                            </Link>
                        </div>

                        {/* Social Links */}
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Connect with Me</h3>
                        <div className="flex justify-center lg:justify-start space-x-6">
                            <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="LinkedIn">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
                                <FaTwitter size={30} />
                            </a>
                            <a href="#" className="text-gray-800 hover:text-black" aria-label="GitHub">
                                <FaGithub size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
