import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FirstTry – Ship green on the first try",
  description: "Run tests, lint, security, Docker, DB drift locally before push.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0a0a0a] text-white">
      <body>{children}</body>
    </html>
  );
}
