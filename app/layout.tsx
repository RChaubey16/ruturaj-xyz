import type { Metadata } from "next";
import { Covered_By_Your_Grace, Montserrat, Forum } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import KeyquenceComponent from "./components/KeyquenceComponent";
import Navbar from "./components/Navbar";
import "./globals.css";

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-covered-by-your-grace",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-forum",
});

export const metadata: Metadata = {
  title: "Ruturaj Chaubey",
  description:
    "I build fast, interactive full stack web applications, all with a focus on performance, clarity, and maintainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${coveredByYourGrace.variable} ${montserrat.variable} ${forum.variable} antialiased max-w-3xl mx-auto px-4 lg:px-0`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <KeyquenceComponent />
          <Navbar />
          {children}
          <Toaster theme="light" position="bottom-right" invert richColors />
          <footer className="my-20 text-center">
            <p className="para-text">
              Ruturaj Chaubey © 2025. All rights reserved.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
