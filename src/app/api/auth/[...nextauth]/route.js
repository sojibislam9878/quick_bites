import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/lib/connectDB";

// Configure NextAuth.js options
const authOptions = {
  // secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { },
        password: { },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};
        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          throw new Error("No user found with this email");
        }

        const passwordMatched = await bcrypt.compare(password, currentUser.password);
        if (!passwordMatched) {
          throw new Error("Incorrect password");
        }

        return { id: currentUser._id, name: currentUser.name, email: currentUser.email };
      },
    }),
    GoogleProvider({
      // clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      // clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      // clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      // clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { email } = user;
        const db = await connectDB();
        const userCollection = db.collection("users");
        const userExist = await userCollection.findOne({ email });
        if (!userExist) {
          await userCollection.insertOne({ name: user.name, email: user.email, image: user.image });
        }
      }
      return true;
    },
  },
};

// Export the NextAuth.js handler as named GET and POST functions
export async function GET(request) {
  return NextAuth(authOptions)(request);
}

export async function POST(request) {
  return NextAuth(authOptions)(request);
}
