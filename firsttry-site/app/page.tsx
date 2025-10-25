"use client";

import { useState } from "react";
import clsx from "clsx";

function CTAButton({
  label,
  className,
  type = "button",
}: {
  label: string;
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl bg-[#f5e6c5]/10 px-4 py-3 text-sm font-semibold text-[#f5e6c5] ring-1 ring-inset ring-[#f5e6c5]/30 hover:bg-[#f5e6c5]/20 hover:text-black hover:ring-[#f5e6c5] transition-colors shadow-[0_30px_120px_-10px_rgba(245,230,197,.4)]",
        className
      )}
    >
      {label}
    </button>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[0_30px_120px_-20px_rgba(245,230,197,.2)]">
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => setOpen(open === idx ? null : idx)}
          className="w-full text-left"
        >
          <div className="flex w-full items-start justify-between px-5 py-5 md:px-6 md:py-6">
            <div className="pr-6">
              <div className="text-[15px] font-medium text-white">{item.q}</div>
              {open === idx && (
                <div className="mt-2 text-[13px] leading-relaxed text-[#b9a988]">
                  {item.a}
                </div>
              )}
            </div>
            <div className="ml-auto flex h-6 w-6 flex-none items-center justify-center rounded-md border border-white/20 text-[10px] text-[#b9a988]">
              {open === idx ? "–" : "+"}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="relative bg-[#0a0a0a] text-white antialiased selection:bg-[#f5e6c5]/20 selection:text-[#f5e6c5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,230,197,0.12)_0%,rgba(0,0,0,0)_70%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-6 w-6 items-center justify-center rounded-lg bg-[#f5e6c5]/10 ring-1 ring-[#f5e6c5]/30 text-[10px] font-semibold text-[#f5e6c5] shadow-[0_20px_60px_rgba(245,230,197,.35)]">
              FT
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] font-semibold text-white">
                FirstTry
              </span>
              <span className="text-[10px] font-normal text-[#b9a988] hidden sm:block">
                Ship green on first push
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[13px] text-[#b9a988]">
            <a href="#how" className="hover:text-[#f5e6c5] transition-colors">How it works</a>
            <a href="#features" className="hover:text-[#f5e6c5] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#f5e6c5] transition-colors">Pricing</a>
            <a href="#blog" className="hover:text-[#f5e6c5] transition-colors">Blog</a>
            <a href="#faq" className="hover:text-[#f5e6c5] transition-colors">FAQ</a>
          </nav>

          <CTAButton className="hidden md:inline-flex" label="Get Early Access" />
        </div>
      </header>

      <section className="relative border-b border-white/10 bg-gradient-to-b from-white/[0.03] via-black/80 to-black">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 grid gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#f5e6c5]/20 bg-[#f5e6c5]/10 px-3 py-1 text-[11px] font-medium text-[#f5e6c5] shadow-[0_20px_60px_rgba(245,230,197,.25)]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#f5e6c5] shadow-[0_0_8px_rgba(245,230,197,.8)]" />
              <span>Built for Python / Docker / GitHub Actions teams</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl tracking-tight">
              Stop pushing broken code.
              <br />
              <span className="text-[#f5e6c5]">Open every PR green.</span>
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-[#b9a988] md:text-lg max-w-lg">
              FirstTry runs every gate your team cares about — tests, type checks, lint, Docker sanity, DB drift, secrets — locally before you push. CI stays quiet. Review stays friendly.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CTAButton label="Get Early Access" className="w-full sm:w-auto" />
              <button className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/[0.02] px-4 py-3 text-center text-sm font-medium text-white hover:bg-white/[0.06] hover:text-white transition-colors shadow-[0_30px_120px_-20px_rgba(245,230,197,.25)]">
                Watch 2-min demo
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl shadow-[0_60px_200px_-20px_rgba(245,230,197,.4)] ring-1 ring-white/5">
              <div className="flex items-center gap-2 text-[11px] text-[#b9a988]">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-[#f87171]/60" />
                  <div className="h-2 w-2 rounded-full bg-[#fde047]/60" />
                  <div className="h-2 w-2 rounded-full bg-[#4ade80]/60" />
                </div>
                <span>firsttry --run all</span>
              </div>

              <pre className="mt-4 max-h-[260px] overflow-hidden rounded-lg bg-black text-[11px] leading-relaxed text-[#f5e6c5]">▶ pytest .......... PASS (42 tests)
▶ ruff ............ PASS (0 issues)
▶ mypy ............ PASS (0 type errors)
▶ black ........... PASS (clean)
▶ docker build .... PASS (image ok)
▶ db drift ........ PASS (no migration needed)
------------------------------------------------
ALL CHECKS PASSED ✅
Safe to push.</pre>

              <div className="mt-5 flex flex-col gap-1 text-[11px] text-[#59584f]">
                <span className="text-[#f5e6c5]">&ldquo;Green on first push.&rdquo;</span>
                <span>Staff Engineer, fintech team (12 devs)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl tracking-tight">
              Questions developers actually ask
            </h2>
            <p className="mt-5 text-[15px] text-[#b9a988] leading-relaxed md:text-base">
              Still skeptical? Good.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <FAQ items={[
              {
                q: "Does my code get uploaded anywhere?",
                a: "No. FirstTry runs locally, on your machine. We do not send your source, tests, env vars, or secrets to us.",
              },
              {
                q: "Will this slow down my workflow?",
                a: "Most checks run in parallel. You get feedback in under a minute, instead of waiting for CI for 15-30 minutes.",
              },
              {
                q: "Can I add my own org rules?",
                a: "Yes. You can register any shell command or script as a required check. This is how bigger teams standardize quality gates.",
              },
            ]} />
          </div>
        </div>
      </section>

      <footer className="bg-black/60">
        <div className="border-t border-white/10 py-8 text-center text-[11px] text-[#59584f]">
          © {new Date().getFullYear()} FirstTry. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
