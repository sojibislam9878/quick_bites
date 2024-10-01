import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const SingleRestruent = ({ data }) => {
  console.log(data);
  return (
    <div className="card mt-16 bg-base-100  border-2 h-[400px]">
    <figure>
      <img
        src={data?.image}
        alt="Shoes"  className='w-full'/>
        <p ></p>
    </figure>
    <div className="p-4">
    <div className='flex justify-between w-full items-center'>
    <h2 className="card-title">{data?.name}</h2>
    <p className='flex gap-4 items-center'>
<FaStar className='text-yellow-500'/>
<span>4.4</span>

    </p>
    </div>
      <p>{data?.categories
      }</p>
      <Link href={`/allRestaurant/${data?.name}`} className="card-actions justify-end">
        <button className="btn bg-rose-500">View Menu</button>
      </Link>
    </div>
  </div>
  );
};

SingleRestruent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SingleRestruent;
