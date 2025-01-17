import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/custom/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Carnival",
  description: "Generated by Manash Anand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
