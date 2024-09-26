import React from 'react';
import PropTypes from 'prop-types';


const SingleRestruent = ({data}) => {

  return (
    <div className='xl:w-[50%] lg:w-[80%]  mx-auto '>
   <div className='bg-white py-5 px-8 sm:flex justify-between items-center'>

   <div className='flex '>
    <div >

      <img src={data?.image} alt={data?.name} className='w-[130px] p-2 border-2'/>
    </div>


<div className='pl-6 mt-2'>

<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>

<h1 className='text-xl  '>{data?.name}</h1>
<p className='italic text-gray-500'>{data?.location}</p>

<div className='flex text-sm'>

  <p className='text-gray-500'>{data?.locationDetail}.</p>
  <p className='text-red-600'>  Opens at { data?.opensAt}</p>

</div>
<div className=''>
<button className='btn  w-full mt-4 sm:hidden bg-rose-500 text-white'>View Menu</button>

   </div>
</div>

   </div>
   <div className='hidden sm:block'>
<button className='btn   bg-rose-500 text-white'>View Menu</button>

   </div>
   </div>

    </div>
  );
};

SingleRestruent.propTypes = {
  data:PropTypes.object.isRequired
};

export default SingleRestruent;