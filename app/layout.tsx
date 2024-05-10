import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/header/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tour Architecture",
  description: "Tour Architecture offers a comprehensive range of high-quality hiking accessories for rent and sale, ensuring outdoor enthusiasts have the gear they need for unforgettable adventures. From sturdy backpacks to durable footwear, find your perfect fit with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
