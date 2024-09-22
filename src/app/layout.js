/* eslint-disable @next/next/no-page-custom-font */
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Poppins } from 'next/font/google';



const poppins = Poppins({
  subsets: ['latin'], // Specify subsets
   weight: ['400', '500', '600', '700','800','900'],
  variable: '--font-poppins', // Custom variable name
  display: 'swap', // Font display strategy
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <head>

      

      </head>   
         <body
      className={`${poppins.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
