"use Client";
import React from "react";
import AdminProfile from "./(admin)/adminProfile/page";
import DeleveryProfile from "./(deleveryMan)/deleveryProfile/page";
import OwnerProfile from "./(owner)/ownerProfile/page";
import UserProfile from "./(user)/userProfile/page";
import { useSession } from "next-auth/react";

import MyApexChart from "../component/PaymentChart";
import UserChart from "../component/UserChart";
import EarningChart from "../component/EarningChart";
import Stats from "../component/Stats";

export const metadata = {
  title: "Dashboard-UserProfile",
  description: "Generated by Next.js",
};
const DashboardPage = () => {
  const data = {
    name: "John do",
    email: "john@example.com",
    image:
      "https://thumbs.dreamstime.com/b/delivery-boy-ride-scooter-motorcycle-servic-service-order-worldwide-shipping-fast-free-transport-75096257.jpg",
  };

  const role = "admin";

  return (

    <div>  
    <Stats />
  
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-6 lg:p-10 bg-gray-50">
  
      {/* Profile Page */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center h-64 transition-transform duration-300 transform hover:scale-105">
        {role === "user" && <UserProfile />}
        {role === "admin" && <AdminProfile />}
        {role === "deleveryMan" && <DeleveryProfile />}
        {role === "owner" && <OwnerProfile />}
      </div>
    
      {/* User Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center h-64 transition-transform duration-300 transform hover:scale-105">
        <UserChart />
      </div>
    
      {/* Payment */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center h-64 transition-transform duration-300 transform hover:scale-105">
        <MyApexChart />
      </div>
    
      {/* Earning Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center h-64 transition-transform duration-300 transform hover:scale-105">
        <EarningChart />
      </div>
    
    </div>
  </div>
  
  
  );
};

export default DashboardPage;
