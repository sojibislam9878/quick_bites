import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const FavoriteBtn = ({ setFavorite, favorite }) => {
    const handleAdd = () => {
        console.log("added"); 
    };

    const handleClick = () => {
        setFavorite(!favorite); 
        handleAdd();       
    };

    return (
        <div>
            <span 
                onClick={handleClick} 
                className='text-3xl text-rose-500 hover:cursor-pointer'
            >
                <FaRegHeart />
            </span>
        </div>
    );
};

export default FavoriteBtn;