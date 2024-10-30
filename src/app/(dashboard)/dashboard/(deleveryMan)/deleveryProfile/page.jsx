'use client';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
    const data = {
        name: "Arya Muller",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stats: {
            totalOrders: 55,
            pendingDeliveries: 8,
            completedDeliveries: 47,
            customerRating: "4.5/5",
        },
        strongestTopics: [
            { name: "Fast Delivery", percentage: 90, color: "bg-green-400" },
            { name: "Customer Satisfaction", percentage: 85, color: "bg-yellow-400" },
            { name: "Order Accuracy", percentage: 92, color: "bg-blue-400" },
        ],
        weakestTopics: [
            { name: "Traffic Management", percentage: 70, color: "bg-red-400" },
        ]
    };

    return (
        <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center p-8">
            <div className="border-2 rounded-3xl w-full max-w-6xl p-10">
              
                {/* Profile Picture and Name */}
                <div className="flex flex-col items-center text-center mb-6">
                    <Image
                        src={data.image}
                        alt="Profile Picture"
                        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                        width={112}
                        height={112}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4">{data.name}</h2>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500">Total Orders</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.totalOrders}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500">Pending Deliveries</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.pendingDeliveries}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500">Completed Deliveries</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.completedDeliveries}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500">Customer Rating</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.customerRating}</p>
                    </div>
                </div>

                {/* Strongest Topics */}
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Strongest Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {data.strongestTopics.map((topic, index) => (
                        <div key={index} className="flex items-center">
                            <div className="w-1/2 text-sm text-gray-600">{topic.name}</div>
                            <div className="w-1/2 flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                                    <div className={`h-2 rounded-full ${topic.color}`} style={{ width: `${topic.percentage}%` }}></div>
                                </div>
                                <span className="text-sm text-gray-600">{topic.percentage}%</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Weakest Topics */}
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Areas to Improve</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.weakestTopics.map((topic, index) => (
                        <div key={index} className="flex items-center">
                            <div className="w-1/2 text-sm text-gray-600">{topic.name}</div>
                            <div className="w-1/2 flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                                    <div className={`h-2 rounded-full ${topic.color}`} style={{ width: `${topic.percentage}%` }}></div>
                                </div>
                                <span className="text-sm text-gray-600">{topic.percentage}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
