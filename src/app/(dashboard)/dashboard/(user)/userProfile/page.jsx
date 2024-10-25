'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FaClipboardList, FaUtensils, FaHeart, FaClock } from 'react-icons/fa'; // Import relevant icons
import React from 'react';

const UserProfile = () => {
    const userData = useSession();
    const user = userData?.data?.user;
    const data = {
        name: "Arya Muller",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stats: {
            totalOrders: 120,
            favoriteRestaurants: 5,
            favoriteCuisine: "Italian",
            orderFrequency: "2 times per week",
        },
        recentOrders: [
            { name: "Pepperoni Pizza", restaurant: "Italian Delight", date: "Oct 10, 2024" },
            { name: "Chicken Burger", restaurant: "Burger Joint", date: "Oct 6, 2024" },
        ]
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center p-8">
            <div className="border-2 rounded-3xl w-full max-w-6xl p-10 bg-white shadow-md">
                {/* Profile Picture and Name */}
                <div className="flex flex-col items-center text-center mb-6">
                    <Image
                        src={user?.image}
                        alt="Profile Picture"
                        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                        width={112}
                        height={112}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4">{user?.name}</h2>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
                        <FaClipboardList className="text-2xl text-gray-600 mb-2" />
                        <p className="text-sm font-medium text-gray-500">Total Orders</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.totalOrders}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
                        <FaUtensils className="text-2xl text-gray-600 mb-2" />
                        <p className="text-sm font-medium text-gray-500">Favorite Restaurants</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.favoriteRestaurants}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
                        <FaHeart className="text-2xl text-gray-600 mb-2" />
                        <p className="text-sm font-medium text-gray-500">Favorite Cuisine</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.favoriteCuisine}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
                        <FaClock className="text-2xl text-gray-600 mb-2" />
                        <p className="text-sm font-medium text-gray-500">Order Frequency</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.orderFrequency}</p>
                    </div>
                </div>

                {/* Recent Orders */}
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h3>
                <div className="grid grid-cols-1 gap-6">
                    {data.recentOrders.map((order, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                            <div className="text-gray-800">
                                <p className="text-md font-semibold">{order.name}</p>
                                <p className="text-sm text-gray-600">From: {order.restaurant}</p>
                            </div>
                            <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
