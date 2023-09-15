import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/NavBar";
import AuthProvider from "@/providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QrCoder",
  description: "QRcode Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
