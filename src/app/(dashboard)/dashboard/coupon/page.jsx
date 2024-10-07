'use client'

import CouponData from "@/app/component/coupon/CouponData";
import {useState} from "react";
import { IoMdMore } from "react-icons/io";




const CouponManagement = () => {
   
    const [dot,setDot]=useState('false')

    const [data] = CouponData()

    console.log('data', data)
    return (
        <div  className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl  font-lobster font-semibold">Coupon Management</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                    + Add New Coupon
                </button>
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="relative bg-gray-100 text-left">
                        <th className="border-t  border-gray-300 p-4">Coupon ID</th>
                        <th className="border-t  border-gray-300 text-center p-4">Code</th>
                        <th className="border-t  border-gray-300 p-4">Price</th>
                        <th className="border-t  border-gray-300 p-4">Active from</th>
                        <th className="border-t  border-gray-300 p-4">Active to</th>
                        <th className="border-t  border-gray-300 p-4">Category</th>

                        <span  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 via-green-500 via-blue-400 via-yellow-300 via-green-500 via-blue-500 via-pink-500 to-red-500"></span>
                    </tr>
                </thead>

                <tbody>
                    {data?.result?.map((data, index) => (
                        <tr key={index} className="border-b">
                            <td className="text-center p-4">{data?.id}</td>
                            <td className="text-center p-4">{data?.code}</td>
                            <td className="text-center text-red-400 p-4">{data?.discountValue}%</td>
                            <td className="text-center p-4">{data?.validity?.start}</td>
                            <td className="text-center p-4">{data?.validity?.end}</td>
                            <td className="text-center p-4">{data?.category}</td>
                            <td className="p-4">
                                <IoMdMore onClick={()=>setDot(!dot)}  color=" gray" size={22} />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CouponManagement;
