import Image from 'next/image';
import React from 'react';

const BannerPage = () => {
    return (
        <div>
            <section className="bg-white px-12 pt-24">
                <div className='max-w-6xl mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-4  ">
                        <div className="mr-8">
                            <h1 className=" mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white ">
                                Nothing to worry about with QuickBites
                            </h1>
                            <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">
                                From checkout to global sales tax compliance, companies around the
                                world use Flowbite to simplify their payment stack.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                Get started
                                <svg
                                    className="w-5 h-5 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                            >
                                Speak to Sales
                            </a>
                        </div>

                        <div className=' flex flex-col'>
                            <Image width={440} height={440}
                                src="https://bslthemes.com/html/quickeat/assets/img/photo-9.jpg"
                                alt="mockup"
                                className="rounded-[20px] rotate-45"
                            />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default BannerPage;