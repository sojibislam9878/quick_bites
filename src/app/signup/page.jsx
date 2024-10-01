"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


const SignUpPage = () => {

    const router=useRouter()

    const  handleSubmit = async (e) =>{



        e.preventDefault();


        const name1= e.target.name1.value
        const name2= e.target.name2.value
        const formData = {
            name: name1 + ' ' + name2,
            password: e.target.password.value,
            email: e.target.email.value,
            image: e.target.image.value,


        }
        // console.log(formData);
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}signup/api`, {
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
    return (
        <div className=' ' >
            <div className="  relative h-screen md:py-24 py-12 lg:py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/wC1k5yY/pexels-ella-olsson-572949-1640777.jpg')" }}>
                {/*  Background Blur Overlay  */}
                <div className="absolute  h-full inset-0 bg-black bg-opacity-50 backdrop-blur-0"></div>

                {/*  Register Form Content  */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    <div className="bg-white bg-opacity-10 p-8 rounded-lg max-w-md w-full shadow-lg">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Register</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/*  First Name and Last Name  */}
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    name='name1'
                                    placeholder="First name"
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
                                    placeholder="Email address"
                                    className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>

                            {/* Password  */}
                            <div>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>

                            {/* for image  */}

                            <div>
                                <input
                                    type="url"
                                    name='image'
                                    placeholder="Image URL"
                                    className="w-full px-4 py-3 text-white bg-transparent border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                            </div>
                            {/*  Sign In Button  */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full">
                                SIGN UP
                            </button>
                        </form>

                        {/*  Information and Terms  */}
                        <p className="text-sm text-white text-center mt-4">
                            Your information is safe & will not be shared. Confirm your birthday & gender for a personalized experience.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUpPage;