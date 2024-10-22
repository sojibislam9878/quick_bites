'use client'

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoMdHeartEmpty, IoMdShare } from 'react-icons/io';

const RestuarantDetailsPage = () => {
    const [item, setItem] = useState({});
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const { slag } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/allrestrurent/${slag}`);
                const data = await res.json();
                setItem(data?.result);
                setReviews(data.result.reviews || []); // Set existing reviews
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (slag) {
            fetchData();
        }
    }, [slag]);

    return (
        <div className='mt-8'>
            <section className="">
                <div className="col-span-9 pb-12 md:grid md:grid-cols-12 gap-6 bg-white min-h-screen border">
                    {/* Image Section */}
                    <div className="image md:col-span-5 ml-8 mt-8">
                        <img
                            src={item?.banner_image}
                            height={300}
                            width={100}
                            alt={item?.name}
                            className="w-full border p-6"
                        />
                        <div>
                            <button className="bg-[#ebebeb] text-[#737373] rounded mt-4 px-8 py-4 text-center w-full">
                                Want to Readdddd
                            </button>
                        </div>
                    </div>

                    {/* Restaurant Details Section */}
                    <article className="productDetails space-y-4 md:col-span-7 mt-8 px-6">
                        <h1 className="text-3xl text-gray-600">{item?.name}</h1>
                        <h1 className=" text-gray-600">
                            Restaurant Owner <span className="text-[#0397d3]">Sajib Wazed Joy</span>
                        </h1>
                        <h1 className=" text-gray-600">
                            Opens At: <span className="text-[#0397d3]">{item?.opensAt}</span>
                        </h1>

                        <div>
                            {item?.status === "active" ? (
                                <div className="text-[#0397d3]">
                                    ✅ Active{" "}
                                    <span className="text-red-600">(43 Customer Report!)</span>
                                    <p className="text-gray-700 mt-2">
                                        অতিরিক্ত বাজে Report দেখলে রেস্ট্রুরেন্টকে ব্লক করুন।
                                    </p>
                                </div>
                            ) : (
                                <p className="text-red-600 font-semibold">Blocked</p>
                            )}
                        </div>

                        {/* Additional Details */}
                        <div className="mt-8 flex gap-8">
                            <div className="space-y-1">
                                <p className="text-gray-600">Avg. Rating</p>
                                <p className="text-center ml-6">{item?.avgRating}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-600">Starting Year</p>
                                <p className="text-center ml-6">2024</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-gray-600">Location</p>
                                <p className="text-center ml-6">{item?.location} ({item?.locationDetail})</p>
                            </div>
                        </div>

                        {/* Call Button */}
                        <div className="space-x-6">
                            <a
                                href="tel:+880123456789"
                                className="border-2 px-2 font-bold py-2 rounded text-green-600 hover:bg-green-600 hover:text-white border-green-600 flex items-center gap-4"
                            >
                                <FaPhone /> <span>Call Restaurant</span>
                            </a>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex gap-6">
                            <p className="flex gap-2 cursor-pointer hover:text-[#4398fe] items-center text-gray-600">
                                <IoMdHeartEmpty className="text-lg" /> <span>Add to Favorites</span>
                            </p>
                            <p className="flex gap-2 cursor-pointer hover:text-[#4398fe] items-center text-gray-600">
                                <IoMdShare className="text-lg" /> <span>Share This Restaurant</span>
                            </p>
                        </div>
                    </article>
                </div>

                <div className="col-span-3 min-h-screen border">
                    {/* Related Restaurants Section */}
                </div>
            </section>
        </div>
    );
};

export default RestuarantDetailsPage;
