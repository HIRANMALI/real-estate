import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shine Native | Premium Real Estate & Property Consultancy",
    template: "%s | Shine Native",
  },
  description: "Experience premium real estate excellence with Shine Native. Curating the finest luxury properties across India since 1997.",
  metadataBase: new URL("https://shinenative.com"),
  keywords: ["shine native", "luxury real estate", "premium properties", "real estate india", "property consultancy"],
  authors: [{ name: "Shine Native" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shinenative.com",
    siteName: "Shine Native",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shine Native Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine Native | Premium Property Consultancy",
    description: "Experience premium real estate excellence with Shine Native.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-bg font-sans selection:bg-accent/30 selection:text-dark",
          sans.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" />
        <BackToTop />
      </body>
    </html>
  );
}
