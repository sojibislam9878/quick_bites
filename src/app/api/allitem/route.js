import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    
    let currentPage = parseInt(searchParams.get('page')) || 1;
    let perPage = parseInt(searchParams.get('size')) || 10;
    const category = searchParams.get('filter');
    const brand = searchParams.get('brand');
    const search = searchParams.get('search')
    const sort = searchParams.get('sort')

  
   
    let query = {};
    let sortOption = {}

    if(sort === "low"){
      
sortOption.price = 1
    }
    if(sort === "high"){
      sortOption.price = -1

    }

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

 
    const db = await connectDB();
    const foodCollection = db.collection('allFoods');


    const result = await foodCollection.find(query).skip(skip).limit(perPage).sort(sortOption).toArray();

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      statusText: "Something went wrong",
      error: error.message,
    });
  }
};
