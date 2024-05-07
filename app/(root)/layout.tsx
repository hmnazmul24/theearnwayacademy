import type { Metadata } from "next";
import "../globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/context/theme";
import MainFooter from "@/components/shared/MainFooter";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Earn Way Academy - Learn Online Skills Here",
  description:
    "we are here teaching you tech skill to empower you and your society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon/tew-fav.png" sizes="any" />
      <body
        className={cn(
          "min-h-screen bg-background text-custom-color  font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <MainFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
