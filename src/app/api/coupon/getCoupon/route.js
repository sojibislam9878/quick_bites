import { connectDB } from "@/app/lib/connectDB"
import { NextResponse } from "next/server";

export const POST = async (request)=>{



    const db = await connectDB();
    const couponCollation = db.collection("couponsData");  
    
    const data = await request.json();
    console.log(data,'data from client');

    const coupon=data?.coupon
    console.log(coupon,'get coupon');
    

    const couponData= await couponCollation.findOne({code:coupon})
    console.log(couponData,'data from database ');
    
if(couponData){
    return NextResponse.json({couponData})

}
else{
    return NextResponse.json({message:'invalid'})
 
}
}