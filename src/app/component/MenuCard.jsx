"use clint"
import React, { useState } from 'react';
import FavoriteBtn from './favoriteBtn/FavoriteBtn';
import FavoriteBtnFill from './favoriteBtn/FavoriteBtnFill';

const MenuCard = ({ item }) => {
    const {
        _id,
        brand,
        category,
        // createdAt,
        description,
        image,
        foodName,
        price,
        // ratings,
      } = item || {};

      const oldPrice = (price+5).toFixed(2)
      const [favorite, setFavorite] = useState(false)
      

    return (
        <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src={image}
            alt="food photo"
            className="h-[31rem] w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4 font-play bg-gradient-to-r from-[#EA6A12] to-[#fa9049] bg-clip-text text-transparent">
            {foodName}
          </h2>
          <p className="text-lg">{description}</p>
          {/* <p className="text-lg font-medium">Category: {category}</p> */}
          <p className="text-lg font-medium">Brand: {brand}</p>
          <p className="flex gap-6 text-lg font-medium">
            Price: $ {price}
            <span className="text-red-400">
              <del>$ {oldPrice}</del>
            </span>
          </p>
          {/* <div className="flex items-center justify-between">
            <p className="text-lg font-semibold flex gap-2 items-center">
              Rating: {ratings}{" "}
              <span className="material-symbols-outlined">star_half</span>
            </p>
            <p>
              Date: {date} Time:{time}
            </p>
          </div> */}
          <div className='flex items-center justify-between'>
          <div className="card-actions flex gap-8 mt-4">
            <button className="btn btn-outline border-[#EA6A12] hover:border-[#EA6A12] text-[#EA6A12] hover:bg-[#EA6A12]">
              Add To Cart
            </button>
            <button className="btn bg-[#EA6A12]  text-white  hover:bg-transparent hover:border-[#EA6A12] hover:text-[#EA6A12]">
              Buy Now
            </button>
          </div>
          <div className='mt-5 mr-5'>
            {favorite ? <FavoriteBtnFill setFavorite={setFavorite} favorite={favorite}></FavoriteBtnFill> : <FavoriteBtn setFavorite={setFavorite} favorite={favorite}></FavoriteBtn>}
            
          </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MenuCard  