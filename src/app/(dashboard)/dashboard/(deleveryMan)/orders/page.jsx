'use client'
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchFoodDelivery = async () => {
    try {
      const response = await fetch('/api/foodOrder');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setOrders(data?.result); // Assuming 'result' is an array of orders
    } catch (error) {
      console.error("Error fetching food orders:", error);
    }
  };

  useEffect(() => {
    fetchFoodDelivery();
  }, []);
console.log(selectedOrder,'orders');
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-rose-500 text-white">
            <tr>
              <th className="py-2 px-4">Customer Name</th>
              <th className="py-2 px-4">Order Time</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{order?.
customer_total_foodItems?.name}</td>
                <td className="py-2 px-4">{order.customer_oder_time}</td>
                <td className="py-2 px-4">{order.customer_address}</td>
                <td className="py-2 px-4">{order.customer_phone}</td>
                <td className="py-2 px-4">
                  <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded" 
                    onClick={() => setSelectedOrder(order)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for detailed view */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Order Details for {selectedOrder.customer_total_foodItems.name}</h2>
            <p><strong>Order Time:</strong> 65</p>
            <p><strong>Address:</strong> adress</p>
            <p><strong>Phone:</strong> 455</p>
            {/* <p><strong>Food Items:</strong> {selectedOrder.foodItems.foodName} ({selectedOrder.foodItems.category})</p> */}
            <p><strong>Total Amount:</strong> $89</p>
            <p><strong>Food Status:</strong> 4</p>
            <button 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded" 
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
