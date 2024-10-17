import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
    return (

        <footer
            style={{
                background: `rgba(0, 0, 0, 0.8) url(/assets/images/footer.jpeg)`,
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
            className="text-gray-300 pt-8 pb-4 bg-no-repeat"
        >
            <div className=" container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section - Logo and Social Icons */}


                    <div className="text-center  w-full mx-auto lg:w-fit md:text-left">

                        <Link className=' ' href="/">

                            <Image className=' w-20  mx-auto lg:mx-0 md:mx-0'
                                src="https://i.ibb.co.com/MP6sd6v/logo-02.png"
                                alt="QuickBite"
                                height={100}
                                width={100}
                            />
                        </Link>


                        <div className="flex  justify-center md:justify-start space-x-4 mt-4">
                            <a target="_blank" className="text-gray-300 hover:text-gray-900" href="https://facebook.com">

                                <FaFacebookF size={20} /> {/* FontAwesome icon */}

                            </a>
                            <a target="_blank" className="text-gray-300 hover:text-gray-900" href="https://instagram.com">
                                {/* <a target="_blank" className="text-gray-600 hover:text-gray-900"> */}
                                <FaInstagram size={20} />
                                {/* </a> */}
                            </a>
                            <a target="_blank" className="text-gray-300 hover:text-gray-900" href="https://linkedin.com">
                                {/* <a target="_blank" className="text-gray-600 hover:text-gray-900"> */}
                                <FaLinkedinIn size={20} />
                                {/* </a> */}
                            </a>
                            <a target="_blank" className="text-gray-300 hover:text-gray-900" href="https://tiktok.com">
                                {/* <a target="_blank" className="text-gray-600 hover:text-gray-900"> */}
                                <FaDiscord size={20} />
                                {/* </a> */}
                            </a>
                        </div>
                    </div>
                    {/* ss */}

                    {/* Middle Section - Product Links */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg">Product</h3>
                        <ul className="mt-4 space-y-2">
                            <li className='hover:scale-y-[1.08]'><a href='' className="hover:text-gray-300 font-semibold hover:underline">Menu</a></li>
                            <li className='hover:scale-y-[1.08]'><a href='' className=" hover:text-gray-300 font-semibold hover:underline">Price List</a></li>
                            <li className='hover:scale-y-[1.08]'><a href='' className="hover:text-gray-300 font-semibold hover:underline">Reviews</a></li>
                            <li className='hover:scale-y-[1.08]'><a href='' className="hover:text-gray-300 font-semibold hover:underline">Updates</a></li>
                        </ul>
                    </div>

                    {/* Right Section - Company and Support Links */}
                    <div className="grid grid-cols-2 gap-4 text-center md:text-left">
                        <div>
                            <h3 className="font-bold text-lg">Company</h3>
                            <ul className="mt-4 space-y-2">
                                <li className='hover:scale-y-[1.08]'><a href='' className=" hover:text-gray-300 font-semibold hover:underline ">About Us</a></li>
                                <li className='hover:scale-y-[1.08]'><a href='' className="hover:text-gray-300 font-semibold hover:underline">Branch Contacts</a></li>
                                <li className='hover:scale-y-[1.08]'><a href='/contact' className="hover:text-gray-300 font-semibold hover:underline">Contact Us</a></li>
                                <li className='hover:scale-y-[1.08]'><a href='' className="hover:text-gray-300 font-semibold hover:underline">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Support</h3>
                            <ul className="mt-4 space-y-2">
                                <li className='hover:scale-y-[1.08]'><a href='' className="hover:text-gray-300 font-semibold hover:underline">Help Center</a></li>
                                <li className='hover:scale-y-[1.08]'><a href='' className="hover:text-gray-300 font-semibold hover:underline">Report a Bug</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-8 text-center border-t pt-4">
                    <p>Developer Team</p>
                    <p>&copy; 2024 QuickBite | All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;