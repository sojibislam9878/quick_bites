import NextAuth from "next-auth";
'use client'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/lib/connectDB";

const handler = NextAuth({
  secret: "process.env.NEXT_PUBLIC_AUTH_SECRET", // Fixed the secret
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    rolling: false,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Missing email or password");
        }

        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          throw new Error("No user found with that email");
        }

        const passwordMatched = bcrypt.compareSync(password, currentUser.password);
        if (!passwordMatched) {
          throw new Error("Incorrect password");
        }

        return { id: currentUser._id, email: currentUser.email }; // Ensure this matches the user object
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST }; // Ensure the export is correct
