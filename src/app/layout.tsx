import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "BHTCC | Bhutan-Thai Chamber of Commerce",
  description:
    "The official bilateral chamber connecting businesses between the Kingdom of Bhutan and the Kingdom of Thailand.",
  icons: {
    icon: [{ url: '/logo-icon.png', sizes: '32x32', type: 'image/png' }],
    apple: { url: '/logo-icon.png' },
    shortcut: '/logo-icon.png',
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
      </body>
    </html>
  );
}
