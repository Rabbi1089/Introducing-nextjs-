import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Nav/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Next Intro",
  description: "Introduction of next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" className={`${geistSans.variable} ${geistMono.variable} antialiased`}">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
