'use client'
import type { Metadata } from "next";
import { Inter , Public_Sans} from "next/font/google";
import './globals.css'
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });
const public_sans = Public_Sans({subsets:['latin-ext']})
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (      
    <html lang="en">

      <body className={`${public_sans.className} bg-stone-200`}>
        <NextUIProvider>
      <div className="min-w-screen py-5 shadow-sm bg-stone-50">
        <nav className="ml-[2rem] font-bold text-xl text-cyan-500">
        carde
        </nav>
      </div>

        {children}        


      
          </NextUIProvider>
      </body>
    </html>
  );
}
