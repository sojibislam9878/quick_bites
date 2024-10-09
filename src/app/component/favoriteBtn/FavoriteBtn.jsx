import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const FavoriteBtn = ({ setFavorite, favorite , productId}) => {


    const addToFavorites = async () => {

     const   userId="66fc284611040dc9a85fce72" 
        const response = await fetch('/api/favorite', { // Ensure this matches the API route
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, productId }), // Ensure you're sending the correct data
        });
      
        if (response.ok) {
          console.log(response);
        } else {
          console.error("Error adding to favorites:", response.statusText);
        }
      };
    const handleClick = () => {
        setFavorite(!favorite); 
        addToFavorites();       
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