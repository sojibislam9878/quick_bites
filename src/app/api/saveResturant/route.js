import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const db = await connectDB();
        const restaurantCollection = db.collection('allRestaurant');;

        const body = await request.json();

        // Add the status field with default value 'pending'
        const restaurantData = {
            ...body,
            status: 'pending',
        };

        const result = await restaurantCollection.insertOne(restaurantData);

        return NextResponse.json({
            status: 200,
            statusText: "Restaurant added successfully",
            result: result,
        });

    } catch (error) {
        return NextResponse.json({
            status: '400',
            statusText: 'Something went wrong',
            error: error.message,
        });
    }
};
