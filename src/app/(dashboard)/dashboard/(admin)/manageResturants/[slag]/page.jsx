'use client'
import { BsCart3 } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Import SweetAlert
import DashBoardReview from '@/app/(dashboard)/component/dashBoardReview/DashBoardReview';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const RestuarantDetailsPage = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false); 
  const [reviews , setReviews] = useState([]);

  const { slag } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/allrestrurent/${slag}`);
        const data = await res.json();
        setItem(data?.result);
        setIsBlocked(data?.result?.status === 'block');
        setReviews(data.result.reviews || []); 
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

  const handleCall = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to call +8801234567890.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#aa1936", // Primary color
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, call now!"
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('tel:+8801234567890', '_self');
        Swal.fire({
          title: "Calling...",
          text: "You are now calling the restaurant.",
          icon: "success",
          confirmButtonColor: "#aa1936" // Primary color
        });
      }
    });
  };

  const toggleBlockStatus = () => {
    Swal.fire({
      title: `Are you sure you want to ${isBlocked ? 'unblock' : 'block'} this restaurant?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#aa1936', // Primary color
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, ${isBlocked ? 'unblock' : 'block'} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        setIsBlocked(!isBlocked);
        Swal.fire({
          title: `${isBlocked ? 'Unblocked' : 'Blocked'}!`,
          text: `The restaurant is now ${isBlocked ? 'active' : 'blocked'}.`,
          icon: 'success',
          confirmButtonColor: '#aa1936', // Primary color
        });
      }
    });
  };

  return (
    <div className='mt-8'>
      <section>
        <div className="col-span-9 pb-12 md:grid md:grid-cols-12 gap-6 bg-white min-h-screen border">
          <div className="image md:col-span-5 ml-8 mt-8">
            <Image
              src={item?.banner_image}
              height={300}
              width={100}
              alt={item?.name}
              className="w-full border p-6"
            />
            <div>
              <button className="bg-[#ebebeb] text-[#737373] rounded mt-4 px-8 py-4 text-center w-full">
                {item?.slug}
              </button>
            </div>
          </div>

          <article className="productDetails space-y-4 md:col-span-7 mt-8 px-6">
            <h1 className="text-3xl text-gray-600">{item?.name}</h1>
            <h1 className="text-gray-600">
              Restuarant Author <span className="text-[#0397d3]">Sajib Wazed Joy</span>
            </h1>
            <h1 className="text-gray-600">
              Opens At: <span className="text-[#0397d3]">{item?.opensAt}</span>
            </h1>

            <div>
              {item?.status === "active" ? (
                <div className="text-[#0397d3]">
                  ✅ Active <span className="text-red-600">(43 Customer Reports)</span>
                  <p className="text-gray-700 mt-2">
                    If there are too many reports, consider blocking the restaurant.
                  </p>
                </div>
              ) : (
                <p className="text-red-600 font-semibold">Blocked</p>
              )}
            </div>

            <div className="mt-8 flex gap-8">
              <div className="space-y-1">
                <p className="text-gray-600">Avg. Rating</p>
                <p className="text-center ml-6">{item?.avgRating}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-600">Starting Year</p>
                <p className="font-medium">2024</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-600">Location</p>
                <p>{item?.location} ({item?.locationDetail})</p>
              </div>
            </div>

            <div className="space-x-6 flex gap-2 items-center">
              <button
                className="border-2 px-2 font-bold py-2 rounded text-[#aa1936] hover:bg-[#aa1936] hover:text-white border-[#aa1936] flex items-center gap-4"
                onClick={handleCall}
              >
                <FaPhone /> <span>Call</span>
              </button>

              <button
                className={`border-2 px-2 font-bold py-2 rounded text-${isBlocked ? 'gray-500' : '#aa1936'} hover:bg-${isBlocked ? 'gray-500' : '#aa1936'} hover:text-white border-${isBlocked ? 'gray-500' : '#aa1936'} flex items-center gap-4`}
                onClick={toggleBlockStatus}
              >
                {isBlocked ? 'Unblock' : 'Block'}
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Reviews Section */}
      <DashBoardReview item={item} />
    </div>
  );
};

export default RestuarantDetailsPage;
