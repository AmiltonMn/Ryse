import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";

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
    <html lang="en" className="bg-[#1E1E1E]">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Menu title={"Ryse"}/>
        <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"}/>
        {children}
      </body>
    </html>
  );
}