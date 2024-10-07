"use client";

import React, { useState, useEffect, useContext } from "react";
import FavoriteBtn from "./favoriteBtn/FavoriteBtn";
import FavoriteBtnFill from "./favoriteBtn/FavoriteBtnFill";
import CartContext from "../Context/CartContext";

const MenuCard = ({item}) => {
  const { addItemToCart } = useContext(CartContext);
  const { _id, brand, description, image, foodName, price } = item || {};

  const oldPrice = (price + 5).toFixed(2);
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading]=useState(true)
  const userId = "66fc284611040dc9a85fce72"; //to do

  useEffect(() => {
    const fetchUserFavorites = async () => {
      setLoading(true)
      const response = await fetch(`/api/user/${userId}`);
      if (response.ok) {
        const userData = await response.json();
        const isFavorite = userData.favorites.includes(_id);
        setFavorite(isFavorite);
      }
      setLoading(false)
    };
    
    fetchUserFavorites();
  }, [_id, userId]);

  const addToCartHandler = () => {
    addItemToCart({
      product: item._id,
      brand: item.brand,
      category: item.category,
      image: item.image,
      foodName: item.foodName,
      price: item.price,
    });
  };

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
          <p className="text-lg font-medium">Brand: {brand}</p>
          <p className="flex gap-6 text-lg font-medium">
            Price: $ {price}
            <span className="text-red-400">
              <del>$ {oldPrice}</del>
            </span>
          </p>
          <div className="flex items-center justify-between">
            <div className="card-actions flex gap-8 mt-4">
              <button
                className="btn btn-outline border-[#EA6A12] hover:border-[#EA6A12] text-[#EA6A12] hover:bg-[#EA6A12]"
                onClick={addToCartHandler}
              >
                Add To Cart
              </button>
              <button className="btn bg-[#EA6A12] text-white hover:bg-transparent hover:border-[#EA6A12] hover:text-[#EA6A12]">
                Buy Now
              </button>
            </div>
            <div className="mt-5 mr-5">
              {loading?"":favorite ? (
                <FavoriteBtnFill
                  setFavorite={setFavorite}
                  favorite={favorite}
                  productId={_id}
                />
              ) : (
                <FavoriteBtn
                  setFavorite={setFavorite}
                  favorite={favorite}
                  userId={userId}
                  productId={_id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
