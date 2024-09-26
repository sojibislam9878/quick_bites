


'use client'


// import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { FaUserLarge } from "react-icons/fa6";
import { VscSignIn } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { usePathname } from 'next/navigation'
import { FaUserCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
// import { useRouter } from "next/router";


const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    // { path: '/restaurants', name: 'Restaurants' },
    // { path: '/orders', name: 'Orders' },
    { path: '/contact', name: 'Contact' },
    { path: '/about', name: 'About' },
    { path: '/allRestaurant', name: ' Restaurant' },
    // { path: '/Support/FAQs', name: 'Support/FAQs' },
];


const Navbar = () => {


    const session=useSession()
    console.log(session)
    const pathName = usePathname()


    console.log(pathName)
    const [icon, setIcon] = useState('true')
    console.log(icon)
    const [userIcon, setUserIcon] = useState(false)


    // for sign out functionality
    const handleSignOut =()=> {
        signOut('credentials',

        )
document. localStorage.removeItem("next-auth.token");





    
    }
 



    return (
        
        <div className='lg:px-16 border-b-2 fixed mb-48  border  w-full h-fit z-50 bg-base-100  border-gray-400 md:px-5'>
            <div className="navbar  justify-between  lg:justify-between md:justify-between ">
                <div className="navbar-start  w-fit">
                    {/* for small */}
                    <div className={icon ? '' : ' relative'}>
                        <div tabIndex={1}  onClick={() => setIcon(!icon)} role="button" className="btn btn-ghost lg:hidden">

                            <FiAlignJustify className={icon ? 'block ' : 'hidden'} size={20} />
                            <GrClose className={icon ? 'hidden ' : 'block'}  size={20} />




                        </div>
                        {icon ? '' : <ul
                            tabIndex={1}
                            className="menu font-serif menu-sm lg:hidden  absolute bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>

                                {navLinks?.map((link, index) => (<a key={index}
                                    href={link.path}
                                    className={
                                        link.path == pathName ? "text-orange-500 font-serif flex hover:border-solid hover:border underline-offset-4 underline hover:border-white border-solid border-transparent border box-border w-full p-3 font-semibold" : "w-full  font-sans   hover:border-solid   hover:text-orange-500 hover:border border border-transparent box-border p-3"
                                    }
                                >
                                    {link.name}
                                </a>

                                ))}


                            </li>


                        </ul>}
                    </div>
                    {/* image logo */}
                    <a className="" href="/">
                        <img className='w-10 md:w-16 lg:w-16 ' src="https://i.ibb.co.com/kgT20yy/Quick-Bite-logo-1.webp" alt="QuickBite" />

                    </a>
                </div>
                {/* for large  */}
                <div className="navbar-center hidden gap-4 lg:flex">
                    {navLinks?.map((link, index) => (<a key={index}
                        href={link.path}
                        className={
                            link.path == pathName ? "text-orange-500 font-sans flex hover:border-solid hover:border underline-offset-4 underline hover:border-white border-solid border-transparent border box-border w-full p-3 font-semibold" : "w-full  font-sans hover:border-solid   hover:text-orange-500 hover:border border border-transparent box-border p-3"
                        }
                    >
                        {link.name}
                    </a>

                    ))}
                </div>


                {/* for right icons  */}
                <div className="navbar-end items-center   gap-3 md:gap-8 lg:gap-10 relative w-fit">

                        {/* for large device sign in  */}
                   {session?.status === 'authenticated'? <div   onClick={ handleSignOut}  className="lg:flex cursor-pointer md:flex hidden items-center bg-stone-200  font-thin  Playfair rounded-md  px-2 py-1 text-red-400 gap-2" >
                        <VscSignIn size={25} /> Sign Out
                    </div>:<Link  className="lg:flex md:flex hidden items-center bg-rose-500 font-thin  Playfair rounded-md  px-2 py-1 text-white gap-2" href="/login">
                        <VscSignIn size={25} /> Sign In
                    </Link>}
                    {/* for cart */}
                    <div className="w-fit hover:text-orange-600 hover:scale-[1.08] ">
                        <BsCart4 size={25} />
                    </div>

                    {/* for use icon */}

                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className=" m-1">
                            <FaUserCircle className="hover:scale-[1.03]  hover:text-orange-600 " onClick={() => setUserIcon(!userIcon)} size={30} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content absolute  gap-1  -right-5 lg:-right-10 h-fit  menu border-2 border-red-100  bg-base-100 rounded-md z-[1] w-32 p-2 shadow">
                            <p className="p-2 lg:hidden md:hidden block hover:bg-gray-300 font-semibold rounded">
                                {/* <div className="absolute  top-14 -right-10   w-40 rounded-md p-2 border border-red-200   text-black  font-medium text-center"> */}
                                <a className="lg:hidden md:hidden flex   gap-2" href="/login">
                                    <VscSignIn size={20} /> Sign In
                                </a>

                                {/* </div> */}


                            </p>
                            <p className="p-2  hover:bg-gray-300 rounded font-semibold">
                                {/* <div className="absolute  top-14 -right-10   w-40 rounded-md p-2 border border-red-200   text-black  font-medium text-center"> */}
                                <a className="flex gap-2" href="">
                                    <FaUserLarge /> Profile
                                </a>

                                {/* </div> */}


                            </p>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;