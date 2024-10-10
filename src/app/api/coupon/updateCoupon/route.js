import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST= async (request)=>{

    const data=await request.json();
    console.log('data',data)

    const db = await connectDB();
    const couponCollation = db.collection('couponsData');
    const query={
        _id: new ObjectId(data?.id)
    }

    let UpdateData = {
        $set: {}
    };
    
    if (data?.price) {
        UpdateData.$set.discountValue = data?.price;
    }
    
    if (data?.start) {

        UpdateData.$set['validity.start']= data?.start;
    }
    
    if (data?.end) {
        UpdateData.$set['validity.end'] = data?.end;
    } 

    const result = await couponCollation.updateOne(query,UpdateData)
    if (result) {
        return NextResponse.json({result})
        
    }
  
    }