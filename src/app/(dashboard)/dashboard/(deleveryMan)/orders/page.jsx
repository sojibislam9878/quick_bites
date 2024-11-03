'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function DeliveryPage() {
    const [orders, setOrders] = useState([]);
    const session = useSession()?.data?.user?.email;

    useEffect(() => {
        socket.on('new-order', (order) => {
          console.log(order,'here is the orders ');
          
            setOrders((prevOrders) => [...prevOrders, order]);
        });

        socket.on('update-orders', (updatedOrders) => {
            setOrders(updatedOrders);
        });

        return () => {
            socket.off('new-order');
            socket.off('update-orders');
        };
    }, []);

    console.log(orders);
    

    const acceptOrder = async (orderId) => {
        const response = await fetch('http://localhost:4000/accept-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId, deliveryPersonId: session }),
        });

        const result = await response.json();
        if (result.message === 'Order accepted') {
            alert('Order accepted');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Delivery Dashboard</h1>
                
                {orders.length === 0 ? (
                    <p className="text-center text-gray-500">No orders available</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orders.map((order) => (
                            <div
                                key={order.orderId}
                                className="flex flex-col p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-gray-50"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={order?.customer_image}// Replace with actual user image source
                                        alt="User"
                                        className="w-14 h-14 rounded-full border-2 border-gray-300 mr-4"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">{order.customer_total_foodItems.name}</p>
                                        <p className="text-sm text-gray-500">{order.customer_address}</p>
                                    </div>
                                </div>
                                
                                <div className="text-sm text-gray-700 space-y-1">
                                    <p><span className="font-semibold">Phone:</span> {order.customer_phone}</p>
                                    <p><span className="font-semibold">Order Time:</span> {order.customer_oder_time}</p>
                                    <p><span className="font-semibold">Status:</span> {order.food_status}</p>
                                    <p><span className="font-semibold">Total Items:</span> {order.customer_total_foodItems?.foodItems?.length||1}</p>
                                </div>
                                
                                <button
                                    onClick={() => acceptOrder(order.orderId)}
                                    className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 w-full"
                                >
                                    Accept Order
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
