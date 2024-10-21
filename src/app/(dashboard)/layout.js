
import { Poppins } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import QueryProvider from "../component/QueryProvider/QueryProvider";
import links from "./component/Links";
import { IoMenu } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import Auth from "../session/Auth";
import { SessionProvider } from 'next-auth/react';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({ children }) {
  const role = "admin"; 

  return (
    <html lang="en" data-theme="light" className="bg-gray-100 text-gray-900 ">
      <body className={`${poppins.variable} antialiased`}>

        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <QueryProvider>
              <Auth>
              {children}
              </Auth>

            </QueryProvider>

            <label
              htmlFor="my-drawer-2"
              className="absolute top-4 left-4 bg-gray-500  text-xl p-2 rounded-full text-white drawer-button lg:hidden transition ease-in-out duration-300 hover:bg-[#bfa78f]"
            >
              <IoMenu />
            </label>
          </div>
          <div className="drawer-side">


            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay" />
            <ul className="menu bg-gray-200 shadow-lg shadow-blue-400 min-h-full w-80 p-4  rounded-r-lg">

              <Link href="/"><h1 className="text-2xl my-6 text-start font-bold text-orange-500">Quick Bites</h1>

              </Link>

              {links[role]?.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={` text-gray-500 text-xl font-bold py-2 px-4 rounded`}>
                    {link.icon}    {link.label}
                  </Link>
                </li>
              ))}



              <Link href="/" className="text-2xl my-6 text-start font-bold text-red-500 mt-[270px] flex items-center gap-2"><CiLogout />Logout

              </Link>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
