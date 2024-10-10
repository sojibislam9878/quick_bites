import Image from 'next/image';
import React from 'react';

const BloogLetter = () => {
    return (
        <div>
            <div className="relative  bg-[#e4c86a] bg-cover bg-center">
                <div className="absolute inset-0 bg-yellow-500 bg-opacity-40 backdrop-blur-sm"></div>
                <div className="relative z-10 mx-auto max-w-9xl   flex  justify-between">
                    <div>
                        <Image width={300} height={200} src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-4/1.png" alt="" />
                    </div>
                    <div className=" py-6 md:px-12 lg:flex lg:items-center ">
                        <div className=" ">
                            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                                Email Newsletter
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg leading-6 text-white">
                                Sign up for our email newsletter to stay up to date.
                            </p>
                        </div>
                        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                            <form className="sm:flex" id="revue-form" target="_blank">
                                <input
                                    type="email"
                                    autocomplete="email"
                                    required=""
                                    className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white shadow hover:bg-black-400 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="mt-3 text-sm text-white">
                                We will never send any spam emails. Promise.
                            </p>
                        </div>

                    </div>
                    <div>
                        <Image width={300} height={200} src="https://demo.hasthemes.com/aahar-preview/aahar/images/banner/bann-4/2.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BloogLetter;