'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ConfirmationModal = ({ isOpen, onClose, restaurantName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
        <p>Are you sure you want to block/unblock {restaurantName}?</p>
        <div className="flex justify-end mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [restaurants, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`uick-bites-tau.vercel.app/api/allrestrurent`);
        const data = await res.json();
        setData(data?.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleOpenReport = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRestaurant(null);
  };

  const handleToggleStatus = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const filteredData = restaurants
    .filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((restaurant) => (statusFilter ? restaurant.status === statusFilter : true));

  // CSV Export Functionality
  const exportToCSV = () => {
    const csvRows = [];
    // Define the header row
    const headers = ['Name', 'Location', 'Opens At', 'Status'];
    csvRows.push(headers.join(','));

    // Add restaurant data
    filteredData.forEach((restaurant) => {
      const row = [
        restaurant.name,
        restaurant.location,
        restaurant.opensAt,
        restaurant.status === 'block' ? 'Blocked' : 'Active',
      ];
      csvRows.push(row.join(','));
    });

    // Create a Blob from the CSV data
    const csvData = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    const url = URL.createObjectURL(csvData);
    link.setAttribute('href', url);
    link.setAttribute('download', 'restaurants.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Restaurants</h1>

      {/* Search & Filters */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="block">Blocked</option>
        </select>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={exportToCSV}>
          Export CSV
        </button>
      </div>

      {/* Table */}
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
            {filteredData.length > 0 ? (
              filteredData.map((restaurant) => (
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
                      {restaurant.status === 'block' ? 'Blocked' : 'Active'}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      
                    >
                     <Link  href={`/dashboard/manageResturants/${restaurant?.slug}`}> View Details</Link>
                    </button>
                    <button
                      className="bg-red-500 text-white w-24 px-3 py-1 rounded"
                      onClick={() => handleToggleStatus(restaurant)}
                    >
                      {restaurant.status === 'active' ? 'Block' : 'Unblock'}
                    </button>
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

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleCloseConfirmation}
        restaurantName={selectedRestaurant ? selectedRestaurant.name : ''}
      />

      {/* Report Modal */}
      <ReportModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        restaurant={selectedRestaurant}
      />
    </div>
  );
};

export default ManageRestaurants;
