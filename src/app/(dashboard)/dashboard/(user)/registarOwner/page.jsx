'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const RegisterRestaurant = () => {
    const router = useRouter();
    
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        restaurantName: '',
        isbn: '',
        category: '',
        type: '',
        image: '', // URL of the image after upload
        opensAt: '',
        minDelivery: '',
        description: '',
        slug: '',
        location: '',
        locationDetails: '',
    });

    const [step, setStep] = useState(1); // Form step: 1 (first part), 2 (second part)
    const [loading, setLoading] = useState(false); // Loading state for image upload

    // Handle form data change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle file upload for photo
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            setLoading(true);

            try {
                const res = await axios.post(
                    `https://api.imgbb.com/1/upload?key=041ade7e4cb9e3652777ac4caca1ef91`, // Replace with your API key
                    formData
                );
                const imageUrl = res.data.data.url;
                
                // Set the image URL in formData
                setFormData((prevData) => ({
                    ...prevData,
                    image: imageUrl,
                }));

                console.log('Image URL:', imageUrl); // URL of the uploaded image
            } catch (error) {
                console.error('Error uploading image:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // On form submission, navigate to the dashboard
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-yellow-100 py-8">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-rose-500 text-center mb-6">
                    {step === 1 ? "Restaurant Registration - Part 1" : "Restaurant Registration - Part 2"}
                </h1>

                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            {/* First Part of the Form */}
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
                                    <label className="block text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-rose-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Restaurant Name</label>
                                    <input
                                        type="text"
                                        name="restaurantName"
                                        value={formData.restaurantName}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-rose-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">ISBN</label>
                                    <input
                                        type="text"
                                        name="isbn"
                                        value={formData.isbn}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-rose-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-rose-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Type</label>
                                    <input
                                        type="text"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-rose-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Photo</label>
                                    <input
                                        type="file"
                                        name="photo"
                                        onChange={handleFileChange}
                                        className="w-full p-2 border border-rose-300 rounded"
                                    />
                                    {loading && <p className="text-rose-500 mt-2">Uploading image...</p>}
                                </div>
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
                        </>
                    )}

                    {step === 2 && (
                        <>
                            {/* Second Part of the Form */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Opens At</label>
                                    <input
                                        type="time"
                                        name="opensAt"
                                        value={formData.opensAt}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-yellow-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Minimum Delivery Time</label>
                                    <input
                                        type="text"
                                        name="minDelivery"
                                        value={formData.minDelivery}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-yellow-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-yellow-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Slug (No Spaces)</label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-yellow-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-yellow-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Location Details</label>
                                    <textarea
                                        name="locationDetails"
                                        value={formData.locationDetails}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-yellow-300 rounded"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 text-right">
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterRestaurant;
