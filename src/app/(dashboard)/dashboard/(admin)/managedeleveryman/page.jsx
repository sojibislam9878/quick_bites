'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Page = () => {
    const [deliveryMen, setDeliveryMen] = useState([]);
    const [selectedTab, setSelectedTab] = useState("all");
    const [selectedDeliveryMan, setSelectedDeliveryMan] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

<<<<<<< HEAD
    queryFn: async () => {
      const res = await axios.get(`https://quick-bites-tau.vercel.app/api/allDeleveryMan`);
      return res?.data;
    },
  });
=======
    useEffect(() => {
        const fetchDeliveryMen = async () => {
            setLoading(true);
            const response = await fetch(`/api/allUsers?role=Delivery Man&status=${selectedTab}`);
            const data = await response.json();
            setDeliveryMen(data.result);
            setLoading(false);
        };
>>>>>>> b528d313de78f13b90b1c6bf19dfc5474269c1a7

        fetchDeliveryMen();
    }, [selectedTab]);

    const handleViewDetails = (man) => {
        setSelectedDeliveryMan(man);
        setIsModalOpen(true);
    };

    const handleStatusUpdate = async (email, status) => {
        await fetch('/api/allUsers', {
            method: 'PATCH',
            body: JSON.stringify({ email, status }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setIsModalOpen(false);
        Swal.fire('Updated!', `Delivery man status changed to ${status}.`, 'success');
        
        // Refresh data after updating status
        const response = await fetch(`/api/allUsers?role=Delivery Man&status=${selectedTab}`);
        const data = await response.json();
        setDeliveryMen(data.result);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDeliveryMan(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Delivery Men Management</h1>

            {/* Tabs */}
            <div className="flex border-b mb-4">
                {['all', 'pending', 'blocked'].map(tab => (
                    <button
                        key={tab}
                        className={`py-2 px-4 ${selectedTab === tab ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab === 'all' ? 'All Delivery Men' : `${tab.charAt(0).toUpperCase() + tab.slice(1)} Delivery Men`}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                            <th className="py-3 px-4 text-left">Name</th>
                            {selectedTab === "pending" && <th className="py-3 px-4 text-left">Resume</th>}
                            <th className="py-3 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={3} className="py-3 px-4 text-center">
                                    Loading...
                                </td>
                            </tr>
                        ) : (
                            deliveryMen.map((man) => (
                                <tr key={man._id} className="hover:bg-gray-100">
                                    <td className="py-3 px-4 border-b">{man.name}</td>
                                    {selectedTab === "pending" && (
                                        <td className="py-3 px-4 border-b">
                                            <a href={man.resume_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Resume</a>
                                        </td>
                                    )}
                                    <td className="py-3 px-4 border-b">
                                        {selectedTab === "pending" ? (
                                            <button
                                                className="bg-green-500 text-white px-3 py-1 rounded"
                                                onClick={() => handleStatusUpdate(man.email, "active")}
                                            >
                                                Accept
                                            </button>
                                        ) : (
                                            <button
                                                className={`${
                                                    man.status === "blocked" ? "bg-red-500" : "bg-gray-500"
                                                } text-white px-3 py-1 rounded`}
                                                onClick={() => handleStatusUpdate(man.email, man.status === "blocked" ? "active" : "blocked")}
                                            >
                                                {man.status === "blocked" ? "Unblock" : "Block"}
                                            </button>
                                        )}
                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
                                            onClick={() => handleViewDetails(man)}
                                        >
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && selectedDeliveryMan && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">{selectedDeliveryMan.name}</h2>
                        <p><strong>Current Status:</strong> {selectedDeliveryMan.status}</p>
                        <p><strong>Mobile:</strong> {selectedDeliveryMan.mobile}</p>
                        <p><strong>Address:</strong> {selectedDeliveryMan.address}</p>
                        <p><strong>Resume Link:</strong> {selectedDeliveryMan.resume_link}</p>
                        <p><strong>Education:</strong> {selectedDeliveryMan.educational_qualification}</p>
                        <p><strong>Terms Accepted:</strong> {selectedDeliveryMan.termsAccepted ? 'Yes' : 'No'}</p>
                        <p><strong>Experience:</strong> {selectedDeliveryMan.experience}</p>
                        <div className="mt-4">
                            {selectedTab === "pending" ? (
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleStatusUpdate(selectedDeliveryMan.email, "active")}
                                >
                                    Accept
                                </button>
                            ) : (
                                <button
                                    className={`${
                                        selectedDeliveryMan.status === "blocked" ? "bg-red-500" : "bg-gray-500"
                                    } text-white px-4 py-2 rounded`}
                                    onClick={() => handleStatusUpdate(selectedDeliveryMan.email, selectedDeliveryMan.status === "blocked" ? "active" : "blocked")}
                                >
                                    {selectedDeliveryMan.status === "blocked" ? "Unblock" : "Block"}
                                </button>
                            )}
                            <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded ml-2"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
