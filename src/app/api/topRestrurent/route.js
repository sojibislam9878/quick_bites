import { connectDB } from "@/app/lib/connectDB"

export const GET = async()=>{


try {
    const db =await connectDB();
    const topRestaurantCollection = db.collection("restaurant")
    const result = await topRestaurantCollection.find().toArray();
    return Response.json({result})
    
} catch (error) {

    console.log(error);
    return Response.json({message: "something went wrong"},{error: error.message}, {status:200})
}
}