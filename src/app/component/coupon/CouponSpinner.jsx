import Lottie from 'lottie-react';
import React from 'react';
import data from '../../../../public/assets/lodarJson/animation'
const CouponSpinner = () => {
    return (
        <div className='  bg-opacity-25 fixed top-0 bg-slate-900  font-white left-1/2 -translate-x-1/3   h-svh w-full    mx-auto items-center justify-center  text-justify flex '>
              <Lottie className='w-40 ' animationData={data}></Lottie>
              </div> 
    );
};

export default CouponSpinner;