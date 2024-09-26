'use client';
import React, { useEffect, useState } from 'react';
import SingleRestruent from '@/app/component/allrestrurent/SingleRestruent';
import { FaStar, FaFilter } from 'react-icons/fa';

const Restrurentpage = () => {
  const [data, setData] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false); // For mobile filter toggle

  const fetchData = async () => {
    try {
      const res = await fetch('/api/allrestrurent');
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const allRestrurent = data?.result;

  if (!allRestrurent) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (allRestrurent.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">No restaurants available.</p>
      </div>
    );
  }

  return (
    <div className="grid pt-24 grid-cols-1 md:grid-cols-4 gap-6 px-6 py-10 bg-gray-100 min-h-screen">
      {/* Mobile filter button */}
      <button
        className="block md:hidden fixed top-20 left-5 bg-red-600 text-white py-2 px-4 rounded-full z-50"
        onClick={() => setFilterOpen(!filterOpen)}
      >
        <FaFilter />
      </button>

      {/* Filter Section */}
      <div
        className={`col-span-1 bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ${
          filterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } fixed md:relative top-0 md:top-auto left-0 md:left-auto z-40 md:z-10 h-screen md:h-auto md:block`}
      >
        <h1 className="text-2xl font-semibold mb-4 border-b pb-2">Filter Restaurants</h1>

        {/* Shop by Categories */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <input type="checkbox" id={category.id} className="accent-red-600" />
                <label htmlFor={category.id} className="ml-2 text-gray-700">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Location</h2>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location.id} className="flex items-center">
                <input type="checkbox" id={location.id} className="accent-red-600" />
                <label htmlFor={location.id} className="ml-2 text-gray-700">
                  {location.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Distance Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Distance</h2>
          <div className="space-y-2">
            {[1, 2, 3].map((km) => (
              <div key={km} className="flex items-center">
                <input type="checkbox" id={`distance${km}`} className="accent-red-600" />
                <label htmlFor={`distance${km}`} className="ml-2 text-gray-700">
                  {km} km
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Rating</h2>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center">
                <input type="checkbox" id={`rating${stars}`} className="accent-red-600" />
                <label htmlFor={`rating${stars}`} className="ml-2 text-gray-700 flex items-center">
                  {Array.from({ length: stars }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Type */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Restaurant Type</h2>
          <div className="space-y-2">
            {typesOfRestaurants.map((type) => (
              <div key={type.id} className="flex items-center">
                <input type="checkbox" id={type.id} className="accent-red-600" />
                <label htmlFor={type.id} className="ml-2 text-gray-700">
                  {type.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Takeaway or Home Delivery */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Service</h2>
          <div className="space-y-2">
            {services.map((service) => (
              <div key={service.id} className="flex items-center">
                <input type="checkbox" id={service.id} className="accent-red-600" />
                <label htmlFor={service.id} className="ml-2 text-gray-700">
                  {service.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Sort by */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Sort</h2>
          <div className="space-y-2">
            {sort.map((filter) => (
              <div key={filter.id} className="flex items-center">
                <input type="checkbox" id={filter.id} className="accent-red-600" />
                <label htmlFor={filter.id} className="ml-2 text-gray-700">
                  {filter.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Find Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition-all duration-300">
            Find Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Display Section */}
      <div className="col-span-3 space-y-14">
        {allRestrurent.map((restaurant) => (
          <SingleRestruent key={restaurant?._id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

// Filter Data
const categories = [
  { id: 'fastFood', name: 'Fast Food' },
  { id: 'traditional', name: 'Traditional' },
  { id: 'continental', name: 'Continental' },
  { id: 'dessert', name: 'Dessert' },
];

const locations = [
  { id: 'dhaka', name: 'Dhaka' },
  { id: 'mirpur', name: 'Mirpur' },
  { id: 'uttara', name: 'Uttara' },
  { id: 'gulshan', name: 'Gulshan' },
];

const typesOfRestaurants = [
  { id: 'dineIn', name: 'Dine In' },
  { id: 'takeAway', name: 'Take Away' },
  { id: 'homeDelivery', name: 'Home Delivery' },
];

const services = [
  { id: 'takeaway', name: 'Takeaway' },
  { id: 'homeDelivery', name: 'Home Delivery' },
];

const sort = [
  { id: 'bestSeller', name: 'Best Seller' },
  { id: 'newReleased', name: 'Newly Opened' },
  { id: 'priceLowToHigh', name: 'Price - Low to High' },
  { id: 'priceHighToLow', name: 'Price - High to Low' },
];

export default Restrurentpage;
