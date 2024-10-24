import { connectDB } from "@/app/lib/connectDB"
import { NextResponse } from "next/server";

export const POST = async (request)=>{

    const db = await connectDB();
    const areaLocation = db.collection('Location')

const data= await request.json()


console.log('data',data.region,data)



if (data?.region) {
    const cityData = await areaLocation?.aggregate([
        { $match: { name: data?.region } },            // Match the document by its name (e.g., "Dhaka")
        { $unwind: "$cities" },                          // Unwind the cities array
        { $project: { city: "$cities.name", _id: 0 } }   // Project only the city names, exclude _id
      ]).toArray();
      return NextResponse.json(cityData)

    
}
else{

    const result = await areaLocation.findOne(
        { "cities.name": data?.city },
        { projection: { "cities.$": 1 } }
      );
  
      if (result && result.cities.length > 0) {
        console.log(result?.cities[0]?.areas,'cities.name');
        
      return  NextResponse.json(result?.cities[0]?.areas);  // Send back the areas of the matched city
      }

}
    

   



}