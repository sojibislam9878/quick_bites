"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Next.js Image component
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpPage = () => {
    const router = useRouter();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [eye, setEye] = useState(true);
    const [checkbox, setCheckbox] = useState();
    const [emailCheck, setEmailCheck] = useState();

    // Handle file input change
    const handleImageChange = (e) => setImage(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            try {
                const res = await axios.post(
                    `https://api.imgbb.com/1/upload?key=041ade7e4cb9e3652777ac4caca1ef91`,
                    formData
                );
                setImageUrl(res.data.data.url);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

        if (imageUrl) {
            const formData = {
                name: `${e.target.name1.value} ${e.target.name2.value}`,
                password: e.target.password.value,
                email: e.target.email.value,
                image: imageUrl,
                role: 'user'
            };

            if (formData.password.length < 6) {
                setCheckbox("Your password must be 6 letters");
                return;
            } else if (!/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password)) {
                setCheckbox("Password must include both uppercase and lowercase letters");
                return;
            }

            const resp = await fetch(`/signup/api`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "content-type": "application/json" },
            });
            if (resp?.status === 200) {
                router.push('/login');
            } else {
                setEmailCheck('Email already in use');
            }
        }
    };

    return (
        <div className="relative h-screen md:py-24 py-12 lg:py-28 bg-cover bg-center bg-no-repeat">
            <Image
                src="https://i.ibb.co/wC1k5yY/pexels-ella-olsson-572949-1640777.jpg"
                alt="Background"
                layout="fill" // Cover the entire background
                objectFit="cover"
                objectPosition="center"
                priority={true} // Preload this image for faster initial load
                className="absolute inset-0 z-0"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <div className="bg-white bg-opacity-10 p-8 backdrop-blur-md rounded-lg max-w-md w-full shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">Register</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* First Name and Last Name */}
                        <div className="flex space-x-2 md:space-x-4 lg:space-x-4">
                            <input
                                type="text"
                                name='name1'
                                placeholder="First name"
                                required
                                className="w-1/2 px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg"
                            />
                            <input
                                type="text"
                                name='name2'
                                placeholder="Last name"
                                className="w-1/2 px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <input
                                type="email"
                                name='email'
                                required
                                placeholder="Email address"
                                className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg"
                            />
                        </div>
                        {emailCheck && <p className='ml-2 text-red-500'>{emailCheck}</p>}

                        {/* Password */}
                        <div className='relative'>
                            <input
                                type={eye ? 'password' : 'text'}
                                name='password'
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg"
                            />
                            {eye ? (
                                <FaEye onClick={() => setEye(false)} className="absolute cursor-pointer right-3 text-gray-500 top-1/2 -translate-y-1/2" />
                            ) : (
                                <FaEyeSlash onClick={() => setEye(true)} className="absolute cursor-pointer right-3 text-gray-500 top-1/2 -translate-y-1/2" />
                            )}
                        </div>
                        {checkbox && <p className='ml-2 text-red-500'>{checkbox}</p>}

                        {/* Image Upload */}
                        <div className='w-full flex gap-2'>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden w-full"
                                onChange={handleImageChange}
                                accept="image/*"
                                required
                            />
                            <label
                                htmlFor='file-upload'
                                className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none"
                            >
                                <span className={` ${image ? 'text-cyan-300' : 'bg-white text-slate-700 p-2'}`}>
                                    {image ? image?.name : "Upload Image"}
                                </span>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button type="submit" className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full">
                            SIGN UP
                        </button>
                    </form>

                    <p className="text-sm text-loginColor text-center mt-4">
                        Already Registered? <a className='ml-2 hover:underline hover:text-white' href='/login'>LOG IN</a>
                    </p>

                    <p className="text-sm text-white text-center mt-4">
                        Your information is safe & will not be shared.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
