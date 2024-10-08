
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
const navLinks = [
  { path: "/", name: "Home" },
  { path: "/menu", name: "Menu" },
  { path: "/contact", name: "Contact" },
  { path: "/about", name: "About" },
  { path: "/allRestaurant", name: " Restaurant" },
];
const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;
  const session = useSession();
  // console.log(session);
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
    <div className="lg:px-16 border-b-2 fixed mb-48  border  w-full h-fit z-50 bg-base-100  border-gray-400 md:px-5">
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
              className=" w-10  md:w-16 lg:w-16 mx-auto lg:mx-0 md:mx-0"
              src="https://i.ibb.co/kgT20yy/Quick-Bite-logo-1.webp"
              alt="QuickBite"
              height={100}
              width={100}
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
              <div
                onClick={handleSignOut}
                className="lg:flex cursor-pointer md:flex hidden items-center bg-stone-200  font-thin  Playfair rounded-md  px-2 py-1 text-red-400 gap-2"
              >
                <VscSignIn size={25} /> Sign Out
              </div>{" "}

              <div className="w-fit hover:text-orange-600 hover:scale-[1.08] ">
                <Link href="/cart">
                  <div className="flex justify-between">   <BsCart4 size={25} />
                    <span className=" lg:inline ml-1 text-orange-600">
                      (<b>{cartItems?.length || 0}</b>)
                    </span></div></Link>
              </div>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" m-1">
                  <img src={`${session?.data?.user?.image}`}
                    onClick={() => setUserIcon(!userIcon)}
                    className="hover:scale-[1.03] w-12 rounded-full  "


                   alt="Profile picture"
                    srcset= {`${session?.data?.user?.image},1x`}/>
                </div>
                <div>
                <ul
                  tabIndex={0}
                  className="dropdown-content absolute  gap-1  -right-5 lg:-right-10 h-fit  menu bg-base-100 rounded-md z-[1] w-32 p-2 shadow"
                >
                  <h1>hi sojib</h1>
                  <li className=" hover:bg-gray-300 hover:rounded-lg">
                    <Link  href="">
                      Profile
                    </Link>
                  </li>
                  <li className=" hover:bg-gray-300 hover:rounded-lg">
                    <Link  href="/dashboard">
                      Dashboard
                    </Link>
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