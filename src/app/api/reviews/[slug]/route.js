import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const db = await connectDB();
    const restaurantCollection = db.collection('allRestaurant');

    const { slug } = params; // Get the slug from URL params

    // Find the restaurant by slug
    const restaurant = await restaurantCollection.findOne({ slug });

    if (!restaurant) {
      return NextResponse.json({ status: '404', message: 'Restaurant not found' });
    }

    // Return restaurant details and reviews
    return NextResponse.json({ status: '200', restaurant: restaurant, reviews: restaurant.reviews || [] });
  } catch (error) {
    return NextResponse.json({ status: '500', message: 'Something went wrong', error: error.message });
  }
};
