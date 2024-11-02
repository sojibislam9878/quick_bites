import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const foodOrder = db.collection("foodRequest");

    // Fetching all documents from the 'foodRequest' collection.
    const result = await foodOrder.find().toArray();

    // Corrected: Use NextResponse.json() to return the result with status 200.
    return NextResponse.json(
      { result: result },
      { status: 200, statusText: "success" }
    );
  } catch (error) {
    // Corrected: Include error.message for more descriptive error information.
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500, statusText: "something went wrong" }
    );
  }
};
