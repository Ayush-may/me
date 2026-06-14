import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Sharma - Associate Software Engineer",
  description: "As an Associate Software Engineer, I build reliable, production-ready software using modern tools and clean code. I work on full-stack features, from backend APIs to frontend interfaces, ensuring scalability and seamless user experience. Passionate about continuous improvement, I deliver high-quality solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-white`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
