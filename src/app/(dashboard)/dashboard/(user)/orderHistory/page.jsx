'use client';
// pages/transaction.js


import axios from 'axios';
import { useSession } from 'next-auth/react';

const OrderHistory = ({individualTran}) => {
  const session = useSession();
  const email = session?.data?.user?.email;
  const indOrderHisotry = individualTran?.result?.filter((tran) => tran.cus_email === email);

  
  const orders = [
    {
      orderId: "001",
      foodItems: [
        { name: "Margherita Pizza", quantity: 2 },
        { name: "Caesar Salad", quantity: 1 },
      ],
      totalAmount: 25,
      status: "Delivered",
      orderDate: "2024-10-01T12:00:00Z",
    },
    {
      orderId: "002",
      foodItems: [
        { name: "Spaghetti Bolognese", quantity: 1 },
        { name: "Garlic Bread", quantity: 1 },
      ],
      totalAmount: 15,
      status: "Pending",
      orderDate: "2024-10-02T12:00:00Z",
    },
  ];


  // Fetch transactions using react-query

  // Client-side filtering (if needed)
  // const individualTran = data?.result?.filter((tran) => tran.cus_email === email);
  return (
    <div className="w-full bg-gray-100 py-8">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 bg-white rounded-lg shadow-md">
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Order History</h3>
      <p className="text-gray-600 mt-2">Here are your past orders.</p>
      
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Order Number</th>
              <th className="py-3 px-6">Food Items</th>
              <th className="py-3 px-6">Total Amount</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Order Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {orders?.map((order) => (
              <tr key={order.orderId}>
                <td className="px-6 py-4">{order._id}</td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside">
         {/*  {order.foodItems.map((item, idx) => ( */}
                      <li >{order?.name}</li>
                {/*   ))}   */}
                  </ul>
                </td>
                <td className="px-6 py-4">{order?.product_data?.amount} $</td>
                <td className="px-6 py-4">{order?.statusstatus}</td>
                <td className="px-6 py-4">{new Date(order.orderDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default OrderHistory