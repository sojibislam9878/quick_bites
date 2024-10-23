import { connectDB } from "@/app/lib/connectDB";

export const POST = async(req, {params})=>{

try {
    const {slug} = params;
const db = connectDB();
const restaurantCollection = db.collection('allRestaurant');
const { report } = await req.json();
if (!report) {
    return NextResponse.json({ status: '400', message: 'Invalid data' });
  }
  const restaurant = await restaurantCollection.findOne({ slug });
  if (!restaurant) {
    return NextResponse.json({ status: '404', message: 'Restaurant not found' });
  }

  const newAdminReport = { report, date: new Date() };
  const updatedAdminReport = [...(restaurant.adminReport || []), newAdminReport]; 
  await restaurantCollection.updateOne(
    { slug }, 
    { $set: { adminReport: updatedAdminReport } }
  );
  return NextResponse.json({ status: '200', message: 'Report added', report: updatedReport });
} catch (error) {
    console.error('Error adding report:', error); 
    return NextResponse.json({ status: '500', message: 'Something went wrong', error: error.message });
}
}