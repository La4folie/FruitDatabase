import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FRUITS DATABASE",
  description: "Single page app for FRUITS DATABASE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="min-h-full">
      <body className={`${inter.className} min-h-screen`}>
        <div className="relative w-full h-full bg-gradient-to-t from-black to-cus-purple">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
