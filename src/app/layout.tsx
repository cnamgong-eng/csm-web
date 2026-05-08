import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commercial Space Management — Premium janitorial services for the Triangle",
  description:
    "CSM delivers enterprise-grade commercial cleaning to property managers, dealerships, banks, and government facilities across Raleigh, Durham, Cary, and Chapel Hill — backed by tech-forward dispatch and a 100% satisfaction guarantee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
