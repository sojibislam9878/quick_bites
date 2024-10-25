'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const AdminProfile = () => {
    const { data: session } = useSession();
    const user = session?.user;

    const data = {
        name: user?.name || "Admin Name", // Fallback name if user data is not available
        image: user?.image || "https://randomuser.me/api/portraits/women/44.jpg", // Fallback image
        stats: {
            totalUsers: 150, // Replace with actual data
            totalDeliveries: 200, // Replace with actual data
            totalCommissions: 5000, // Replace with actual data
            averageRating: "4.8/5", // Replace with actual data
        },
        strongestTopics: [
            { name: "Overall Satisfaction", percentage: 95, color: "bg-green-400" },
            { name: "Delivery Success Rate", percentage: 90, color: "bg-blue-400" },
            { name: "System Uptime", percentage: 98, color: "bg-yellow-400" },
        ],
        weakestTopics: [
            { name: "Customer Support Response", percentage: 65, color: "bg-red-400" },
            { name: "Order Fulfillment Time", percentage: 70, color: "bg-red-400" },
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
                        <p className="text-sm font-medium text-gray-500">Total Users</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.totalUsers}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500">Total Deliveries</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.totalDeliveries}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500">Total Commissions</p>
                        <p className="text-xl font-bold text-gray-800">${data.stats.totalCommissions}</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500">Average Rating</p>
                        <p className="text-xl font-bold text-gray-800">{data.stats.averageRating}</p>
                    </div>
                </div>

                {/* Strongest Topics */}
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Strongest Areas</h3>
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

export default AdminProfile;
