'use client'
import axios from 'axios';


import React, { useState } from 'react';

 

const PaymentPage = () => {


    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step );
    const prevStep = () => setStep(step );
    const handlePayment =async () => {
        // try {
        //     const response = await axios.post('http://localhost:3000/api/checkout', {
        //         amount: 1000, // Amount in BDT
        //         customerName: 'Safwan',
        //         customerEmail: 'safwan@example.com',
        //         customerPhone: '017xxxxxxxx',
        //         customerAddress: 'Dhaka',
        //     });

        //     if (response.data?.url) {
        //         window.location.href = response.data.url; // Redirect to SSLCommerz payment page
        //     } else {
        //         console.error('Payment initiation failed:', response);
        //     }
        // } catch (error) {
        //     console.error('Error during payment request:', error);
        // }
        fetch(`${process.env.NEXT_PUBLIC_BASEURL}api/sslcommerz/init`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: 1000,  // Payment amount
              currency: 'BDT',  // Default is BDT if not provided
            }),
          })
            .then(response => response.json())
            .then(data => {
              console.log('Payment URL:', data);
              window.location.href = data.payment_url; // Redirect user to payment gateway
            })
            .catch(error => {
              console.error('Error:', error);
            });
          
        };


    // };

    return (
        // pages/checkout.js


        <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary Section */}
          <div className="lg:col-span-1 border p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex justify-between">
                <span>Women's Basic Tee</span>
                <span>$32.00</span>
              </li>
              <li className="flex justify-between">
                <span>Women's Artwork Tee</span>
                <span>$36.00</span>
              </li>
              <li className="flex justify-between">
                <span>Men's Artwork Tee</span>
                <span>$36.00</span>
              </li>
            </ul>
  
            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$104.00</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>$8.32</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$14.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$126.32</span>
              </div>
            </div>
          </div>
  
          {/* Checkout Form Section */}
          <div className="lg:col-span-2 border p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <form className="space-y-6">
              {/* Contact Information Fields */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full mt-2 p-2 border rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium">Phone Number</label>
                    <input
                      type="text"
                      className="w-full mt-2 p-2 border rounded-md"
                      placeholder="+1 123-456-7890"
                    />
                  </div>
  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      I agree to the terms and conditions.
                    </label>
                  </div>
  
                  <div className="flex justify-between">
                    {/* Disabled Back Button on Step 1 */}
                    <button
                      type="button"
                      className="w-24 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
                      disabled
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="w-24 py-2 bg-black text-white rounded-md"
                      onClick={handlePayment}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
  
              {/* Step 2: Payment Information */}
              {step === 2 && (
                <>
                  <h2 className="text-xl font-semibold">Payment Details</h2>
                  {/* Add payment fields here */}
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="w-24 py-2 bg-gray-700 text-white rounded-md"
                      onClick={prevStep}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="w-24 py-2 bg-black text-white rounded-md"
                      onClick={handlePayment}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}
  
              {/* Add more steps as needed */}
            </form>
          </div>
        </div>
      </div>
  );
}


export default PaymentPage;
