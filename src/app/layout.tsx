import type { Metadata } from "next";
import "./globals.css";
import { briColage, plusJakartaSans } from "@/app/assets/fonts";

// const inter = inter({ subsets: ["latin"] });

const siteTitle = "Daniel Chavez — AI Engineer & Full-Stack Developer";
const siteDescription =
  "AI Engineer and Software Developer focused on LLM systems, RAG pipelines, and scalable full-stack products. Based in Colombia, working globally.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s — Daniel Chavez",
  },
  description: siteDescription,
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/og/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Daniel Chavez portfolio gradient",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og/twitter-image.svg"],
  },
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
    <html lang="en" className={`${plusJakartaSans.variable} ${briColage.variable}`}>
      <body className="font-body">
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
