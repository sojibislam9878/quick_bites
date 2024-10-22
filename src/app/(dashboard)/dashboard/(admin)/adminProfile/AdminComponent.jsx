'use client'

import EarningChart from '@/app/(dashboard)/component/EarningChart';
import UserChart from '@/app/(dashboard)/component/UserChart';
import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import ProfileAdmin from './profileAdmin';
import PaymentChart from '@/app/(dashboard)/component/PaymentChart';

const AdminComponent = () => {

  return (
    <div> <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

    <div className="bg-white shadow-lg rounded-lg ">
      {/* Replace with ApexChart */}
      <h3 className="text-lg font-bold text-gray-700 mb-4 text-center my-3">Your Profile</h3>
      <div className=" flex items-center justify-center rounded-lg"><ProfileAdmin></ProfileAdmin></div>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Replace with ApexChart */}
      <h3 className="text-lg font-bold text-gray-700 mb-4">User Overview</h3>
      <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg"><UserChart></UserChart></div>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Replace with ApexChart */}
      <h3 className="text-lg font-bold text-gray-700 mb-4">Earnings Overview</h3>
      <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg"><PaymentChart></PaymentChart></div>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Replace with ApexChart */}
      <h3 className="text-lg font-bold text-gray-700 mb-4">DeleveryMan Overview</h3>
      <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg"><EarningChart></EarningChart></div>
    </div>

  </section></div>
  )
}

export default AdminComponent