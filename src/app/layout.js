/* eslint-disable @next/next/no-page-custom-font */
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Quick Bites",
  description: "Get your food as fast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <head>

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
          rel="stylesheet"
        />

      </head>   
         <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
