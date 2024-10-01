import React from 'react';
import { FaHeart } from 'react-icons/fa';

const FavoriteBtnFill = ({setFavorite, favorite}) => {
    return (
        <div>
            <span onClick={()=> setFavorite(!favorite)} className='text-3xl text-rose-500 hover:cursor-pointer'><FaHeart /></span>
        </div>
    );
};

export default FavoriteBtnFill;