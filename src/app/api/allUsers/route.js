import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

// GET handler to fetch delivery men based on role and status
export const GET = async (request) => {
    try {
        const { searchParams } = new URL(request.url);
        const role = searchParams.get("role");
        const status = searchParams.get("status");

        const db = await connectDB();
        const usersCollection = db.collection("allUser");
        
        // Set up the query object
        let query = { role }; // Start with role filter

        // Apply status filter based on the selected tab
        if (status === "pending") {
            query.status = "pending";
        } else if (status === "blocked") {
            query.status = "blocked";
        } else if (status === "all") {
            query.status = "active"; // Active users for 'all' tab
        }

        const result = await usersCollection.find(query).toArray();
        return NextResponse.json({ status: 200, result });
    } catch (error) {
        return NextResponse.json({ status: 400, error: error.message });
    }
};

// PATCH handler to update the status of a delivery man using email
export const PATCH = async (request) => {
    try {
        const db = await connectDB();
        const usersCollection = db.collection("allUser");

        const body = await request.json();
        const { email, status } = body;

        const updateResult = await usersCollection.updateOne(
            { email }, // Query by email
            { $set: { status: status || "active" } }
        );

        if (updateResult.modifiedCount === 0) {
            return NextResponse.json({ status: 404, statusText: "No user found with provided email." });
        }

        return NextResponse.json({ status: 200, statusText: "Status updated successfully." });
    } catch (error) {
        return NextResponse.json({ status: 400, error: error.message });
    }
};
