
import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { userId } = params;

  try {
    const db = await connectDB();
    const userCollection = db.collection("allUser");

    const userObjectId = new ObjectId(userId);

    const user = await userCollection.findOne({ _id: userObjectId });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const { password, ...userData } = user;

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};
