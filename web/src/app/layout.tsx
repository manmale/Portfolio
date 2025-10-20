import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Elegant Premium Portfolio",
    template: "%s · Elegant Premium Portfolio",
  },
  description:
    "An elegant, premium portfolio with cinematic video hero, smooth animations, and modern design.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Elegant Premium Portfolio",
    description:
      "An elegant, premium portfolio with cinematic video hero, smooth animations, and modern design.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elegant Premium Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegant Premium Portfolio",
    description:
      "An elegant, premium portfolio with cinematic video hero, smooth animations, and modern design.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased bg-background text-foreground selection:bg-brand/30`}
      >
        {children}
      </body>
    </html>
  );
}
