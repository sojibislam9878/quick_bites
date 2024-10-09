import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

// Dynamic GET request to fetch a specific restaurant by name
export const GET = async (req, { params }) => {
  const { name } = params; // Get the dynamic 'name' from the URL

  try {
    const db = await connectDB();
    const restaurantCollection = db.collection("allRestaurant");

    // Search for a restaurant with a matching name (case-insensitive)
    const restaurant = await restaurantCollection.findOne({ name: { $regex: new RegExp(name, 'i') } });

    if (!restaurant) {
      return NextResponse.json({
        status: "404",
        statusText: "Restaurant not found",
        error: `No restaurant found with the name ${name}`,
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
