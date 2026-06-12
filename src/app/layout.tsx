import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhutanthailandchamber.org"),
  title: "BHTCC | Bhutan-Thailand Chamber of Commerce",
  description:
    "A private member community connecting founders, investors, and artists between Bhutan and Thailand. Dinners, deals, and cultural exchange between Bangkok and Thimphu. Now forming.",
  openGraph: {
    title: "Two Buddhist Kingdoms. One Bridge for Business and Culture.",
    description:
      "A private member community connecting founders, investors, and artists between Bhutan and Thailand. Dinners, deals, and cultural exchange between Bangkok and Thimphu. Now forming.",
    url: "https://bhutanthailandchamber.org",
    siteName: "Bhutan-Thailand Chamber of Commerce",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhutan-Thailand Chamber of Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Buddhist Kingdoms. One Bridge for Business and Culture.",
    description:
      "A private member community connecting founders, investors, and artists between Bhutan and Thailand. Dinners, deals, and cultural exchange between Bangkok and Thimphu. Now forming.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: '/LogoOnly.png',
    shortcut: '/LogoOnly.png',
    apple: [
      { url: '/apple-icon-180.png', sizes: '180x180' },
      { url: '/apple-icon-512.png', sizes: '512x512' },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full`}>
      <body
        className="min-h-full antialiased"
        style={{ fontFamily: "var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif" }}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YLJG8NR977"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YLJG8NR977');
          `}
        </Script>
      </body>
    </html>
  );
}
