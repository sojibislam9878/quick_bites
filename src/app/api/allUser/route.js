import { connectDB } from "@/app/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async()=>{


    try {
        
const db = await connectDB();
const restrurentCollection = db.collection('allUser');
const result =await restrurentCollection.find().toArray()
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