import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  style: "normal",
  variable: "--poppins", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className="bg-[#1E1E1E]">
    //   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    //     <Menu title={"Ryse"}/>
    //     <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"}/>
    //     {children}
    //   </body>
    // </html>
    
    <html lang="en" className="bg-[#1E1E1E]">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
