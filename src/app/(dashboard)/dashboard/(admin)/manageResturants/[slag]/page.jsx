'use client'

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FaBookReader, FaEdit } from 'react-icons/fa';
import { IoMdHeartEmpty, IoMdShare } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5';
import image from '../../../../../../asset/image/bannerleft.png'


const RestuarantDetailsPage = () => {
    const [item, setItem] = useState({})
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false)



 
const {slag} = useParams();



useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/allrestrurent/${slag}`);
        const data = await res.json();
        setItem(data.result);
        setReviews(data.result.reviews || []); // Set existing reviews
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slag) {
      fetchData();
    }
  }, [slag]);

  console.log(item);


  console.log('item---->' ,item,'reviews --->', reviews );



  const product = {
    _id: "afs452g2df2dgfd2dg",
    image: "https://example.com/product-cover.jpg", // URL to the product cover image
    productName: "The Great Adventure",
    author: "John Doe",
    publication: "Adventure Publishing",
    category: "Fiction",
    price: 599,
    discount: 10, // in percentage
    stockStatus: "In Stock",
    productLength: 350, // in pages
    isbn: "978-3-16-148410-0",
    edition: 2024,
    country: "Bangladesh",
    language: "English",
    available: 16,
    summary:
      "An epic tale of courage, discovery, and survival as a group of explorers embark on a journey to unknown lands, overcoming extraordinary challenges.",
    authorDetails:
      "John Doe is a renowned author and explorer, having traveled to over 50 countries and written multiple bestsellers. His works often explore the boundaries of human experience, blending adventure with philosophical insights.",
    promoCode: true,
    authorPhoto: "https://example.com/product-cover.jpg",
    authorFollower: 34,
    myRetting: 2,
    avgRating: 3,
  };
    return (
        <div>
         

         <section className="lg:grid  pt-12 lg:grid-cols-12 md:w-[90%] mx-auto shadow-sm">
        <div className="col-span-9 pb-12 md:grid md:grid-cols-12 gap-6 bg-white min-h-screen border">
          {/* Image Section */}
          <div className="image md:col-span-5 ml-8 mt-8">
            <img
              src={image}
              height={300}
              width={100}
              alt={product.productName}
              className="w-full border p-6"
            />
            <div>
              <button className="bg-[#ebebeb] text-[#737373] rounded mt-4 px-8 py-4 text-center w-full">
                Want to Readdddd
              </button>
            </div>
          </div>

          {/* product Details Section */}
          <article className="productDetails  space-y-4 md:col-span-7 mt-8 px-6">
            <h1 className="text-3xl text-gray-600">{product?.productName}</h1>
            <h1 className=" text-gray-600">
              By <span className="text-[#0397d3]">{product?.author}</span>
            </h1>
            <h1 className=" text-gray-600">
              Category:{" "}
              <span className="text-[#0397d3]">{product?.category}</span>
            </h1>

            <h1 className="text-xl text-gray-600 font-bold">
              {product?.discount ? (
                <span>
                  <span className="line-through text-gray-600">
                    TK. {product?.price.toFixed(2)}
                  </span>
                  <span className="ml-2 text-[#0397d3]">
                    TK.{" "}
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(2)}
                    <span className="text-green-600 text-sm font-light">
                      {" "}
                      You save TK.{" "}
                      {((product.price * product.discount) / 100).toFixed(2)} (
                      {product?.discount}%)
                    </span>
                  </span>
                </span>
              ) : (
                <>TK. {product?.price.toFixed(2)}</>
              )}
            </h1>

            <div>
              {product?.stockStatus === "In Stock" ? (
                <div className="text-[#0397d3]">
                  ✅ In stock{" "}
                  <span className="text-red-600">
                    (Only {product?.available} copies left)
                  </span>
                  <p className="text-gray-700 mt-2">
                    *স্টক আউট হওয়ার আগেই অর্ডার করুন
                  </p>
                </div>
              ) : (
                <p className="text-red-600 font-semibold">Stock Out</p>
              )}

              {product?.promoCode && (
                <div className="rounded-lg border bg-[#f1fff1] mt-4 border-green-600">
                  <h1 className="text-[#0397d3] ml-4 p-2">
                    InApp extra 3% off, use promocode: APPUSER
                  </h1>
                </div>
              )}
            </div>

            {/* some details */}
            <div className="mt-8 flex gap-8">
              <div className="space-y-1">
                <p className="text-gray-600">Book Length</p>
                <p className="text-center ml-6">
                  {" "}
                  <IoBookOutline className="text-xl" />
                </p>
                <p> {product?.productLength} Pages </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-600"> Edition</p>
                <p className="text-center ml-6">
                  {" "}
                  <FaEdit className="text-xl" />
                </p>
                <p className="font-medium"> {product?.edition} </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-600">Publication</p>
                <p className="text-center ml-6">
                  {" "}
                  <FaBookReader className="text-xl" />
                </p>
                <p> {product?.publication} </p>
              </div>
            </div>

            <div className="space-y-4 ">
              {/* <h1 className="flex gap-2">
                <Image src={icon2} alt="Payment on delivery" />
                বই হাতে পেয়ে মূল্য পরিশোধের সুযোগ
              </h1> */}
              {/* <h1 className="flex gap-2"> */}
                {/* <img src={icon1} alt="7-day return policy" />৭ দিনের মধ্যে
                পরিবর্তনের সুযোগ
              </h1> */}
            </div>

            {/* add to cart button */}
            <div className="space-x-6">
              <button className="border-2 px-2 font-bold py-2 rounded text-green-600 hover:bg-green-600 hover:text-white border-green-600">
                একটু পড়ে দেখুন
              </button>
              <button className="px-2 w-[40%] font-bold py-2 text-white border-2 border-primary items-center rounded bg-primary">
                <span className="flex gap-4 items-center">
                  <BsCart3 />
                  <span>Add to Cart</span>
                </span>
              </button>
            </div>

            <div className="mt-8 flex gap-6">
              <p className="flex gap-2 cursor-pointer hover:text-[#4398fe] items-center text-gray-600">
                <IoMdHeartEmpty className="text-lg" />{" "}
                <span>Add to book List</span>
              </p>
              <p className="flex gap-2 cursor-pointer hover:text-[#4398fe] items-center text-gray-600">
                <IoMdShare className="text-lg" /> <span>Share This Book</span>
              </p>
            </div>
          </article>
        </div>

        <div className="col-span-3 min-h-screen border">
          {/* <RelatedProducts /> */}
        </div>
      </section>

        </div>
    );
};

export default RestuarantDetailsPage ;