import { connectDB } from "@/app/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async(req, res) =>{

    const data = await req.json();
    console.log('sdfasdf',data);

    try {

        const db = await connectDB();

        const userCollection = db.collection('users');

        const existingUsers = await userCollection.findOne({email: data.email});

        const encodePassword =bcrypt.hashSync(data.password, 18)
        
        if(existingUsers){
            return Response.status(409).json({message: 'Email already exists'})
        }
        
        const result = await userCollection.insertOne({...data,password:encodePassword});
        
       return Response.status(200).json({message: 'User created successfully'})

        
    } catch (error) {
        console.log(error);
        return Response.status(500).json({message: 'Something went wrong', error})

    }





}