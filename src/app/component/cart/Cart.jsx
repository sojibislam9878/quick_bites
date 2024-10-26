"use client";

import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartContext";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const userData = useSession()
  const router = useRouter()

  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);
  const [hasCoupon, setHasCoupon] = useState(false); // State to handle checkbox
  const [coupon, setCoupon] = useState(""); // State to store coupon input
  const [discount, setDiscount] = useState(0); // State to store discount




  // console.log(cart.cartItems,'cart is here ');


  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem.stock)) return;

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  // Calculate amounts
  const amountWithoutTax = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
  const totalAmountBeforeDiscount = (
    Number(amountWithoutTax) + Number(taxAmount)
  ).toFixed(2);

  // Apply discount
  const totalAmountAfterDiscount = (
    totalAmountBeforeDiscount * (1 - discount / 100)
  ).toFixed(2);

  


  const handlePayment = async () => {


    const buyNowData = JSON.parse(localStorage.getItem('buyNowData'))?.buyNow
    if (buyNowData) {

      localStorage.removeItem('buyNowData');
      
    }


    router.push('/checkoutfrom')




  }

  const totalItems=cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity,
    0
  )
console.log(totalItems);

  return (
    <>
      <section className="py-5 sm:py-7 bg-[#f8efea]">
        <div className="container  max-w-screen-xl mx-auto px-4">
          <h2 className={`text-3xl  font-semibold mb-2 ${cart?.cartItems?.length == 0 ? 'h-screen  relative text-gray-500' : ''}`}>
            <span className={`${cart?.cartItems?.length == 0 || totalItems ==0 || totalItems == undefined && 'absolute top-1/3 flex-col  right-1/2 text-center translate-x-1/2'}`}>
            <span className={`${totalItems > 0 ? 'visible':'hidden'}`}>
            {totalItems} 
            Item(s) in Cart
            </span>
              {
                totalItems == 0 || totalItems == undefined? ( <div className="h-screen absolute  top-[25%] text-center  w-full ">

                 <span className="h-screen">
                 <p>
                    There are no items in this cart
                  </p>
                  <Link className="btn border mt-4 text-orange-400  border-orange-400" href={'/menu'}>
                    Continue Eating
                  </Link>
                 </span>
                </div>):''
              }
            </span>

          </h2>
        </div>
      </section>

      {cart?.cartItems?.length > 0 && (
        <section className="py-10">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <main className="md:w-3/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  {cart?.cartItems?.map((cartItem, index) => (
                    <div key={index}>
                      <div className="flex flex-wrap lg:flex-row gap-5 mb-4">
                        <div className="w-full lg:w-2/5 xl:w-2/4">
                          <figure className="flex leading-5">
                            <div>
                              <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                <Image
                                  src={cartItem.image}
                                  alt={cartItem.foodName}
                                  width={100}
                                  height={80}
                                />
                              </div>
                            </div>
                            <figcaption className="ml-3">
                              <p>
                                <a href="#" className="hover:text-blue-600">
                                  {cartItem.foodName}
                                </a>
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="w-24">
                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer"
                              onClick={() => decreaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input
                              type="number"
                              className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-900 outline-none custom-input-number"
                              value={cartItem.quantity}
                              readOnly
                            ></input>
                            <button
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => increaseQty(cartItem)}
                            >
                              <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="leading-5">
                            <p className="font-semibold not-italic">
                              ${cartItem.price * cartItem.quantity.toFixed(2)}
                            </p>
                            <small className="text-gray-400">
                              ${cartItem.price} / per item
                            </small>
                          </div>
                        </div>
                        <div className="flex-auto">
                          <div className="float-right">
                            <a
                              className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                              onClick={() =>
                                deleteItemFromCart(cartItem?.product)
                              }
                            >
                              Remove
                            </a>
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </article>
              </main>

              <aside className="md:w-1/4">
                <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                  <ul className="mb-5">
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Amount before Tax:</span>
                      <span>${(amountWithoutTax).toFixed(2)}</span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>Total Units:</span>
                      <span className="text-green-500">
                        {cart?.cartItems?.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        (Units)
                      </span>
                    </li>
                    <li className="flex justify-between text-gray-600  mb-1">
                      <span>TAX:</span>
                      <span>${taxAmount}</span>
                    </li>
                    <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                      <span>Total price:</span>
                      <span>${totalAmountAfterDiscount}</span>
                    </li>
                  </ul>

                  {/* Checkbox for coupon */}
                  {/* <div className="mb-4">
                    <input
                      type="checkbox"
                      id="hasCoupon"
                      checked={hasCoupon}
                      onChange={(e) => setHasCoupon(e.target.checked)}
                    />
                    <label htmlFor="hasCoupon" className="ml-2">
                      Do you have a coupon code?
                    </label>
                  </div> */}

                  {/* Conditionally render the coupon input */}
                  {hasCoupon && (
                    <div className="mb-4">
                      <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Enter coupon code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      <button
                        onClick={applyCoupon}
                        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Apply Coupon
                      </button>
                    </div>
                  )}

                  <a onClick={handlePayment} className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                    CheckOut
                  </a>

                  {/* <Link
                    href="/"
                    className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  >
                    Back to shop
                  </Link> */}
                </article>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
