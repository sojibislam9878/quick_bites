import Image from 'next/image';
import React from 'react';

const Benificiar = () => {
    return (
        <div>
            <section className=" max-w-6xl mx-auto bg-[url('https://bslthemes.com/html/quickeat/assets/img/background.png')] bg-cover bg-center ">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                    <div className=" flex-1 rounded-full flex flex-row justify-center  items-center">
                        <Image height={600} width={600}
                            src="https://bslthemes.com/html/quickeat/assets/img/photo-10.png"
                            alt="mockup"

                        />
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className=" mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  w-[460px]">
                                Service shows good taste.
                            </h1>
                            <p className=" mb-6  text-black-500 lg:mb-8 md:text-lg text-lg font-semibold w-[460px]">
                                <span className="text-[#F29F05] font-bold text-6xl">976 </span>
                                Satisfied Customers
                            </p>
                        </div>
                        <div className="flex  bg-white p-8 rounded-lg shadow-md w-[600px] justify-between">
                            <div className="flex ">
                                <h1 className="text-[#F29F05] font-bold text-6xl">12 </h1>
                                <div className="flex flex-col text-left ml-4">
                                    <p className="text-lg font-semibold">Best</p>
                                    <p className="text-lg font-semibold">Restaurants</p>
                                </div>
                            </div>

                            <div className="flex ">
                                <h1 className="text-[#F29F05] font-bold text-6xl">1k + </h1>
                                <div className="flex flex-col text-left  ml-4">
                                    <p className="text-lg font-semibold">Food</p>
                                    <p className="text-lg font-semibold">Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benificiar;