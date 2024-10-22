import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import bcrypt from "bcrypt";
import { connectDB } from "@/app/lib/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


export const handler = NextAuth({
  secret: "process.env.NEXT_PUBLIC_AUTH_SECRET", 
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    rolling: false,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {  },
        password: {  },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Missing email or password");
        }

        const db = await connectDB();
        const currentUser = await db.collection("allUser").findOne({ email });
        console.log('currentUser',currentUser)
        if (!currentUser) {
          throw new Error("No user found with that email");
        }

        const passwordMatched = bcrypt.compareSync(password, currentUser.password);
        if (!passwordMatched) {
          throw new Error("Incorrect password");
        }

        console.log(currentUser,'here is  current user');
        

        return { id: currentUser._id, email: currentUser.email ,image:currentUser.image ,role:currentUser.role,name:currentUser.name }; // Ensure this matches the user object
      },
    },
  
  
  ),  GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  GoogleProvider({
    clientId:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  }),
    

  ],

  pages: {
    signIn: "/login",
    signOut:"/"
  },
  callbacks: {
    async signIn({ user }) {
      const db = await connectDB();
      const existingUser = await db.collection("allUser").findOne({ email: user.email });

 
      if (!existingUser) {
        await db.collection("allUser").insertOne({
          email: user.email,
          name: user.name,
          image: user.image,
          role: "user",
        });
      }
      
      return true; // Proceed with the login
    },
      
//       console.log(data);
      
//       const db = await connectDB();
      

//       const existingUser = await db.collection("allUser").findOne({ email: data?.email });
// console.log(existingUser,user ,'this is what i want to sign in')

//       if (!existingUser) {
//         await db.collection('allUser').insertOne({
//           email: user?.email,
//           name: user?.name,
//           image: user?.image,
//           role: 'user', // Set role as user
//         });
//       }

//       return true; // Return true to sign in the user
//     },
    

async session({ session, token }) {
  // Add custom fields to the session object
  session.user.name = token.name;
  session.user.email = token.email;
  session.user.image = token.image;
  session.user.role = token.role; // Include the role in the session
  return session;
},

async jwt({ token, user }) {
  const db = await connectDB();

  // If there is a user object (i.e., sign-in event), get the role from MongoDB
  if (user) {
    const currentUser = await db.collection("allUser").findOne({ email: user.email });
    
    // Include the role in the token
    if (currentUser) {
      token.image=currentUser.image;
      token.role = currentUser.role;
    }
  }

  return token;
    },}
});

export { handler as GET, handler as POST }; 
