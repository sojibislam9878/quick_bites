/* eslint-disable @next/next/no-page-custom-font */

"use clients"
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Poppins } from 'next/font/google';
import { SessionProvider } from "next-auth/react";
import Auth from "../session/Auth";



const poppins = Poppins({
  subsets: ['latin'], // Specify subsets
   weight: ['400', '500', '600', '700','800','900'],
  variable: '--font-poppins', // Custom variable name
  display: 'swap', // Font display strategy
});

export const metadata = {
  title: 'Quick Bites',
  description: 'Generated by Next.js',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" />
      </head>   
      <Auth>
         <body
      className={`${poppins.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
      </Auth>
    </html>
  );
}
