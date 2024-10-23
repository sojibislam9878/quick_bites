'use client'
import { useState } from 'react';

const DeliveryForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        region: 'Dhaka',
        city: 'Gazipur',
        building: '',
        area: '',
        address: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.fullName.trim()) {
            formErrors.fullName = 'Full name is required';
        }

        if (!formData.phoneNumber.trim()) {
            formErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d+$/.test(formData.phoneNumber)) {
            formErrors.phoneNumber = 'Phone number is invalid';
        }

        if (!formData.building.trim()) {
            formErrors.building = 'Building/House No is required';
        }

        if (!formData.address.trim()) {
            formErrors.address = 'Address is required';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Delivery Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 font-semibold" htmlFor="region">Region</label>
                            <select
                                id="region"
                                name="region"
                                value={formData.region}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg"
                            >
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold" htmlFor="city">City</label>
                            <select
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg"
                            >
                                <option value="Gazipur">Gazipur</option>
                                <option value="Narayanganj">Narayanganj</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="building">Building / House No</label>
                        <input
                            type="text"
                            id="building"
                            name="building"
                            value={formData.building}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
                        />
                        {errors.building && <p className="text-red-500 text-sm mt-1">{errors.building}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="area">Area</label>
                        <input
                            type="text"
                            id="area"
                            name="area"
                            value={formData.area}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold" htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full p-3 border rounded-lg outline-none focus:border-blue-500"
                            rows="3"
                        ></textarea>
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DeliveryForm;
