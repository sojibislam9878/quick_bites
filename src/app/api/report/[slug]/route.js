import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
  try {
    const { slug } = params; // Get slug from params
    const db = await connectDB();
    const restaurantCollection = db.collection('allRestaurant');

    // Parse the request body
    const { report } = await req.json();

    // Validate the input data
    if (!report) {
      return NextResponse.json({ status: '400', message: 'Invalid data' });
    }

    // Find the restaurant by slug
    const restaurant = await restaurantCollection.findOne({ slug });

    if (!restaurant) {
      return NextResponse.json({ status: '404', message: 'Restaurant not found' });
    }

    // Prepare the new report
    const newReport = { report, date: new Date() };

    // Update the restaurant with the new report
    const updatedReport = [...(restaurant.report || []), newReport]; // Corrected newReview -> newReport
    await restaurantCollection.updateOne(
      { slug }, 
      { $set: { report: updatedReport } }
    );

    return NextResponse.json({ status: '200', message: 'Report added', report: updatedReport });

  } catch (error) {
    console.error('Error adding report:', error); // Log the error for debugging
    return NextResponse.json({ status: '500', message: 'Something went wrong', error: error.message });
  }
};
