import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    
 
    const db = await connectDB();
    const couponCollation = db.collection('couponsData');


    const result = await couponCollation.find().toArray();

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      statusText: "Something went wrong",
      error: error.message,
    });
  }
};
