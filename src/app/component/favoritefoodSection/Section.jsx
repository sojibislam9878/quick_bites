import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionTitle from '../SectionTitle';
import img1 from "../../../asset/image/ff1.jpg"
import img2 from "../../../asset/image/ff2.jpg"
import img3 from "../../../asset/image/ff3.jpg"

const Section = () => {
    return (
        <div className='container mx-auto p-4 text-center mt-20' > 
        <SectionTitle head={"Your Favourite Food"} title={"Choose & Enjoy"} para={"Assertively extend goal-oriented web services before leading-edge internal or organic sources. Energistically formulate."}></SectionTitle>
        {/* card parant  */}
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {/* single card  */}
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md ">
                <Image
                    className="object-cover w-full h-64"
                    src={img1}
                    alt="Article"
                    width={500}
                    height={256}
                    layout="responsive"
                />

                <div className="p-6 text-start">
                    <div>
                        <h1 className='text-xl font-bold'>Maenaam Thai Restaurant</h1>
                  
                               
                        <p className="mt-2 text-sm text-gray-600 leading-8">
                        Energistically seize unique portals via B2B potentialities. Quickly.
                        </p>

                        <div className='flex justify-between items-center mt-8 border-b-2 pb-10'>
                            <p className='text-2xl font-extrabold'>$ 85.00</p>
                            <button className='btn'>Order now</button>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="py-4">
                            <div className="flex items-center gap-7">
                                <Image
                                    className="object-cover h-10 rounded-full"
                                    src="https://i.ibb.co.com/NNkC2fC/DALL-E-2024-10-23-20-24-57-A-logo-for-Green-Leaf-Caf-with-a-natural-eco-friendly-feel-The-design-sho.webp"
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    layout="fixed"
                                />
                                <div>
                                <h6 className='font-bold'>Fabio al Porto Ristorante</h6>
                                <p className='text-sm'>5th Avenue New York 68</p>
                                </div>
                                   
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md ">
                <Image
                    className="object-cover w-full h-64"
                    src={img2}
                    alt="Article"
                    width={500}
                    height={256}
                    layout="responsive"
                />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <Link href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform da hover:text-gray-600 hover:underline" tabIndex="0">
                  
                                I Built A Successful Blog In One Year
                        </Link>
                        <p className="mt-2 text-sm text-gray-600 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <Image
                                    className="object-cover h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    layout="fixed"
                                />
                                <Link href="#" className="mx-2 font-semibold text-gray-700" tabIndex="0">
                                   
                                        Jone Doe
                                </Link>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 ">21 SEP 2015</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md ">
                <Image
                    className="object-cover w-full h-64"
                    src={img3}
                    alt="Article"
                    width={500}
                    height={256}
                    layout="responsive"
                />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <Link href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform da hover:text-gray-600 hover:underline" tabIndex="0">
                  
                                I Built A Successful Blog In One Year
                        </Link>
                        <p className="mt-2 text-sm text-gray-600 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <Image
                                    className="object-cover h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    layout="fixed"
                                />
                                <Link href="#" className="mx-2 font-semibold text-gray-700" tabIndex="0">
                                   
                                        Jone Doe
                                </Link>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 ">21 SEP 2015</span>
                        </div>
                    </div>
                </div>
            </div>
                

        
        </div>
        <button className='btn mt-10'> see more</button>
        </div>
    );
};

export default Section;
