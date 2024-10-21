import React from 'react';
import { FaHeart } from 'react-icons/fa';

const FavoriteBtnFill = ({setFavorite, favorite, productId}) => {
  
    const removeFromFavorites = async () => {
        const   userId="66fc284611040dc9a85fce72" 
        const response = await fetch('/api/favorite', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, productId }),
        });
      
        if (response.ok) {
            console.log(response);
        } else {
          console.error("Error removing from favorites:", response.statusText);
        }
      };

    const handleClick = () => {
        setFavorite(!favorite); 
        removeFromFavorites();       
    };
    return (
        <div>
            <span onClick={handleClick} className='text-3xl text-rose-500 hover:cursor-pointer'><FaHeart /></span>
        </div>
    );
};

export default FavoriteBtnFill;