import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alberi di Vita OdV",
  description: "Organizzazione di volontariato a Brescia. Agisce in favore della terza età, con iniziative di aggregazione per grandi e piccini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ background: "#fff" }}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
