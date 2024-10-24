import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const deliveryManCollection = db.collection("allDeliveryMan");
    const result = await deliveryManCollection.find().toArray();

    return NextResponse.json({
      status: 200,
      result: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      statusText: "Something went wrong",
      error: error.message,  
    });
  }
};
export const PATCH = async (request) => {
  try {
    const db = await connectDB();
    const deliveryManCollection = db.collection("allDeliveryMan");
    
    const body = await request.json();
    const { slug, status } = body;

    const updateResult = await deliveryManCollection.updateOne(
      { slug: slug }, // Find by slug
      { $set: { status: status || 'active' } }  
    );

    if (updateResult.modifiedCount === 0) {
      return NextResponse.json({
        status: 404,
        statusText: "No delivery man found with the provided slug.",
      });
    }

    return NextResponse.json({
      status: 200,
      statusText: "Delivery man's status updated successfully.",
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      statusText: "Something went wrong",
      error: error.message,
    });
  }}