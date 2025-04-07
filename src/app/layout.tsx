import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Lumon",
  description: "It's MDR time! Written by an innie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-mono bg-lumon-bg text-lumon-text`}
      >
        {children}
      </body>
    </html>
  );
}
