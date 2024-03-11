import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from "@vercel/analytics/react"
import { motion } from 'framer-motion';

export const metadata = {
  title: "Dhanush C.",
  description: "Portfolio for/by Dhanush Reddy Chilakala",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} selection:bg-[#f51919] selection:bg-opacity-55`} lang="en">
      <body>
      
        {children}
        
      </body>
    </html>
  );
}
