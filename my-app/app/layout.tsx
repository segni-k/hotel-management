import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [ '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-poppins",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Management System",
  description: "Hotel management system, built by segni kasahun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
          <ThemeProvider>
            <main className="font-normal md:px-15 min-h-screen bg-white dark:bg-gray-950 text-gray-800">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
