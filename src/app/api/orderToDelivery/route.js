import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request)=>{


    const id = await request.json()

    console.log(id.session,'here is id ');
    
    const db = await connectDB();
    const foodRequest = db.collection('foodRequest');

    const data = await foodRequest.find({deliveryPersonId:id?.session,food_status:'Accepted'}).toArray()
    

    console.log(data);
    
    return NextResponse.json({
    data
    })
}