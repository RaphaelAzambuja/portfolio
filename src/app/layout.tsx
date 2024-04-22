import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaphaelAzambuja.Dev",
  description: "Portfolio dev Raphael Azambuja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
