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

                <div className="p-6 text-start">
                    <div>
                        <h1 className='text-xl font-bold'>Maenaam Thai Restaurant</h1>
                  
                               
                        <p className="mt-2 text-sm text-gray-600 leading-8">
                        Energistically seize unique portals via B2B potentialities. Quickly.
                        </p>

                        <div className='flex justify-between items-center mt-8 border-b-2 pb-10'>
                            <p className='text-2xl font-extrabold'>$ 75.00</p>
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
                    src={img3}
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
                            <p className='text-2xl font-extrabold'>$ 60.00</p>
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

            

           
                

        
        </div>
        <button className='outline-2 px-4 py-2 rounded-lg hover:bg-[#EA6A12] font-medium text-white bg-[#ff7519] mt-8'> see more</button>
        </div>
    );
};

export default Section;
