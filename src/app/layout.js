'use client'
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-full bg-gray-700">
      <body className="h-full">
        <Toaster />
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}