import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { inter, plusJakartaSans } from "./assets/fonts";

// const inter = inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Chavez Portfolio",
  description: "Information and professional portfolio from Web Developer & Engineer Daniel Chavez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
