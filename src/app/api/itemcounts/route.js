import { connectDB } from "@/app/lib/connectDB"
// import corsMiddleware from "@/app/lib/cors"
import { NextResponse } from "next/server"

export const GET = async(request)=>{


    try {
      // await corsMiddleware(request, NextResponse);
        const {searchParams} = new URL(request.url)
        let currentPage = parseInt(searchParams.get('page')) || 1;
        let perPage = parseInt(searchParams.get('size')) || 10;
        const category = searchParams.get('filter');
        const brand = searchParams.get('brand');
        const search = searchParams.get('search')


        
    let query = {};

    if (category) {
      query.category = category;
    }

    if (brand) {
      query.brand = brand;
    }

    if(search){
      query.foodName = {$regex: search, $options:"i"}
    }

   
    currentPage = Math.max(1, Math.ceil(currentPage)); 
    perPage = Math.max(1, Math.ceil(perPage)); 

    const skip = (currentPage - 1) * perPage;


        const db =await connectDB();
        const foodCollection = db.collection('allFoods')

        const result = await foodCollection.countDocuments( query)

        return NextResponse.json({count:result})
        
    } catch (error) {
       return NextResponse.json({
status:404,
statusText:"something went wrong",
error:error.message


        })
    }


}