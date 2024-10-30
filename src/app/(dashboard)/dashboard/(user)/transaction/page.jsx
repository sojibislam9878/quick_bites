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
  
    // Client-side filtering (if needed)
    // const individualTran = data?.result?.filter((tran) => tran.cus_email === email);
  return (
    <div className="min-h-screen bg-gray-100 py-8">









    {isLoading ? (
      <TransationSpinner />
    ) : (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 w-full">
        <TransactionDetail data={data} />
        <div className="mt-12 shadow-lg border rounded-lg overflow-x-auto bg-white">
          <table className="min-w-full table-auto text-sm text-left bg-gray-50"> {/* Full width and background color */}
            <thead className="bg-gray-200 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Total Amount</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Transaction Id</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
            
                {data?.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100 transition duration-200">
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img
                      src={item?.product_data?.foodItems[0]?.image || "default-image-url.jpg"}
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <div>
                      <span className="block text-gray-700 text-sm font-medium">{item.product_data.name}</span>
                      <span className="block text-gray-500 text-xs">{item.product_data.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.total_amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.product_category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.tran_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}










    
  </div>
  
  );
};

export default Transaction;
