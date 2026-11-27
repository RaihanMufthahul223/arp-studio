import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studioarp.id"),
  title: {
    default: "Studio_ARP | Arsitektur & Desain Interior Garut",
    template: "%s | Studio_ARP",
  },
  description:
    "Studio_ARP oleh CV. Tiga Dimensi Indonesia: perencanaan, desain & build arsitektur, interior, eksterior, konstruksi, dan renovasi di Garut, Bandung, Sumedang, Karawang, dan Malang.",
  keywords: [
    "arsitek Garut",
    "desain interior Garut",
    "kontraktor Garut",
    "renovasi rumah Garut",
    "desain dan build Bandung",
    "Studio ARP",
    "CV Tiga Dimensi Indonesia",
  ],
  authors: [{ name: "Studio_ARP" }],
  creator: "Studio_ARP",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://studioarp.id",
    siteName: "Studio_ARP",
    title: "Studio_ARP | Arsitektur & Desain Interior",
    description:
      "Dari gambar kerja hingga serah terima kunci, kami tangani dengan tim berpengalaman dan legalitas resmi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio_ARP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio_ARP | Arsitektur & Desain Interior",
    description:
      "Dari gambar kerja hingga serah terima kunci, kami tangani dengan tim berpengalaman dan legalitas resmi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-white text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
