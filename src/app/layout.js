import localFont from "next/font/local";
import {Poppins}  from "next/font/google"
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NextTopLoader from 'nextjs-toploader';
import Loading from "./components/Loading"

import { StateContext } from "./Context/StateContext";




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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});



export const metadata = {
  title: "Plastic Punch",
  description: "An NGO dedicated to the fighting against plastic pollution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`font- ${poppins.className}`} >
        <Loading>
      <StateContext> 
      <NextTopLoader 
      />
            <Nav/> 
            {children}
            <Footer/>
        </StateContext>
        </Loading>
        
      </body>
    </html>
  );
}
