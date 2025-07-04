import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider"
import { AuthDialogProvider } from "@/app/components/AuthDialogContext"
import HeaderPC from "./components/Header/HeaderPC";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-2xl`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthDialogProvider>
            <HeaderPC />
          </AuthDialogProvider>
          <div className="wrapper flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">

            {children}

            <footer className="bg-gray-900 text-white w-full py-8 mt-8">
              <div className="text-center">
                <p className="text-2xl">&copy; {new Date().getFullYear()} Do Hieu Nghia. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
