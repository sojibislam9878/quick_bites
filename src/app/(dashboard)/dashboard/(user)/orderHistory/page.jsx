'use client';
// pages/transaction.js

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import TransationSpinner from '../transaction/TransationSpinner';
import TransactionDetail from '@/app/(dashboard)/component/TransactionDetail';

const OrderHistory = () => {
  const session = useSession();
  const email = session?.data?.user?.email;

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
   <div className="max-w-2xl mx-auto text-center">
<h3 className="text-gray-600 text-3xl font-semibold sm:text-4xl">
    All Order  History
</h3>

</div>
        
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Food Img</th>
                <th className="py-3 px-6">Food Items</th>
                <th className="py-3 px-6">price</th>
                <th className="py-3 px-6">Brand</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6"> Quantity</th>
                <th className="py-3 px-6"> Amount</th>
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
           
                        <p >{item?.product_data?.foodItems[0]?.category}</p>
               
                    </ul>
                  </td>
                  <td className="px-6 py-4">{item?.product_data?.foodItems[0]?.price}$</td>
                  <td className="px-6 py-4">{item?.product_data?.foodItems[0]?.brand}</td>
                  <td className="px-6 py-4">{item?.product_data?.foodItems[0]?.foodName}</td>
                  <td className="px-6 py-4">{item?.product_data?.foodItems[0]?.quantity}</td>
        <td className="px-6 py-4">{item.total_amount}$</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    }
    
    
    </div>


  )
}

export default OrderHistory