import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FirstTry - Stop pushing broken code",
  description:
    "FirstTry runs every gate your team cares about — tests, type checks, lint, Docker sanity, DB drift, secrets — locally before you push. CI stays quiet. Review stays friendly.",
  keywords: [
    "CI/CD",
    "continuous integration",
    "code quality",
    "testing",
    "developer tools",
    "pre-commit hooks",
    "GitHub Actions",
    "Python",
    "Docker",
  ],
  authors: [{ name: "FirstTry Team" }],
  creator: "FirstTry",
  publisher: "FirstTry",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firsttry.dev",
    title: "FirstTry - Stop pushing broken code",
    description:
      "FirstTry runs every gate your team cares about — tests, type checks, lint, Docker sanity, DB drift, secrets — locally before you push. CI stays quiet. Review stays friendly.",
    siteName: "FirstTry",
  },
  twitter: {
    card: "summary_large_image",
    title: "FirstTry - Stop pushing broken code",
    description:
      "FirstTry runs every gate your team cares about — tests, type checks, lint, Docker sanity, DB drift, secrets — locally before you push. CI stays quiet. Review stays friendly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#f5e6c5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-[#0a0a0a] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
