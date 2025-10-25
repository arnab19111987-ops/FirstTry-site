// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FirstTry — Ship Green on the First Push",
  description:
    "Run every test, lint, type-check, security scan, and Docker sanity locally before git push. Stop breaking CI. Ship clean code on the first try.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <div className="relative min-h-screen overflow-hidden">
          {/* subtle radial glow background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,131,255,0.22)_0%,rgba(0,0,0,0)_70%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
