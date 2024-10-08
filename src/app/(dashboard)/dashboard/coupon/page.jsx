'use client'

import CouponData from "@/app/component/coupon/CouponData";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { IoMdMore } from "react-icons/io";




const CouponManagement = () => {
    const [data, refetch,isPending,isLoading] = CouponData()


    const handleStatus = async (value, id) => {

        if (value.toLowerCase() == 'active') {
            console.log('Active')

            await axios.post('http://localhost:3000/api/coupon', { id, value })
                .then(response => {

                    if (response?.data?.result?.matchedCount > 0) {
                        return refetch()

                    }
                }
                )


        } else {
            console.log('de')

            await axios.post('http://localhost:3000/api/coupon', { id,value })
            .then(response => {

                if (response?.data?.result?.matchedCount > 0) {
                    console.log(response.data)

                    return refetch()

                }
            }
            )
        }



    }

    const [dot, setDot] = useState('false')


    console.log('data', data,isPending,isLoading)
    return (
        <div className="p-6 ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl  font-lobster font-semibold">Coupon Management</h2>
                <Link href={'dashboard/coupon'}>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                        + Add New Coupon
                    </button>
                </Link>
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

                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 via-green-500 via-blue-400 via-yellow-300 via-green-500 via-blue-300 via-pink-500 to-red-500"></span>
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
                            <td className="p-4 ">
                                <IoMdMore onMouseOver={() => setDot(data?._id)} color=" gray" size={22} />

                                {dot == data?._id ?
                                    <div onMouseLeave={() => setDot('')} className='border   px-4 py-2 rounded-md absolute  top  bg-white'>
                                        {/* it will be change by status also color and also to change this icon  */}

                                        <p onClick={() => handleStatus('active', data?._id)} className={`p-3 ${data?.status=='active'?'text-gray-400 disabled':'text-green-400'}  cursor-pointer hover:bg-slate-300 `}>Active</p>
                                        <p onClick={() => handleStatus('deactive', data?._id)} className={`p-3 ${data?.status=='deactive'?'disabled text-gray-500':'text-green-400'} cursor-pointer hover:bg-slate-300`}>Deactive</p>
                                        <p className='p-3  cursor-pointer text-green-400 hover:bg-slate-300'>Edit</p>
                                        <p className='p-3  cursor-pointer text-red-500 hover:bg-slate-300' >Delete</p>
                                    </div> : ' '
                                }

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CouponManagement;
