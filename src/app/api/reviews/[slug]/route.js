import { connectDB } from "@/app/lib/connectDB"; 
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
  const { slug } = params; // Get the restaurant 'slug' from the request params
  try {
    const db = await connectDB();
    const restaurantCollection = db.collection('allRestaurant');

    // Parse the request body
    const { user, rating, comment } = await req.json();

    // Validate the input data
    if (!slug || !user || !rating || !comment) {
      return NextResponse.json({ status: '400', message: 'Invalid data' });
    }

    // Find the restaurant by slug
    const restaurant = await restaurantCollection.findOne({ slug });

    if (!restaurant) {
      return NextResponse.json({ status: '404', message: 'Restaurant not found' });
    }

    // Prepare the new review
    const newReview = { user, rating, comment, date: new Date() };
    
    // Update the restaurant with the new review
    const updatedReviews = [...(restaurant.reviews || []), newReview];
    await restaurantCollection.updateOne(
      { slug }, // Use slug to identify the restaurant
      { $set: { reviews: updatedReviews } }
    );

    return NextResponse.json({ status: '200', message: 'Review added', reviews: updatedReviews });
  } catch (error) {
    console.error('Error adding review:', error); // Log the error for debugging
    return NextResponse.json({ status: '500', message: 'Something went wrong', error: error.message });
  }
};
