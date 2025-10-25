"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Terminal,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function FirstTryLandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center">
      {/* Floating badge in corner */}
      <div className="fixed top-4 right-4 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl px-4 py-2 text-sm shadow-lg flex items-center gap-2">
        <div className="flex flex-col leading-none">
          <span className="text-[#facc15] font-semibold">34 / 50 claimed</span>
          <span className="text-[10px] text-gray-400">
            Founders pre-release seats
          </span>
        </div>
        <ShieldCheck className="h-5 w-5 text-[#facc15]" />
      </div>

      {/* HERO */}
      <section className="w-full max-w-5xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3a3a3a] bg-[#141414] px-3 py-1 text-[11px] text-gray-300">
          <span className="text-[#facc15] font-semibold">FIRSTTRY™</span>
          <span>Stop pushing broken code to GitHub</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-white leading-tight">
          Ship green on the <span className="text-[#facc15]">first try</span>.
        </h1>

        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          FirstTry is not “a nicer pre-commit hook.” It’s intelligent
          pre-commit quality automation.
          It runs every check your team cares about — tests, lint,
          security, Docker build, DB drift —{" "}
          <span className="text-white">locally</span> — before you commit.
          So your PR opens <span className="text-white">already green</span>.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#facc15] text-black font-semibold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99]">
            Get Early Access
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-[#1a1a1a] border border-[#3a3a3a] text-white text-sm px-5 py-3 rounded-xl hover:bg-[#222] active:scale-[0.99]">
            Watch it run
          </button>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          No credit card. 5-minute setup. Works in GitHub Codespaces.
        </div>

        {/* trust bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#facc15]" />
            <span>CI-safe</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-[#facc15]" />
            <span>5x fewer failed pipelines</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-[#facc15]" />
            <span>Your code stays local</span>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="w-full max-w-5xl px-6 pb-20 grid md:grid-cols-3 gap-6">
        <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <Terminal className="h-4 w-4 text-[#facc15]" />
            <span>Before you push…</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-3">
            One command runs:
            <br />• pytest
            <br />• ruff / black / mypy
            <br />• Docker build sanity
            <br />• DB migration drift check
            <br />• security scan
          </p>
        </div>

        <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <ShieldCheck className="h-4 w-4 text-[#facc15]" />
            <span>It fails locally, not on GitHub</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-3">
            You fix issues in 2 minutes instead of waiting 20+ minutes for
            GitHub Actions, only to get yelled at in code review.
          </p>
        </div>

        <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <Zap className="h-4 w-4 text-[#facc15]" />
            <span>Manager view</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-3">
            You look like the engineer who “never breaks the pipeline.”
            That reputation = promotion fuel.
          </p>
        </div>
      </section>

      {/* STRATEGIC POSITIONING / DIFFERENTIATION */}
      <section className="w-full max-w-5xl px-6 pb-24">
        <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl p-6 md:p-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[#facc15] font-semibold text-xs tracking-wide uppercase">
              Why FirstTry actually matters
            </div>

            <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight mt-3">
              Not “a better pre-commit hook.”
              <br className="hidden md:block" />
              A new layer of quality before code ever leaves your laptop.
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
              The core idea is simple: stop shipping broken code. But the way we
              get there is not simple. Pre-commit hooks are a commodity. Anyone
              can run tests and lint. That’s not the game.
              <br />
              FirstTry is aiming at something bigger: intelligent, pre-commit
              quality automation.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            {/* Pillar 1 */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5">
              <div className="text-[#facc15] text-xs font-semibold uppercase tracking-wide">
                1. Mirror Mode
              </div>
              <div className="text-white font-medium text-lg leading-snug mt-2">
                CI-to-local parity
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Your local check actually matches what CI will do in GitHub
                Actions. No “works on my machine,” no 20-minute surprise red
                build. This is the wedge into teams and leadership.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5">
              <div className="text-[#facc15] text-xs font-semibold uppercase tracking-wide">
                2. AI Feedback
              </div>
              <div className="text-white font-medium text-lg leading-snug mt-2">
                Fix it, don’t just flag it
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Instead of “lint error, go figure it out,” FirstTry explains
                exactly why this will break review or prod —
                and suggests the smallest safe change. It’s signal, not noise.
                This is what makes individual devs never want to code without it.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-5">
              <div className="text-[#facc15] text-xs font-semibold uppercase tracking-wide">
                3. Blazing Speed
              </div>
              <div className="text-white font-medium text-lg leading-snug mt-2">
                Under 1s or it doesn’t ship
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                This is the price of admission. If it’s slow, engineers turn it
                off. FirstTry is built to feel instant in the terminal and in
                your IDE — so it becomes habit, not ceremony.
              </p>
            </div>
          </div>

          {/* Category claim */}
          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-gray-400 text-xs leading-relaxed">
              If we hit all three, FirstTry stops being “a tool” and becomes
              infrastructure for how code leaves a laptop. That’s a new
              category. If we only copy existing linters and hooks, we lose to
              free tools that teams already use.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="w-full max-w-5xl px-6 pb-24">
        <div className="text-center mb-10">
          <h2 className="text-xl text-white font-semibold">
            Pricing (founder batch only)
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto leading-relaxed">
            You’re early. You get lifetime upgrades on all core checks.
            After 50 seats are gone, pricing goes monthly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* SOLO / INDIE */}
          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col">
            <div className="text-[#facc15] font-semibold text-sm">
              SOLO / INDIE
            </div>
            <div className="mt-2 text-white text-4xl font-semibold tracking-tight">
              $8
              <span className="text-gray-500 text-base font-normal">
                {" "}
                one-time
              </span>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Personal license. 1 dev.
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>Local “pre-flight” check before git push</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>Auto-detect pytest, ruff, mypy, black</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>Docker build sanity test in Codespaces</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>DB drift warning (SQLite safety mode)</span>
              </li>
            </ul>

            <button className="mt-8 bg-[#facc15] text-black font-semibold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99]">
              Buy Indie Seat
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-4 text-[10px] text-gray-500">
              Includes future updates to core checks.
            </div>
          </div>

          {/* TEAM / STARTUP */}
          <div className="bg-[#111] border border-[#facc15] rounded-2xl p-6 flex flex-col relative">
            <div className="absolute -top-3 right-4 bg-[#facc15] text-black text-[10px] font-semibold px-2 py-1 rounded-full shadow">
              most popular
            </div>

            <div className="text-[#facc15] font-semibold text-sm">
              TEAM / STARTUP
            </div>
            <div className="mt-2 text-white text-4xl font-semibold tracking-tight">
              $19
              <span className="text-gray-500 text-base font-normal">
                {" "}
                one-time
              </span>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Up to 10 devs in one org.
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>Everything in Indie</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>Policy lock: block “dirty” commits</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>Weekly compliance report for CTO / lead</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#facc15] shrink-0" />
                <span>Slack-style status: “green before push”</span>
              </li>
            </ul>

            <button className="mt-8 bg-[#facc15] text-black font-semibold text-sm px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99]">
              Reserve Team License
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-4 text-[10px] text-gray-500">
              Team pricing goes subscription after first 50.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-5xl px-6 pb-32">
        <h2 className="text-xl text-white font-semibold text-center">FAQ</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
            <div className="text-white font-medium">
              Will my code leave my machine?
            </div>
            <div className="text-gray-400 mt-2 text-sm">
              No. FirstTry runs locally. Nothing is uploaded.
            </div>
          </div>

          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
            <div className="text-white font-medium">
              Can this run in GitHub Codespaces?
            </div>
            <div className="text-gray-400 mt-2 text-sm">
              Yes. That’s actually the main design. You open Codespaces → run
              FirstTry → fix → commit → push a green PR.
            </div>
          </div>

          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
            <div className="text-white font-medium">
              What does “DB drift check” mean?
            </div>
            <div className="text-gray-400 mt-2 text-sm">
              We warn you if your code and your database migrations don’t match
              — without touching prod. Safer than smashing `alembic upgrade
              head` blindly.
            </div>
          </div>

          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-5">
            <div className="text-white font-medium">
              Do I need to be an expert?
            </div>
            <div className="text-gray-400 mt-2 text-sm">
              Nope. You run one command. We tell you exactly what to fix.
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} FirstTry. All rights reserved.
        </div>
      </section>
    </main>
  );
}
