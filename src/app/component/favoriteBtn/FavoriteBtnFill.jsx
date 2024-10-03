import React from 'react';
import { FaHeart } from 'react-icons/fa';

const FavoriteBtnFill = ({setFavorite, favorite}) => {
  
    const handleRemove = () => {
        console.log("removed");
    };

    const handleClick = () => {
        setFavorite(!favorite); 
        handleRemove();       
    };
    return (
        <div>
            <span onClick={handleClick} className='text-3xl text-rose-500 hover:cursor-pointer'><FaHeart /></span>
        </div>
    );
};

export default FavoriteBtnFill;