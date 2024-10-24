import Lottie from 'lottie-react';
import React from 'react';
import data from '../../../../public/assets/lodarJson/animation'
const CheckoutSpin = () => {
    return (
        <div className=' w-full bg-opacity-25 left-0 fixed top-0 bg-slate-900  font-white   h-svh     mx-auto items-center justify-center  text-justify flex '>
              <Lottie className='w-40 ' animationData={data}></Lottie>
              </div> 
    );
};

export default CheckoutSpin;