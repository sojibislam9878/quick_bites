import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {



    
    try {
        const db = await connectDB();
        const allUsersCollection = db.collection('allUser');

        const body = await request.json();
        const { email, ...deliveryManData } = body;

        // Find the user by email
        const user = await allUsersCollection.findOne({ email: email });

        if (!user) {
            return NextResponse.json({
                status: 404,
                statusText: 'User not found',
            });
        }

        // Check if the user is already a Delivery Man
        if (user.role === 'Delivery Man') {
            if (user.status === 'pending') {
                return NextResponse.json({
                    status: 300,
                    statusText: 'You have already applied as a Delivery Man. Please wait for approval.',
                });
            } else if (user.status === 'active') {
                return NextResponse.json({
                    status: 300,
                    statusText: 'You are already registered as a Delivery Man with us.',
                });
            } else if (user.status === 'blocked') {
                return NextResponse.json({
                    status: 300,
                    statusText: 'You were previously registered as a Delivery Man but were blocked. Please contact us for further assistance.',
                });
            }
        }

        // Update the user to Delivery Man with status pending
        const updatedData = {
            ...deliveryManData,
            role: 'Delivery Man',
            status: 'pending',
        };

        const result = await allUsersCollection.updateOne(
            { email: email },
            { $set: updatedData }
        );

        return NextResponse.json({
            status: 200,
            statusText: 'Delivery Man data updated successfully',
            result,
        });

    } catch (error) {
        return NextResponse.json({
            status: 400,
            statusText: 'Something went wrong',
            error: error.message,
        });
    }
};
