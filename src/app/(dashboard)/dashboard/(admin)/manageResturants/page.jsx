'use client';
import React, { useEffect, useState } from 'react';

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, onClose, onConfirm, restaurantName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
        <p>Are you sure you want to block/unblock {restaurantName}?</p>
        <div className="flex justify-end mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={onConfirm}>
            Confirm
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Report Modal Component
const ReportModal = ({ isOpen, onClose, restaurant }) => {
  if (!isOpen || !restaurant) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Report for {restaurant.name}</h2>
        <p><strong>Location:</strong> {restaurant.location}</p>
        <p><strong>Opens At:</strong> {restaurant.opensAt}</p>
        <p><strong>Status:</strong> {restaurant.isBlocked ? 'Blocked' : 'Active'}</p>
        <p><strong>Report Details:</strong></p>
        <ul>
          <li>Overall Rating: ⭐⭐⭐⭐</li>
          <li>Total Customers: 150</li>
          <li>Total Orders: 200</li>
          <li>Last Inspection: 2024-09-01</li>
        </ul>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ManageRestaurants = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [actionRestaurant, setActionRestaurant] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/allrestrurent');
      const jsonData = await res.json();
      setData(jsonData.result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleStatus = async (restaurant) => {
    setActionRestaurant(restaurant);
    setIsConfirmationOpen(true);
  };

console.log(data);
  const updateData = async (id, status) => {
    try {
      const resp = await fetch(`/api/updateRestaurant/${id}?status=${status}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
    
  
     
    } catch (error) {
      console.log('Error updating restaurant status:', error);
    }
  };
  
  const confirmToggleStatus = async () => {
    try {
      let status;
      // Determine the new status based on the current status
      if (actionRestaurant?.status === 'active') {
        status = 'block';
      } else if (actionRestaurant?.status === 'block') {
        status = 'active';
      }
  
      // Call the update function
      await updateData(actionRestaurant._id, status);
  
      // Close the confirmation modal after the action is completed
      setIsConfirmationOpen(false);
  
      // Optionally, you can refetch data or manually update the UI
      fetchData();
  
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  

  const handleOpenReport = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRestaurant(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Restaurants</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          {/* Head */}
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Location</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Opens At</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          {/* Body */}
          
          <tbody>
  {data && data.length > 0 ? (
    data.map((restaurant) => (
      <tr key={restaurant._id} className="border-b hover:bg-gray-50">
        <td className="py-4 px-4 text-sm text-gray-700">{restaurant.name}</td>
        <td className="py-4 px-4 text-sm text-gray-700">{restaurant.location}</td>
        <td className="py-4 px-4 text-sm text-gray-700">{restaurant.opensAt}</td>
        <td className="py-4 px-4 text-sm text-gray-700">
          <span className={`inline-flex text-xs font-semibold rounded-full px-2.5 py-0.5 ${restaurant.status === "block" ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
            {restaurant.status === 'block' ? 'Blocked' : 'Active'}
          </span>
        </td>
        <td className="py-4 px-4 text-sm">
          <button
            className={`py-2 px-4 rounded-lg text-white ${restaurant.status === 'block' ? 'bg-green-500 hover:bg-green-400' : 'bg-red-500 hover:bg-red-400'}`}
            onClick={() => handleToggleStatus(restaurant)}
          >
            {restaurant.status === 'block' ? 'Unblock' : 'Block'}
          </button>
          <button
            className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400"
            onClick={() => handleOpenReport(restaurant)}
          >
            Details
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="py-4 text-center text-gray-700">Loading...</td>
    </tr>
  )}
</tbody>


        </table>
      </div>
      <ReportModal isOpen={isModalOpen} onClose={handleCloseModal} restaurant={selectedRestaurant} />
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={confirmToggleStatus}
        restaurantName={actionRestaurant ? actionRestaurant.name : ''}
      />
    </div>
  );
};

export default ManageRestaurants;
