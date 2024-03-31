import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// app/layout.tsx
import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Non-Stop Commerce",
  description: "Non-Stop Commerce | Pakistan Best Marketplace | Powered by CSAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
