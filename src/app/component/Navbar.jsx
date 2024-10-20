
"use client";

import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { FaUserLarge } from "react-icons/fa6";
import { VscSignIn } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useContext } from "react";
import CartContext from "../Context/CartContext"
import useRole from "../hooks/useRole";
const navLinks = [
  { path: "/", name: "Home" },
  { path: "/allRestaurant", name: " Restaurant" },
  { path: "/menu", name: "Menu" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];
const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;
  const session = useSession();
  // console.log(session?.data?.user?.name);
  const pathName = usePathname();

  // console.log(pathName);
  const [icon, setIcon] = useState("true");
  // console.log(icon);
  const [userIcon, setUserIcon] = useState(false);

  const handleSignOut = () => {
    signOut("credentials");
  };

  const normalLink =
    "lg:font-bold px-3 lg:text-lg lg:mr-2 mt-2 py-2 rounded-lg lg:mt-0 hover:bg-gray-200";
  const activeLink = `bg-gradient-to-r from-[#EA6A12] to-[#EA6A12]   border border-blure-500 text-white border-none hover:bg-transparent focus:bg-transparent focus:text-white ${normalLink}`;
  console.log(session);
  

  return (
    <div className="lg:px-8 shadow-md  sticky top-0 left-0 w-full h-20 z-50 bg-base-100  md:px-4">
      <div className="navbar  justify-between  lg:justify-between md:justify-between ">
        <div className="navbar-start  w-fit">
          {/* for small */}
          <div className={icon ? "" : " relative"}>
            <div
              tabIndex={1}
              onClick={() => setIcon(!icon)}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <FiAlignJustify
                className={icon ? "block " : "hidden"}
                size={20}
              />
              <GrClose className={icon ? "hidden " : "block"} size={20} />
            </div>
            {icon ? (
              ""
            ) : (
              <ul
                tabIndex={1}
                className="menu font-serif menu-sm lg:hidden  absolute bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  {navLinks?.map((link, index) => (
                    <Link
                      href={link.path}
                      key={index}
                      className={
                        link.path === pathName ? activeLink : normalLink
                      }
                    >
                      {link.name}
                    </Link>
                  ))}
                </li>
              </ul>
            )}
          </div>
          {/* image logo */}

          <Link className="" href="/">
            <Image
              className=" w-16   md:w-20 lg:w-20 mx-auto lg:mx-0 md:mx-0"
              src="https://i.ibb.co.com/VCCFP78/logo-01.png"
              alt="QuickBite"
              height={150}
              width={150}
            />
          </Link>
        </div>

        {/* for large  */}
        <div className="navbar-center hidden gap-4 lg:flex">
          {navLinks?.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={link.path == pathName ? activeLink : normalLink}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* for right icons  */}
        <div className="navbar-end items-center   gap-3 md:gap-8 lg:gap-10 relative w-fit">
          {/* for large device sign in  */}
          {session?.status === "authenticated" ? (
            <div className="flex justify-center items-center gap-6">
              {/* <div
                onClick={handleSignOut}
                className="lg:flex cursor-pointer md:flex hidden items-center bg-stone-200  font-thin  Playfair rounded-md  px-2 py-1 text-red-400 gap-2"
              >
                <VscSignIn size={25} /> Sign Out
              </div>{" "} */}

              <div className="w-fit hover:text-orange-600 hover:scale-[1.08] ">
                <Link href="/cart">
                  <div className="flex justify-between">   <BsCart4 size={25} />
                    <span className=" lg:inline ml-1 text-orange-600">
                      (<b>{cartItems?.length || 0}</b>)
                    </span></div></Link>
              </div>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" m-1">
                  {/* <FaUserCircle
                    className="hover:scale-[1.03]  hover:text-orange-600 "
                    onClick={() => setUserIcon(!userIcon)}
                    size={30}
                  /> */}
                  {/* <Image src={`${session?.data?.user?.image}`} width={20} height={20}
                    onClick={() => setUserIcon(!userIcon)}
                    className="hover:scale-[1.03] w-12 rounded-full  " referrerPolicy="no-referrer"


                    alt="Profile picture"
                    srcset={`${session?.data?.user?.image},1x`} /> */}
                  <Image
                    src={session?.data?.user?.image || '/default-avatar.png'} // Fallback image
                    width={48}
                    height={48}
                    onClick={() => setUserIcon(!userIcon)}
                    className="hover:scale-[1.03] w-12 rounded-full"
                    alt="Profile picture"
                    referrerPolicy="no-referrer" // You can remove this if not needed
                    unoptimized
                  />
                </div>
                <div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content absolute  gap-1  -right-5 lg:-right-10 h-fit  menu bg-base-100 rounded-md z-[1] w-32 p-2 shadow"
                  >
                    <h1 className="text-center">Hi {session?.data?.user?.name}</h1>
                    <li className=" hover:bg-gray-300 hover:rounded-lg">
                      <Link href="">
                        Profile
                      </Link>
                    </li>

                    <li className=" hover:bg-gray-300 hover:rounded-lg">
                      <Link href="/favoritelist">
                        favorte list
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-300 hover:rounded-lg">
                      <Link href="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li

                      onClick={handleSignOut}
                      className="   px-2 py-1 text-red-400 gap-2  hover:bg-gray-300 hover:rounded-lg"
                    >
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Link
              className="lg:flex md:flex hidden items-center bg-rose-500 font-thin  Playfair rounded-md  px-2 py-1 text-white gap-2"
              href="/login"
            >
              <VscSignIn size={25} /> Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;