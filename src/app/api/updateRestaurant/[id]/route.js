import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// PATCH handler to update restaurant status
export const PATCH = async (request, { params }) => {
  const { id } = params; // Get the restaurant ID from the params

  // Get the status from the query string
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  // Validate that we have both the ID and status
  if (!id || !status) {
    return NextResponse.json({ error: 'Invalid ID or status' }, { status: 400 });
  }

  try {
    // Connect to the database
    const db = await connectDB();
    const restaurantCollection = db.collection('allRestaurant');

    // Query to find the restaurant by its ObjectId
    const query = { _id: id };

    // Update the restaurant's status
    const update = { $set: { status } };

    // Perform the update operation
    const result = await restaurantCollection.updateOne(query, update);

    
  } catch (error) {
    console.error('Error updating restaurant status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
