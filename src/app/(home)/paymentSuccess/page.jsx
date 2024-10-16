// pages/success.js
import Head from 'next/head';
import Link from 'next/link';
import { FcOk } from "react-icons/fc";

export default function PaymentSuccess() {
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
        <p className="text-gray-600 mt-2">Thank you for your payment! We have received your payment, and your order is being processed.</p>
        <div className="mt-6">
          <Link href={'/'} className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Go to Dashboard
          </Link >
        </div>
      </div>
    </div>
  );
}
