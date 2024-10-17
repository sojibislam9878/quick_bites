import Image from 'next/image';
import React from 'react';

const Facility = () => {
    return (
        <div>
            <section className="bg-white  mb-10">
                <div className="container mx-auto px-4 md:px-10">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="p-7 max-w-6xl bg-white border border-gray-200 rounded-lg shadow hover:bg-yellow-400">
                            <a href="#" className="">
                                <Image width={600} height={600}
                                    className="rounded-t-lg p-2"
                                    src="https://bslthemes.com/html/quickeat/assets/img/service-icon-2.svg"
                                    alt=""
                                />
                            </a>
                            <div className="">
                                <a href="#">
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
                                        Free Delivery
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 leading-8 ">
                                    Here are the biggest enterprise technology acquisitions of
                                    2021 so far, in reverse chronological order.
                                </p>
                            </div>
                        </div>

                        <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-yellow-400">
                            <a href="#">
                                <Image height={600} width={600}
                                    className="rounded-t-lg p-2"
                                    src="https://bslthemes.com/html/quickeat/assets/img/service-icon-3.svg"
                                    alt=""
                                />
                            </a>
                            <div className="">
                                <a href="#">
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                                        Save Your Time
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    Here are the biggest enterprise technology acquisitions of
                                    2021 so far, in reverse chronological order.
                                </p>
                            </div>
                        </div>

                        <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-yellow-400">
                            <a href="#">
                                <Image height={600} width={600}
                                    className="rounded-t-lg p-2"
                                    src="https://bslthemes.com/html/quickeat/assets/img/service-icon-5.svg"
                                    alt=""
                                />
                            </a>
                            <div className="">
                                <a href="#">
                                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                                        Regular Discounts
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    Here are the biggest enterprise technology acquisitions of
                                    2021 so far, in reverse chronological order.
                                </p>
                            </div>
                        </div>

                        <div className="p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-yellow-400">
                            <a href="#">
                                <Image width={600} height={600}
                                    className="rounded-t-lg p-2"
                                    src="https://bslthemes.com/html/quickeat/assets/img/service-icon-7.svg"
                                    alt=""
                                />
                            </a>
                            <div className="">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                                        Variety Food
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 ">
                                    Here are the biggest enterprise technology acquisitions of
                                    2021 so far, in reverse chronological order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facility;