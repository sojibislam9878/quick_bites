"use client"
import CheckoutSpin from "@/app/component/checkoutSpin/CheckoutSpin";
import SocialSignin from "@/app/component/shared/SocialSignin";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Page = () => {



const [eye,setEye]=useState(true)
 const router=useRouter()   
 
 const [loading, setLoading] = useState(false);


    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);

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
        const email = e.target.email.value;
        const password = e.target.password.value;


        const resp = await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: "/",

        });
        if (resp?.ok==false){
            setLoading(false);

            Toast.fire({
                icon: "error",
                color:'red',
                title: "Invalid email or password."
              });

        }else{
            setLoading(false);

            router.push("/"); 

        }
        console.log(resp)
    };








    return (
       <>
        <div className='h-screen  items-center text-justify'>
        
            <div className="flex justify-center md:py-24 py-12 lg:py-28  items-center h-full bg-cover bg-center relative" style={{ backgroundImage: "url('https://i.ibb.co.com/wC1k5yY/pexels-ella-olsson-572949-1640777.jpg')" }}>
                {/* Overlay to darken the background */}
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-0"></div>

                <div className="relative bg-gray-500  bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-2xl w-full max-w-md">
                    <h2 className="text-center justify-center flex w-full text-2xl font-semibold mb-6 text-gray-900">
                        <Image className=' p-3' src="https://i.ibb.co/kgT20yy/Quick-Bite-logo-1.webp" alt="Logo" height={100} width={100} />
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            {/* <label className="block text-white text-sm font-medium">Email Address</label> */}
                            <input
                                type="email"
                                name='email'
                                className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="mb-4 relative">
                            {/* <label className="block text-gray-700 text-sm font-medium">Password</label> */}
                            <input
                                type={`${eye?'password':'text'}`}
                                name='password'
                                className="w-full p-3 relative border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Password"
                            />
                            <FaEye onClick={()=>setEye(false)} className={`absolute     ${eye?'visible':'hidden'} cursor-pointer right-3 text-gray-500 top-1/2 -translate-y-1/2`} />
                            <FaEyeSlash onClick={()=>setEye(true)} className={`absolute ${eye?'hidden':'visible'} cursor-pointer right-3 text-gray-500 top-1/2 -translate-y-1/2`} />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <label className="inline-flex items-center text-sm">
                                <input type="checkbox" className="form-checkbox h-4 w-4" />
                                <span className="ml-2 text-white">Keep me logged in</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-loginBTn text-white py-3 uppercase hover:bg-blue-700 transition duration-300"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="text-center justify-between w-full flex mt-4 text-loginColor text-sm">
                        <a href="#" className="text-sm text-loginColor hover:underline uppercase ">Forgot Password?</a>

                        <span>New User? <a href="/signup" className="text-loginColor hover:underline">Register</a></span>
                    </div>

                    <div className="text-center mt-6 text-gray-700 text-sm">
                        <span className="text-white">Or login using</span>
                        <div className="flex justify-center mt-4 space-x-3">
                            <SocialSignin></SocialSignin>
                        </div>
                    </div>


                </div>
            </div>

            {
          loading ? <CheckoutSpin></CheckoutSpin> : ''
        }
        </div>
       
       
       </>
    );
};

export default Page;