// pages/success.js
'use client'
import CartContext from '@/app/Context/CartContext';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { FcOk } from "react-icons/fc";

export default function PaymentSuccess() {

  const userData=useSession()?.data?.user?.email;
  // console.log(userData);
  

  const { transactionId } = useParams()
  // console.log(transactionId);
  const route = useRouter()
  const { setCart, cart } = useContext(CartContext);



  const [id, setId] = useState()
  useEffect(() => {
    axios.get(`http://localhost:5000/order/${transactionId}`)
      .then(response => {
        setId(response.data.validId)
      }, [transactionId])
  })
  const handleGotoDashBoard = () => {
    axios.post('http://localhost:5000/validate', {
      transactionId, id,userData
    })
      .then(response => {
        console.log(response.data);
        if (response.data.status == 'completed') {
          localStorage.removeItem('cart')

          route.replace('/')
          
          setTimeout(() => {
            setCart('')
          }, 1000);

        }

      })


  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Payment Success</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="  rounded-lg p-8 max-w-lg w-full  text-center">
        <div className="text-green-500 w-full text-center">
          <FcOk className=' w-full' size={70} />
        </div>
        <h1 className="text-2xl font-semibold mt-4">Payment Successful</h1>
        <p className="text-gray-600 mt-2">{transactionId}</p>
        <p className="text-gray-600 mt-2">Thank you for your payment! We have received your payment, and your order is being processed.</p>
        <div className="mt-6">
          <p onClick={handleGotoDashBoard} className="bg-green-500 cursor-pointer text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Go to Dashboard
          </p >
        </div>
      </div>
    </div>
  );
}
