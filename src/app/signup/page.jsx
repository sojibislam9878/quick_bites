"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CheckoutSpin from '../component/checkoutSpin/CheckoutSpin';
import Swal from 'sweetalert2';



const SignUpPage = () => {

    const router = useRouter()

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [eye, setEye] = useState(true)
    const [checkbox, setCheckbox] = useState()
    const [emailCheck, setEmailCheck] = useState()


    // Handle file input change
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };


    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const uploadImage = async () => {
            if (image) {
                console.log(image);
    
                setLoading(true);
    
                const formData = new FormData();
                formData.append('image', image);
    
                // Send image to ImgBB API
                try {
                    const res = await axios.post(
                        `https://api.imgbb.com/1/upload?key=041ade7e4cb9e3652777ac4caca1ef91`, // Replace with your API key
                        formData
                    );
                    setImageUrl(res?.data?.data?.url);
                    console.log(res?.data?.data?.url); // URL of the uploaded image
                } catch (error) {
                    console.error('Error uploading image:', error);
                } finally {
                    setLoading(false);
                }
            }
        };
    
        uploadImage();
    }, [image]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCheckbox("")
        setEmailCheck("")
        console.log('Please');

        if(image == null){
            console.log('Please');
            

            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
            Toast.fire({
                icon: 'error',
                color: 'red',
                title: 'Please submit your Image'
              });
        }


        // console.log('safd', e.target.sf.value)

        if (imageUrl) {

            setLoading(true);

            const name1 = e.target.name1.value
            const name2 = e.target.name2.value
            const formData = {
                name: name1 + ' ' + name2,
                password: e.target.password.value,
                email: e.target.email.value,
                image: imageUrl,
                // role: e.target.role.value
                role: 'user'


            }

            if (formData?.password.length < 6) {
                setLoading(false);



                setCheckbox("Your password must be 6 letters")
                return
            }
            else if (!/[A-Z]/.test(formData?.password) || !/[a-z]/.test(formData?.password)) {

                setLoading(false);

                setCheckbox("Password must include both uppercase and lowercase letters")


                return
            }

            console.log('alldata', formData);
            const resp = await fetch(`http://localhost:300/signup/api`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "content-type": "application/json",
                },
            });
            if (resp?.status === 200) {
                setLoading(false);

                router.push('/login');
            } else (
                setLoading(false),

            setEmailCheck('Email already in use')
            )

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

                        {
                            emailCheck && <p className=' ml-2 text-red-500'>{emailCheck}</p>
                        }


                        {/* Password  */}
                        <div className='relative'>
                            <input
                                type={`${eye ? 'password' : 'text'}`}
                                name='password'
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            <FaEye onClick={() => setEye(false)} className={`absolute     ${eye ? 'visible' : 'hidden'} cursor-pointer right-3 text-gray-500 top-1/2 -translate-y-1/2`} />
                            <FaEyeSlash onClick={() => setEye(true)} className={`absolute ${eye ? 'hidden' : 'visible'} cursor-pointer right-3 text-gray-500 top-1/2 -translate-y-1/2`} />

                        </div>
                        {
                            checkbox && <p className=' ml-2 text-red-500 font-poppins'>{checkbox}</p>
                        }

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
                                
                            />

                            <label

                                htmlFor='file-upload'
                                className="w-full px-4 py-3   text-white bg-transparent border text-ellipsis  overflow-hidden border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"

                            >
                                <span className={` ${image ? 'text-cyan-300 text-nowrap ' : 'bg-white text-slate-700 p-2'}  `}>{image ? image?.name : "Upload Image "}</span>
                            </label>

                            {/* for role */}
                            {/* <select name='role'
                                    required
                                    className="lg:w-1/2 md:w-1/2 md:px-4 px-1  lg:px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" >
                                    <option className='  text-xs text-slate-600' disabled selected  >Use For</option>
                                    <option className=' text-xs text-slate-600' value="Delivery Man">Delivery Man</option>
                                    <option className=' text-xs text-slate-600 ' value="Normal User">Normal User</option>
                                </select> */}



                        </div>
                        {/*  Sign In Button  */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full">
                            SIGN UP
                        </button>
                    </form>
                    <p className="text-sm text-loginColor    text-center mt-4">
                        Already Register?<a className='ml-2 hover:underline hover:text-white' href='/login' >LOG IN</a >
                    </p>

                    {/*  Information and Terms  */}
                    <p className="text-sm text-white text-center mt-4">
                        Your information is safe & will not be shared.
                    </p>
                </div>
                {
                loading ? <CheckoutSpin></CheckoutSpin> : ''
            }
            </div>
          
        </div>

    </div>
);
};

export default SignUpPage;