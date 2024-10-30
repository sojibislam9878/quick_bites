import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const POST=async (request)=>{


const data=await request.json();
const db=await connectDB()
const Transaction = db.collection("Transaction");
const query={cus_email:data?.email}
const transactionData= await Transaction.find(query).toArray();
if(transactionData){
   return  NextResponse.json(transactionData)
}



}