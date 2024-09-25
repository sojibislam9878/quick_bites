import { connectDB } from "@/app/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async()=>{


try {
    const db =await connectDB();
    const topRestaurantCollection = db.collection("restaurant")
    const result = await topRestaurantCollection.find().toArray();
    return NextResponse.json({result})
    
} catch (error) {

    console.log(error);
    return NextResponse.json({message: "something went wrong"},{error: error.message}, {status:200})
}
}