import { connectDB } from "@/app/lib/connectDB";

export const POST = async(req, {params})=>{

const {slug} = params;
const db = connectDB();
const restaurantCollection = db.collection('allRestaurant');
const { report } = await req.json();
if (!report) {
    return NextResponse.json({ status: '400', message: 'Invalid data' });
  }

}