'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageOwner = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/saveResturant`);
      const data = await res.json();
      setRestaurants(data?.restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
   
    fetchData();
  }, []);

  const handleToggleStatus = async (restaurant) => {
    const confirmation = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to update the status for ${restaurant.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(`/api/saveResturant`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug: restaurant.slug }),
        });

        const result = await response.json();
        if (response.ok) {

            fetchData()
          Swal.fire(
            'Updated!',
            `${restaurant.name}'s status has been updated.`,
            'success'
          );
          // Refresh restaurant list after update
          setRestaurants((prev) =>
            prev.map((rest) =>
              rest.slug === restaurant.slug ? { ...rest, status: 'active' } : rest
            )
          );
        } else {
          Swal.fire('Error', result.statusText, 'error');
        }
      } catch (error) {
        console.error('Error updating status:', error);
        Swal.fire('Error', 'Something went wrong!', 'error');
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Owner Request</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Location</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Opens At</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => (
                <tr key={restaurant._id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-700">{restaurant.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{restaurant.location}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{restaurant.opensAt}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">
                    <span
                      className={`inline-flex text-xs font-semibold rounded-full px-2.5 py-0.5 ${
                        restaurant.status === 'block' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {restaurant.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    >
                      <Link href={`/dashboard/manageResturants/${restaurant?.slug}`}> View Details</Link>
                    </button>
                    {restaurant.status === 'pending' && (
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded"
                        onClick={() => handleToggleStatus(restaurant)}
                      >
                        Add Your Website
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-700">No restaurants found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOwner;
