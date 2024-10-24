// Update method to change status from 'pending' to 'active'
import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

// POST Method: Add a restaurant
export const POST = async (request) => {
    try {
        const db = await connectDB();
        const restaurantCollection = db.collection('allRestaurant');

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

// GET Method: Retrieve all restaurants with 'pending' status
export const GET = async () => {
    try {
        const db = await connectDB();
        const restaurantCollection = db.collection('allRestaurant');

        // Find all restaurants with status 'pending'
        const pendingRestaurants = await restaurantCollection.find({ status: 'pending' }).toArray();

        return NextResponse.json({
            status: 200,
            statusText: "Pending restaurants fetched successfully",
            restaurants: pendingRestaurants,
        });

    } catch (error) {
        return NextResponse.json({
            status: '400',
            statusText: 'Something went wrong',
            error: error.message,
        });
    }
};

// PATCH method: Update restaurant status to 'active'
export const PATCH = async (request) => {
    try {
        const db = await connectDB();
        const restaurantCollection = db.collection('allRestaurant');

        const body = await request.json();
        const { slug } = body; // Assuming slug is passed to identify restaurant

        const result = await restaurantCollection.updateOne(
            { slug },
            { $set: { status: 'active' } }
        );

        return NextResponse.json({
            status: 200,
            statusText: "Restaurant status updated to active",
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
