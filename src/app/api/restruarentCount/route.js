
import { connectDB } from "@/app/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async()=>{

    try {


        const db = await connectDB();
        const restrurentCollection = db.collection('allRestaurant')
        const result =await restrurentCollection.countDocuments()
        return NextResponse.json({
            count:result,
            status:200,
            messsage:'success'
        })
        
    } catch (error) {
    return    NextResponse.json({
error:error,
message:error?.message,
status:400

        })
    }
}