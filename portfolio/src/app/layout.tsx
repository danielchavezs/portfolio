import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { briColage, inter, plusJakartaSans } from "./assets/fonts";
import { Footer } from "./components/footer";

// const inter = inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Chavez Portfolio",
  description:
    "Information and professional portfolio from Web Developer & Engineer Daniel Chavez.",
  icons: {
    icon: "/code-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={briColage.className}>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
