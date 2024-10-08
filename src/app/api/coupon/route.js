import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
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



export const POST = async (request)=>{
  const data=await request.json();
  console.log('data',data)
  
  const db = await connectDB();
  const couponCollation = db.collection('couponsData');
  const query = {
    _id:new ObjectId(data?.id)
  }
  let UpdateData
 if (data.value.toLowerCase()=='active') {
   UpdateData={
    $set:{
      status: 'active'
    }
  }
  
 } else {
   UpdateData={
    $set:{
      status: 'deactive'
    }
  }
  
 }
  const result = await couponCollation.updateOne(query,UpdateData)
  if(result){
    return NextResponse.json({result})
  }

  
  }
