import { connectDB } from "@/app/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async(request)=>{


    try {
        
        const { searchParams } = new URL(request.url);
    let currentPage = parseInt(searchParams.get('currentPage')) || 1;
    console.log(currentPage,'currentpage');
    const skip = (currentPage - 1) * 6;
    console.log(skip,"skp");
const db = await connectDB();
const restrurentCollection = db.collection('allRestaurant');
const result =await restrurentCollection.find().limit(6).skip(skip).toArray()
return NextResponse.json({

result:result

})

    } catch (error) {
        return NextResponse.json(

{

    status:'400',
    statusText:'something went wrong',
    error:error
}

        )
    }
}