import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST=async (request)=>{
    const data=await request.json();
    console.log('data',data)

    const db = await connectDB();
    const couponCollation = db.collection('couponsData');
  
   
   const add= await couponCollation.insertOne(data);
   if (add) {
    return NextResponse.json({ message: 'Coupon updated successfully' }, { status: 200 });
    
   }
    
    
}