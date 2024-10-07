// /pages/api/favorites.js
import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb'; 

export const POST = async (request) => {
  const { userId, productId } = await request.json();

  try {
    const db = await connectDB(); 
    const userCollection = db.collection("allUser"); 

    const userObjectId = new ObjectId(userId);

  
    await userCollection.updateOne(
      { _id: userObjectId },
      { $addToSet: { favorites: productId } }
    );

    return NextResponse.json({ message: 'Added to favorites' }, { status: 200 });
  } catch (error) {
    console.error('Error adding to favorites:', error); 
    return NextResponse.json(
      { message: 'Something Went Wrong', error },
      { status: 500 }
    );
  }
};

// Handler for removing a favorite product
export const DELETE = async (request) => {
  const { userId, productId } = await request.json();

  try {
    const db = await connectDB(); 
    const userCollection = db.collection("allUser"); 

    const userObjectId = new ObjectId(userId);

    await userCollection.updateOne(
      { _id: userObjectId },
      { $pull: { favorites: productId } } // Remove productId from favorites
    );

    return NextResponse.json({ message: 'Removed from favorites' }, { status: 200 });
  } catch (error) {
    console.error('Error removing from favorites:', error); 
    return NextResponse.json(
      { message: 'Something Went Wrong', error },
      { status: 500 }
    );
  }
};
