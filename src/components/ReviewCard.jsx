import Image from "next/image";
import React from "react";

export const ReviewCard = ({ userName, reviewText, rating, date }) => {
  return (
    <div className=" grid lg:grid-cols-3 gap-4 ">
      
      <div className="bg-white hover:shadow  text-white  border border-orange-500 shadow-lg rounded-lg p-4 max-w-sm mx-auto transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-500">
        <div className="flex items-center space-x-4">
          <div className=" w-12 flex-shrink-0">
<img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?" className="" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-800">{reviewText}</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 transition-transform duration-300 ${
                  i < rating ? "text-yellow-500 scale-110" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.18-.53L12 2 8.18 8.71 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </span>
          <span className="text-sm text-gray-600">({rating}/5)</span>
        </div>
      </div>
      <div className="bg-white hover:shadow  text-white  border border-orange-500 shadow-lg rounded-lg p-4 max-w-sm mx-auto transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-500">
        <div className="flex items-center space-x-4">
        <div className=" w-12 flex-shrink-0">
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?" className="" alt="" />
                  </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-800">{reviewText}</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 transition-transform duration-300 ${
                  i < rating ? "text-yellow-500 scale-110" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.18-.53L12 2 8.18 8.71 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </span>
          <span className="text-sm text-gray-600">({rating}/5)</span>
        </div>
      </div>
      <div className="bg-white hover:shadow  text-white  border border-orange-500 shadow-lg rounded-lg p-4 max-w-sm mx-auto transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-500">
        <div className="flex items-center space-x-4">
        <div className=" w-12 flex-shrink-0">
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?" className="" alt="" />
                  </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-800">{reviewText}</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 transition-transform duration-300 ${
                  i < rating ? "text-yellow-500 scale-110" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.18-.53L12 2 8.18 8.71 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </span>
          <span className="text-sm text-gray-600">({rating}/5)</span>
        </div>
      </div>
    </div>
  );
};
