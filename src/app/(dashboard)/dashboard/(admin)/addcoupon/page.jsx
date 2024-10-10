'use client'

import CouponData from "@/app/component/coupon/CouponData"
import axios from "axios"

const AddCouponForm = () => {
    const [,refetch]=CouponData()

    const add = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const code = e.target.code.value
        const couponId = e.target.couponId.value
        const discountValue = e.target.discountValue.value
        const discountType = e.target.discountType.value
        const startDate = e.target.startDate.value
        const endDate = e.target.endDate.value
        const minimumPurchase = e.target.minimumPurchase.value
        const category = e.target.category.value
        const terms = e.target.terms.value
        const description = e.target.description.value
        const status = e.target.status.value

        const formData = {

            id: couponId,
            title: title,
            description: description,
            code: code,
            discountValue: discountValue,
            discountType: discountType,
            validity: {
                start: startDate,
                end: endDate
            },
            minimumPurchase: minimumPurchase,
            status: status,
            category: category,
            terms: terms
        }
        console.log(formData)

        if (formData) {
            axios.post('https://quick-bites-tau.vercel.app/api/addCoupon', formData)
                .then(response => {
                    if(response.data.message=='Coupon updated successfully'){
                        refetch()
                    }
                })
        }
    }

    return (

        <div className="lg:px-5 md:px-3 px-1 w-full">
            <form
                onSubmit={add}
                className="w-full mx-auto md:p-7 p-5 lg:p-10 bg-white shadow-md rounded-lg md:my-4 my-1 lg:my-4"
            >
                <h2 className="text-2xl font-bold font-lobster mb-6 text-center text-gray-800">
                    Add New Coupon
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coupon ID */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="couponId">
                            Coupon ID
                        </label>
                        <input
                            type="text"
                            id="couponId"
                            placeholder="e.g., 12345ABC"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* Coupon Title */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                            Coupon Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="e.g., 20% Off on First Order"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* Coupon Code */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="code">
                            Coupon Code
                        </label>
                        <input
                            type="text"
                            id="code"
                            placeholder="e.g., WELCOME20"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* Discount Value */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="discountValue">
                            Discount Value (% or Fixed)
                        </label>
                        <input
                            type="number"
                            id="discountValue"
                            placeholder="e.g., 20 or 5"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* Discount Type */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="discountType">
                            Discount Type
                        </label>
                        <select
                            id="discountType"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            <option value="percentage">Percentage</option>
                            <option value="fixed">Fixed</option>
                        </select>
                    </div>

                    {/* Validity Start Date */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="startDate">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* Validity End Date */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="endDate">
                            End Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* Minimum Purchase */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="minimumPurchase">
                            Minimum Purchase ($)
                        </label>
                        <input
                            type="number"
                            id="minimumPurchase"
                            placeholder="e.g., 50"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    {/* Coupon Category */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">
                            Category
                        </label>
                        <select
                            id="category"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            <option value="all">All</option>
                            <option value="beverages">Beverages</option>
                            <option value="pizza">Pizza</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="category">
                            Status
                        </label>
                        <select
                            id="status"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            <option value="active">ACTIVE</option>
                            <option value="deactive">INACTIVE</option>

                        </select>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="terms">
                            Terms and Conditions
                        </label>
                        <textarea
                            id="terms"
                            rows="4"
                            placeholder="e.g., Minimum purchase of $50 required. Available for delivery orders only."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        ></textarea>
                    </div>

                    {/* Coupon Description */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            rows="3"
                            placeholder="e.g., This coupon applies to all orders over $50. Use it to get 20% off your first order."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-all"
                    >
                        Add Coupon
                    </button>
                </div>
            </form>
        </div>



    );
}





export default AddCouponForm
