import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

// Dynamic GET request to fetch a specific restaurant by name
export const GET = async (req, { params }) => {
  const { slug } = params; 
 

  try {
    const db = await connectDB();
    const restaurantCollection = db.collection("allRestaurant");

    // Search for a restaurant with a matching name (case-insensitive)
    const restaurant = await restaurantCollection.findOne({ slug: { $regex: new RegExp(slug, 'i') } });

    if (!restaurant) {
      return NextResponse.json({
        status: "404",
        statusText: "Restaurant not found",
        error: `No restaurant found with the name ${slag}`,
      });
    }

    return NextResponse.json({
      status: "200",
      result: restaurant,
    });

  } catch (error) {
    return NextResponse.json({
      status: "400",
      statusText: "Something went wrong",
      error: error.message,
    });
  }
};
