'use client'

import CouponData from "@/app/component/coupon/CouponData";
import CouponSpinner from "@/app/component/coupon/CouponSpinner";
import Spinner from "@/app/component/Spinner";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { MdDelete } from "react-icons/md";




const CouponManagement = () => {
    const [data, refetch] = CouponData()
    const [loading, setloading] = useState(false)


    const handleStatus = async (value, id) => {
        setloading(true)
        if (value.toLowerCase() == 'active') {
            console.log('Active')

            await axios.post('http://localhost:3000/api/coupon', { id, value })
                .then(response => {

                    if (response?.data?.result?.matchedCount > 0) {
                        refetch()
                        setTimeout(() => {
                            setloading(false)
                        }, 500)



                    }
                }
                )


        } else {

            await axios.post('http://localhost:3000/api/coupon', { id, value })
                .then(response => {

                    if (response?.data?.result?.matchedCount > 0) {
                        // console.log(response.data)

                        refetch()
                        setTimeout(() => {
                            setloading(false)
                        }, 500)

                    }
                }
                )
        }



    }

    const handleDelete = async (value) => {

        console.log(value)
        setloading(true)


        await fetch('https://quick-bites-ljsf.onrender.com /api/coupon', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value }), // Pass the necessary data
        })
            .then(result => {

                if (result) {

                    refetch()
                    setTimeout(() => {
                        setloading(false)
                    }, 500)
                } else {
                    console.error("Error removing from favorites:", response.statusText);
                }
            })




    }

    const [dot, setDot] = useState('false')
    const [isEditing, setIsEditing] = useState(false);
    const [startText, setText1] = useState('');
    const [startEnd, setText2] = useState('');
    const [startPrice, setText3] = useState('');

    const handleEditClick = (value) => {
        setIsEditing(value);
        setText1('')
        setText2('')
        setText3('')
        console.log(isEditing);

    };



    const handleInputChange = (e, da) => {

        let data = e.target.value
        if (da == 'start') {
            setText1(data);

        }
        else if (da == 'end') {
            setText2(data);

        }
        else if (da == 'price') {
            setText3(data);

        }
    };

    const handleSaveUpdate = async () => {

        if (isEditing) {
            setloading(true)


            const updateCouponData = {
                id: isEditing,
                price: startPrice,
                start: startText,
                end: startEnd
            }
            console.log(updateCouponData);

            await axios.post('http://localhost:3000/api/coupon/updateCoupon', updateCouponData)
                .then(result => {
                    console.log(result.data);

                    if (result) {

                        refetch()
                        setIsEditing(false)

                        setTimeout(() => {
                            setloading(false)
                        }, 500)
                    } else {
                        console.error("Error removing from favorites:", response.statusText);
                    }
                })




        }

    }



    return (

        <div className="p-6 ">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl  font-lobster font-semibold">Coupon Management</h2>
                <Link href={'addcoupon'}>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                        + Add New Coupon
                    </button>
                </Link>
            </div>

            <div>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="relative bg-gray-100 text-left">
                            <th className="border-t  border-gray-300 p-4">Coupon ID</th>
                            <th className="border-t  border-gray-300 text-center p-4">Code</th>
                            <th className="border-t  border-gray-300 p-4">Price</th>
                            <th className="border-t  border-gray-300 p-4">Active from</th>
                            <th className="border-t  border-gray-300 p-4">Active to</th>
                            <th className="border-t  border-gray-300 p-4">Category</th>
                            <th className="border-t  border-gray-300 p-4">Status</th>

                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 via-green-500 via-blue-400 via-yellow-300 via-green-500 via-blue-300 via-pink-500 to-red-500"></span>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.result?.map((data, index) => (
                            <tr key={index} className="border-b">
                                <td className="text-center p-4">{data?.id}</td>
                                <td className="text-center p-4">{data?.code}</td>
                                <td className="text-center text-red-400 p-4">
                                    {isEditing == data?._id ? (
                                        <input className="w-10 text-center max-w-2xl"
                                            type="text"
                                            value={startPrice || data?.discountValue}
                                            onChange={(e) => handleInputChange(e, 'price')}
                                            // onBlur={handleSaveClick} // Save when clicking outside the input
                                            autoFocus
                                        />
                                    ) : (
                                        <span>
                                            {data?.discountValue}%
                                        </span>
                                    )}
                                </td>
                                <td className="text-center p-4">

                                    {isEditing == data?._id ? (
                                        <input className="w-[89px] max-w-2xl"
                                            type="text"
                                            value={startText || data?.validity?.start}
                                            onChange={(e) => handleInputChange(e, 'start')}
                                            // onBlur={handleSaveClick} // Save when clicking outside the input
                                            autoFocus
                                        />
                                    ) : (
                                        <span>
                                            {data?.validity?.start}
                                        </span>
                                    )}

                                </td>
                                <td className="text-center p-4">
                                    {isEditing == data?._id ? (
                                        <input className="w-[89px] max-w-2xl"
                                            type="text"
                                            value={startEnd || data?.validity?.end}
                                            onChange={(e) => handleInputChange(e, 'end')}
                                            // onBlur={handleSaveClick} // Save when clicking outside the input
                                            autoFocus
                                        />
                                    ) : (
                                        <span>
                                            {data?.validity?.end}
                                        </span>
                                    )}
                                </td>
                                <td className="text-center p-4">{data?.category}</td>
                                <td onClick={() => handleStatus('active', data?._id)} className={`  text-center rounded-md ${data?.status == 'active' ? '  hidden' : 'text-green-400'}  cursor-pointer hover:bg-slate-300 `}>
                                    ACTIVE</td>
                                <td onClick={() => handleStatus('deactive', data?._id)} className={`text-center rounded-md ${data?.status == 'deactive' ? 'hidden ' : 'text-red-400'} cursor-pointer hover:bg-slate-300`}>
                                    INACTIVE</td>
                                {/* it will be change by status also color and also to change this icon  */}



                                <td className="p-4 ">
                                    <IoMdMore onMouseOver={() => setDot(data?._id)} color=" gray" size={22} />

                                    {dot == data?._id ?
                                        <div onMouseLeave={() => setDot('')} className='border   text-center space-y-2 px-4  rounded-md absolute  top  bg-white'>

                                            <p onClick={() => handleEditClick(data?._id)} className='p-3 mt-2 text-center cursor-pointer text-green-500 rounded-md hover:bg-slate-300'><FaEdit size={22} />
                                            </p>
                                            <p onClick={() => handleDelete(data?._id)} className='p-3  cursor-pointer text-red-500 rounded-md hover:bg-slate-300' ><MdDelete size={25} /></p>
                                        </div> : ' '
                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='text-right mx-1'>
                    {
                        isEditing ? <button onClick={handleSaveUpdate} className='bg-green-400 hover:scale-[1.01] hover:border-green-400 text-slate-50 font-medium mt-3  font-lobster p-3 border '>SAVE</button> : ''
                    }
                </div>
            </div>
            {
                loading ? <CouponSpinner></CouponSpinner> : ''
            }
        </div>


    );
};

export default CouponManagement;
