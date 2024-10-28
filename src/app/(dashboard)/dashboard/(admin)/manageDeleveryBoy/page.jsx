'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Page = () => {
    const [deliveryMen, setDeliveryMen] = useState([]);
    const [selectedDeliveryMan, setSelectedDeliveryMan] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchDeliveryMen = async () => {
            const response = await fetch('/api/allDeleveryMan');
            const data = await response.json();
            setDeliveryMen(data.result);
        };

        fetchDeliveryMen();
    }, []);

    console.log(deliveryMen, 'alld develever man');

    const handleViewDetails = (man) => {
        setSelectedDeliveryMan(man);
        setIsModalOpen(true);
    };

    const handleAccept = async (id) => {
        const response = await fetch('/api/updateDeliveryManStatus', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: 'pending' }),
        });

        const data = await response.json();
        if (data.status === 200) {
            Swal.fire('Updated!', 'Delivery man status changed to active.', 'success');
            setDeliveryMen((prev) => 
                prev.map((man) => man._id === id ? { ...man, status: 'active' } : man)
            );
        } else {
            Swal.fire('Error', 'Failed to update status.', 'error');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDeliveryMan(null);
    };

    console.log(deliveryMen, 'delevery man');

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Delivery Men Management</h1>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Current Status</th>
                            <th className="py-3 px-4 text-left">Mobile</th>
                            <th className="py-3 px-4 text-left">Address</th>
                            <th className="py-3 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveryMen.map((man) => (
                            <tr key={man._id} className="hover:bg-gray-100">
                                <td className="py-3 px-4 border-b">{man.name}</td>
                                <td className="py-3 px-4 border-b">{man.status}</td>
                                <td className="py-3 px-4 border-b">{man.mobile}</td>
                                <td className="py-3 px-4 border-b">{man.address}</td>
                                <td className="py-3 px-4 border-b">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleViewDetails(man)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
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
                        <p><strong>Vehicle Type:</strong> {selectedDeliveryMan.vehicle_type}</p>
                        <p><strong>Availability:</strong> {selectedDeliveryMan.availability}</p>
                        <p><strong>Preferred Area:</strong> {selectedDeliveryMan.preferred_area}</p>
                        <div className="mt-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                onClick={() => handleAccept(selectedDeliveryMan._id)}
                            >
                                Accept
                            </button>
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
