import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const SingleRestruent = ({ data }) => {
  return (
    <div className=" mx-auto w-full md:w-auto">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6  justify-between items-center space-y-4 sm:space-y-0">
        
        <div className="space-x-4">
          {/* Image */}
          <div>
            <img
              src={data?.image}
              alt={data?.name}
              className=" w-full md:w-[500px] h-[200px] object-cover rounded-md border-2 border-gray-300"
            />
          </div>

          {/* Restaurant Details */}
          <div className="pl-2 mt-2">
            {/* Rating */}
            <div className="rating mb-2 flex items-center">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
            </div>

            <h1 className="text-xl font-semibold text-gray-800">{data?.name}</h1>
            <p className="italic text-gray-500">{data?.location}</p>

            <div className="flex text-sm text-gray-600 space-x-2 mt-1">
              <p>{data?.locationDetail}.</p>
              <p className="text-red-500 -ml-2 font-medium">Opens at {data?.opensAt}</p>
            </div>

            {/* Mobile Button */}
            <Link href={`/allRestaurant/${data?.name}`} className="btn w-full mt-4 sm:hidden bg-rose-500 text-white font-medium rounded-md py-2 shadow hover:bg-rose-600 transition duration-300">
              View Menu
            </Link>
          </div>
        </div>

        {/* Desktop Button */}
    <div>
    <div className="hidden sm:block ml-auto">
          <Link href={`/allRestaurant/${data?.slug}`} className="btn bg-rose-500 text-white font-medium rounded-md py-2 px-4 shadow w-full mt-8 hover:bg-rose-600 transition duration-300">
            View Menu
          </Link>
        </div>
    </div>
      </div>
    
    </div>
  );
};

SingleRestruent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SingleRestruent;
