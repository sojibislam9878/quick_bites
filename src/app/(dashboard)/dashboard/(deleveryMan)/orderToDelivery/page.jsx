'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const page = () => {
    const session = useSession()?.data?.user?.email

    const [orderData, setOrderData] = useState(null);

   useEffect(() => {
console.log(session);

    
if(session){
    axios.post(`http://localhost:3000/api/orderToDelivery`,{session})
    .then((response) => {
        console.log(response.data.data);
        setOrderData(response?.data?.data);
       // Set the state with the response data
    })
}

   },[session])

    return (
        <div className="min-h-screen bg-gray-50 p-6  ">
        {orderData ? (
            // <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            //     <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            //         Order Details for Delivery
            //     </h2>
                
            //     <div className="space-y-4">
            //         <div className="flex flex-col md:flex-row justify-between">
            //             <div>
            //                 <p className="text-sm font-medium text-gray-500">Customer Name</p>
            //                 <p className="text-lg font-semibold text-gray-700">{orderData?.customer_total_foodItems?.name}</p>
            //             </div>
            //             <div>
            //                 <p className="text-sm font-medium text-gray-500">Customer Phone</p>
            //                 <p className="text-lg font-semibold text-gray-700">{orderData.customer_phone}</p>
            //             </div>
            //         </div>
                    
            //         <div className="flex flex-col md:flex-row justify-between">
            //             <div>
            //                 <p className="text-sm font-medium text-gray-500">Customer Address</p>
            //                 <p className="text-lg font-semibold text-gray-700">{orderData.customer_address}</p>
            //             </div>
            //             <div>
            //                 <p className="text-sm font-medium text-gray-500">Order Time</p>
            //                 <p className="text-lg font-semibold text-gray-700">{orderData.customer_oder_time}</p>
            //             </div>
            //         </div>

            //         <div className="flex flex-col md:flex-row justify-between">
            //             <div>
            //                 <p className="text-sm font-medium text-gray-500">Total Amount</p>
            //                 <p className="text-lg font-semibold text-green-600">${orderData.customer_total_foodItems?.amount}</p>
            //             </div>
            //             <div>
            //                 <p className="text-sm font-medium text-gray-500">Food Status</p>
            //                 <p className={`text-lg font-semibold ${orderData.food_status === "Accepted" ? "text-green-500" : "text-red-500"}`}>
            //                     {orderData.food_status}
            //                 </p>
            //             </div>
            //         </div>
            //     </div>

            //     <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4 border-b pb-2">
            //         Food Items
            //     </h3>
                
            //     {orderData.map((item, index) => (
            //         <div key={index} className="flex flex-col md:flex-row items-start md:items-center mb-6 p-4 bg-gray-100 rounded-lg">
            //             <img src={item.image} alt={item.foodName} className="w-24 h-24 rounded-lg object-cover mb-4 md:mb-0 md:mr-4" />
            //             <div className="flex-grow">
            //                 <p className="text-lg font-semibold text-gray-700">{item.foodName}</p>
            //                 <p className="text-sm font-medium text-gray-500">Brand: {item.brand}</p>
            //                 <p className="text-sm font-medium text-gray-500">Category: {item.category}</p>
            //                 <p className="text-sm font-medium text-gray-500">Quantity: {item.quantity}</p>
            //                 <p className="text-sm font-medium text-gray-700 font-semibold">Price: ${item.price}</p>
            //             </div>
            //         </div>
            //     ))}
            // </div>

            <div className=''>
                {orderData?.map((order) => (
                            <div
                                key={order.orderId}
                                className="flex flex-col mb-3 font-lobster p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-gray-50"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={order?.customer_image}// Replace with actual user image source
                                        alt="User"
                                        className="w-14 h-14 rounded-full border-2 border-gray-300 mr-4"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold font-poppins text-gray-800">{order.customer_total_foodItems.name}</p>
                                        <p className="text-sm text-gray-500">{order.customer_address}</p>
                                    </div>
                                </div>
                                
                                <div className="text-sm text-gray-700 space-y-1">
                                    <p><span className="font-semibold">Phone:</span> {order.customer_phone}</p>
                                    <p><span className="font-semibold">Order Time:</span> {order.customer_oder_time}</p>
                                    <p><span className="font-semibold">Status:</span> {order.food_status}</p>
                                    <p><span className="font-semibold">Total Items:</span> {order.customer_total_foodItems?.foodItems?.length||1}</p>
                                </div>
                                
                               
                            </div>
                        ))}

            </div>
        ) : (
            <div className="flex justify-center items-center h-full">
                <p className="text-lg text-gray-500">Loading order details...</p>
            </div>
        )}
    </div>
    );
};

export default page;