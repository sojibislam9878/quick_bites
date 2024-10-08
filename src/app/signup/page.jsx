"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



const SignUpPage = () => {

    const router = useRouter()

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    // Handle file input change
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            // Send image to ImgBB API
            try {
                const res = await axios.post(
                    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, // Replace with your API key
                    formData
                );
                setImageUrl(res.data.data.url); 
                console.log(res.data.data.url)// URL of the uploaded image
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }


        // console.log('safd', e.target.sf.value)

      if (imageUrl) {
        const name1 = e.target.name1.value
        const name2 = e.target.name2.value
        const formData = {
            name: name1 + ' ' + name2,
            password: e.target.password.value,
            email: e.target.email.value,
            image: imageUrl,
            role: e.target.role.value


        }
        console.log('alldata',formData);
        const resp = await fetch(`https://quick-bites-tau.vercel.app/signup/api`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "content-type": "application/json",
            },
        });
        if (resp.status === 200) {
            router.push('/login');
        }
        
      }
    }
    return (
        <div className=' ' >
            <div className="  relative h-screen md:py-24 py-12 lg:py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/wC1k5yY/pexels-ella-olsson-572949-1640777.jpg')" }}>
                {/*  Background Blur Overlay  */}
                <div className="absolute  h-full inset-0 bg-black bg-opacity-50 backdrop-blur-0"></div>

                {/*  Register Form Content  */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    <div className="bg-white bg-opacity-10 p-8 backdrop-blur-md rounded-lg max-w-md w-full shadow-lg">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Register</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/*  First Name and Last Name  */}
                            <div className="flex  space-x-2 md:space-x-4 lg:space-x-4">
                                <input
                                    type="text"
                                    name='name1'
                                    placeholder="First name"
                                    required
                                    className="w-1/2 dark:text-white px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                <input
                                    type="text"
                                    name='name2'

                                    placeholder="Last name"
                                    className="w-1/2 px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>

                            {/*  Email Address  */}
                            <div>
                                <input 
                                    type="email"
                                    name='email'
                                    required
                                    placeholder="Email address"
                                    className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>

                            {/* Password  */}
                            <div>
                                <input
                                    type="password"
                                    name='password'
                                    required
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>

                            {/* for image  */}

                            <div className='w-full flex  md:gap-4 gap-2 lg:gap-4'>
                                {/* <input
                                    type="url"
                                    name='image'
                                    placeholder="Image URL"
                                    className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /> */}


                                {/* for image  */}
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
                                    className="w-1/2 px-4 py-3 required:  text-white bg-transparent border text-ellipsis  overflow-hidden border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"

                                >
                                    <span className={` ${image ? 'text-cyan-300 text-nowrap ' : 'text-slate-300'}  `}>{image ? image?.name : "Upload Image "}</span>
                                </label>

                                {/* for role */}
                                <select name='role'
                                    required
                                    className="lg:w-1/2 md:w-1/2 md:px-4 px-1  lg:px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" >
                                    <option className='  text-xs text-slate-600' disabled selected  >Use For</option>
                                    <option className=' text-xs text-slate-600' value="Delivery Man">Delivery Man</option>
                                    <option className=' text-xs text-slate-600 ' value="Normal User">Normal User</option>
                                </select>
                                {/* <input
                                    type="text"
                                    name='name2'
                                    placeholder="Last name"
                                    className="w-1/2 px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" /> */}


                            </div>
                            {/*  Sign In Button  */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full">
                                SIGN UP
                            </button>
                        </form>
                        <p className="text-sm text-loginColor    text-center mt-4">
                            Already Register?<a className='ml-2 hover:underline' href='/login' >LOG IN</a >
                        </p>

                        {/*  Information and Terms  */}
                        <p className="text-sm text-white text-center mt-4">
                            Your information is safe & will not be shared.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUpPage;