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
        console.log(currentUser)
        if (!currentUser) {
          throw new Error("No user found with that email");
        }

        const passwordMatched = bcrypt.compareSync(password, currentUser.password);
        if (!passwordMatched) {
          throw new Error("Incorrect password");
        }

        return { id: currentUser._id, email: currentUser.email ,image:currentUser.image }; // Ensure this matches the user object
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
    async session({ session, token, user }) {
      // Add custom fields to the session object
      session.user.email = token.sub;  // Example: Add user ID
      session.user.image =token.image;  // Example: Add a user role
      session.customInfo = 'Some custom data'; // Example: Add custom data
      return session;
    },
    async jwt({ token, user }) {
      // Persist the user ID in the token
      if (user) {
        token.sub = user.email;
        token.image = user.image;
      }
      return token;
    },}
});

export { handler as GET, handler as POST }; 
