'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegisterRestaurant = () => {
    const router = useRouter();

    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        about_us: '',
        slug: '',
        banner_image: '',
        location: '',
        locationDetail: '',
        opensAt: '',
        working_hours: '',
        avgRating: 4.6,
        mobile: '',
        isbn: '',
        category: '',
        type: '',
        image: '',
    });

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            setLoading(true);

            try {
                const res = await axios.post(
                    `https://api.imgbb.com/1/upload?key=041ade7e4cb9e3652777ac4caca1ef91`,
                    formData
                );
                const bannerImageUrl = res.data.data.url;

                setFormData((prevData) => ({
                    ...prevData,
                    banner_image: bannerImageUrl,
                }));
            } catch (error) {
                console.error('Error uploading image:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const restaurantData = {
            ...formData,
            status: 'pending',
        };

        try {
            if (formData.banner_image) {
                const response = await axios.post('/api/saveResturant', restaurantData);
                if (response?.data?.result.insertedId) {
                    Swal.fire({
                        title: 'Request sent to admin',
                        text: 'Please wait for confirmation',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center  py-8">
            <div className="border rounded-lg p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-rose-500 text-center mb-6">
                    {step === 1 ? "Restaurant Registration" : "Restaurant Registration "}
                </h1>

                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                        <label className="block text-gray-700">About Us</label>
                                        <textarea
                                            name="about_us"
                                            value={formData.about_us}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-2 border border-rose-300 rounded"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700">Slug</label>
                                        <input
                                            type="text"
                                            name="slug"
                                            value={formData.slug}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-2 border border-rose-300 rounded"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700">Banner Image</label>
                                        <input
                                            type="file"
                                            name="banner_image"
                                            onChange={handleFileChange}
                                            className="w-full p-2 border border-rose-300 rounded"
                                        />
                                        {loading && <p className="text-rose-500 mt-2">Uploading image...</p>}
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
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                        <label className="block text-gray-700">Location Detail</label>
                                        <textarea
                                            name="locationDetail"
                                            value={formData.locationDetail}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-2 border border-yellow-300 rounded"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700">Working Hours</label>
                                        <input
                                            type="text"
                                            name="working_hours"
                                            value={formData.working_hours}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-2 border border-yellow-300 rounded"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700">Opens At</label>
                                        <input
                                            type="text"
                                            name="opensAt"
                                            value={formData.opensAt}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-2 border border-yellow-300 rounded"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700">Average Rating</label>
                                        <input
                                            type="number"
                                            name="avgRating"
                                            value={formData.avgRating}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-2 border border-yellow-300 rounded"
                                            step="0.1"
                                            min="0"
                                            max="5"
                                        />
                                    </div>
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
