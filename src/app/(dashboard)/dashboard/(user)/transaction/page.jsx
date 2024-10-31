'use client';
// pages/transaction.js

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TransationSpinner from './TransationSpinner';
import TransactionDetail from '@/app/(dashboard)/component/TransactionDetail';
import { useSession } from 'next-auth/react';

const Transaction = () => {
    const session = useSession();
    const email = session?.data?.user?.email;
  console.log(email)
    // Fetch transactions using react-query
    const { refetch, isLoading, data } = useQuery({
      queryKey: ['transaction', email],
      queryFn: async () => {
        if (!email) return []; // Early return if email is undefined
        const res = await axios.post(`https://quick-bites-tau.vercel.app/api/transactions`,{email});
        console.log(res?.data);
        return res.data;
      },
      enabled: !!email, // Only fetch if email is present
    });
  
  return (


    <div>
    {
    
      isLoading ?  <TransationSpinner/>:     <div className="w-full bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 bg-white rounded-lg shadow-md">
      <TransactionDetail></TransactionDetail>
        
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Order Number</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Total Amount</th>
                <th className="py-3 px-6">Items</th>
                <th className="py-3 px-6">Transaction Id</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
         
            {data?.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4">   <img
                  src={item?.product_data?.foodItems[0]?.image || "default-image-url.jpg"}
                  className="w-10 h-10 rounded-full"
                  alt="User"
                /></td>
                  <td className="px-6 py-4">
                    <ul className="list-disc list-inside">
           {/*  {order.foodItems.map((item, idx) => ( */}
                        <li >{item.product_data.email}</li>
                  {/*   ))}   */}
                    </ul>
                  </td>
                  <td className="px-6 py-4">{item.total_amount}$</td>
                  <td className="px-6 py-4">{item.product_category}</td>
                  <td className="px-6 py-4">{item.tran_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    }
    
    
    </div>


  )};


export default Transaction;
