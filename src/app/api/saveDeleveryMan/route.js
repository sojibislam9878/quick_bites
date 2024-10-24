
import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const db = await connectDB();
        const deliveryManCollection = db.collection('allDeliveryMan');

        const body = await request.json();

        // Add the status field with default value 'pending'
        const deliveryManData = {
            ...body,
            status: 'pending',
        };

        const result = await deliveryManCollection.insertOne(deliveryManData);

        return NextResponse.json({
            status: 200,
            statusText: "Delivery Man added successfully",
            result: result,
        });

    } catch (error) {
        return NextResponse.json({
            status: 400,
            statusText: 'Something went wrong',
            error: error.message,
        });
    }
};
