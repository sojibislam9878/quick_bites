'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegisterDeliveryMan = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
        resume_link: '',
        educational_qualification: '',
        termsAccepted: false,
        experience: '',
        vehicle_type: '',
        availability: '',
        preferred_area: '',
    });
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            Swal.fire({
                title: 'Error',
                text: 'You must accept the terms and conditions to register.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('/api/saveDeleveryMan', formData);
            if (response.data.status === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'Delivery Man registered successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                // Reset form
                setFormData({
                    name: '',
                    mobile: '',
                    address: '',
                    resume_link: '',
                    educational_qualification: '',
                    termsAccepted: false,
                    experience: '',
                    vehicle_type: '',
                    availability: '',
                    preferred_area: '',
                });
                setStep(1);
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center py-8">
            <div className="border rounded-lg p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-rose-500 text-center mb-6">Delivery Man Registration</h1>

                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-rose-300 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-rose-300 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-rose-300 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Resume Link</label>
                                <input
                                    type="url"
                                    name="resume_link"
                                    value={formData.resume_link}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-rose-300 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Educational Qualification</label>
                                <input
                                    type="text"
                                    name="educational_qualification"
                                    value={formData.educational_qualification}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-rose-300 rounded"
                                />
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    required
                                    className="mr-2"
                                />
                                <label className="text-gray-700">I accept the terms and conditions</label>
                                <button type="button" onClick={() => setShowModal(true)} className="ml-2 text-blue-500 underline">View Terms</button>
                            </div>

                            <div className="mt-6 text-right">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Experience (in years)</label>
                                <input
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-yellow-300 rounded"
                                    min="0"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Vehicle Type</label>
                                <input
                                    type="text"
                                    name="vehicle_type"
                                    value={formData.vehicle_type}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-yellow-300 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Availability</label>
                                <input
                                    type="text"
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-yellow-300 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700">Preferred Area</label>
                                <input
                                    type="text"
                                    name="preferred_area"
                                    value={formData.preferred_area}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-yellow-300 rounded"
                                />
                            </div>

                            <div className="mt-6 flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
                                    disabled={loading}
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-4 w-11/12 max-w-lg">
                        <h2 className="text-xl font-bold">Terms and Conditions</h2>
                        <p>1. You must deliver all items on time.</p>
                        <p>2. You should follow all traffic rules.</p>
                        <p>3. Maintain cleanliness while on duty.</p>
                        <p>4. You must be available during assigned hours.</p>
                        <p>5. Always communicate with the management regarding any issues.</p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegisterDeliveryMan;