// app/page.tsx
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
        "inline-flex items-center rounded-xl bg-emerald-500/20 px-4 py-3 text-sm font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/40 hover:bg-emerald-500/30 hover:text-white hover:ring-emerald-300 shadow-[0_30px_120px_-10px_rgba(16,185,129,.6)]",
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
    <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => setOpen(open === idx ? null : idx)}
          className="w-full text-left"
        >
          <div className="flex w-full items-start justify-between px-4 py-4 md:px-6 md:py-5">
            <div className="pr-6">
              <div className="text-sm font-semibold text-white">{item.q}</div>
              {open === idx && (
                <div className="mt-2 text-[13px] leading-relaxed text-white/60">
                  {item.a}
                </div>
              )}
            </div>

            <div className="ml-auto flex h-6 w-6 flex-none items-center justify-center rounded-md border border-white/20 text-[10px] text-white/60">
              {open === idx ? "–" : "+"}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="relative bg-[#0a0a0a] text-white antialiased">
      {/* BG glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,131,255,0.22)_0%,rgba(0,0,0,0)_70%)]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            <span className="text-sm font-semibold text-white">FirstTry</span>
            <span className="hidden text-[10px] text-white/40 sm:inline">
              CI passes on first push.
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#blog" className="hover:text-white">
              Blog
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>

          <CTAButton
            className="hidden md:inline-flex"
            label="Get Early Access"
          />
        </div>
      </header>

      {/* HERO */}
      <section className="relative border-b border-white/10 bg-gradient-to-b from-transparent to-black/50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid gap-12 md:grid-cols-2">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>Designed for Python / Docker / GitHub Actions teams</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold leading-[1.15] md:text-4xl lg:text-5xl">
              Stop pushing broken code.
              <br />
              Get a green pipeline{" "}
              <span className="text-emerald-400">on the first try.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              FirstTry runs every check your team cares about — pytest, ruff,
              mypy, black, Docker sanity, DB drift, secrets scan — locally,
              before you push. Your PR opens green.
            </p>

            <ul className="mt-6 text-sm text-white/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                <span>
                  Works with any language — just wire in your checks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                <span>
                  Sweet spot: 1–50 dev teams on GitHub Actions & Docker.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                <span>
                  Your code never leaves your machine. Nothing is uploaded.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                label="Get Early Access"
                className="w-full sm:w-auto"
              />
              <button className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white hover:bg-white/10">
                Watch 2-min demo
              </button>
            </div>

            <p className="mt-4 text-[11px] text-white/40">
              5-minute setup. No credit card. Cancel anytime.
            </p>
          </div>

          {/* Terminal mock / testimonial */}
          <div className="flex flex-col justify-center">
            <div className="rounded-xl border border-white/10 bg-black p-4 shadow-[0_40px_120px_-20px_rgba(16,185,129,.4)]">
              <div className="flex items-center gap-2 text-[11px] text-white/40">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500/60" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <div className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
                <span>firsttry --run all</span>
              </div>
              <pre className="mt-3 max-h-[260px] overflow-hidden rounded-lg bg-black text-[11px] leading-relaxed text-emerald-300">{`▶ pytest .......... PASS (42 tests)
▶ ruff ............ PASS (0 issues)
▶ mypy ............ PASS (0 type errors)
▶ black ........... PASS (clean)
▶ docker build .... PASS (image ok)
▶ db drift ........ PASS (no migration needed)
------------------------------------------------
ALL CHECKS PASSED ✅
Safe to push.`}</pre>
              <div className="mt-4 flex items-center justify-between text-[10px] text-white/40">
                <span>&ldquo;Green on first push.&rdquo;</span>
                <span>— Senior Eng, fintech team (12 devs)</span>
              </div>
            </div>

            <div className="mt-4 text-[10px] text-white/30 text-center">
              No telemetry. No source upload. Runs 100% locally.
            </div>
          </div>
        </div>
      </section>

      {/* INLINE CTA BLOCK #1 */}
      <section className="border-b border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center">
          <div className="text-sm font-medium text-emerald-400">
            Green PRs. Quiet reviewers. Faster merges.
          </div>
          <div className="mt-2 text-xl font-semibold text-white md:text-2xl">
                        &ldquo;Your manager will think you got 2x faster.&rdquo;
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton label="Start Free" className="w-full sm:w-auto" />
            <button className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white hover:bg-white/10">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / SECURITY */}
      <section id="how" className="border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              How it works
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              FirstTry reads your repo config, mirrors your GitHub Actions
              workflow, and runs the same steps locally — in seconds — before
              you ever push.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-white/70 md:text-base">
              <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="font-medium text-white">
                  CI accuracy, zero waiting
                </div>
                <div className="text-white/60 text-[13px] mt-1">
                  We parse <code>.github/workflows/*.yml</code>, translate jobs
                  to local equivalents (like using your venv instead of
                  setup-python), and run them immediately.
                </div>
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="font-medium text-white">
                  Code never leaves your laptop
                </div>
                <div className="text-white/60 text-[13px] mt-1">
                  We do not upload source, metadata, or secrets. No cloud
                  analysis. Everything executes on your machine.
                </div>
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="font-medium text-white">
                  Fast feedback, not shame
                </div>
                <div className="text-white/60 text-[13px] mt-1">
                  You fix issues in 2 minutes instead of getting roasted in code
                  review 40 minutes later when CI finally fails.
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-xl border border-white/10 bg-black p-6">
              <h3 className="text-white font-semibold text-lg">
                Who is this for?
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Teams of 1–50 engineers with:
              </p>
              <ul className="mt-3 text-sm text-white/70 space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Python services or microservices
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Dockerized builds
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  GitHub Actions CI
                </li>
              </ul>
              <p className="mt-4 text-sm text-white/50 leading-relaxed">
                Works with any language — you can register custom checks,
                linters, test commands, security scans, infra smoke tests, etc.
              </p>
              <div className="mt-6">
                <CTAButton
                  label="Add me to the waitlist"
                  className="w-full justify-center"
                />
              </div>
              <p className="mt-3 text-[11px] text-white/40 text-center">
                Enterprise plans (50+ seats) coming soon.
              </p>
            </div>
            <div className="mt-4 text-[11px] text-white/30 text-center">
              GDPR friendly. Nothing leaves your env.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              All the annoying stuff,
              <span className="text-emerald-400"> handled automatically.</span>
            </h2>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              You write code. We handle everything that breaks PR reviews.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tests before push",
                desc: "Run full or smoke pytest suites locally with the same env vars CI will use.",
              },
              {
                title: "Lint & style gate",
                desc: "ruff, black, mypy, isort, bandit — enforced exactly like your pipeline.",
              },
              {
                title: "Docker sanity",
                desc: "We try building your service image before CI does, so you don&apos;t blow a 20-min build on a typo.",
              },
              {
                title: "DB drift check",
                desc: "Detect missing migrations (SQLite or Postgres) so you don&apos;t ship a schema mismatch.",
              },
              {
                title: "Secrets & keys scan",
                desc: "Warn if you're about to commit obvious AWS keys, tokens, etc.",
              },
              {
                title: "Fast 'fix this' hints",
                desc: "ImportError? Missing tool? We&apos;ll literally tell you what to install or generate.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-sm font-semibold text-white">
                  {card.title}
                </div>
                <div className="mt-2 text-[13px] leading-relaxed text-white/60">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>

          {/* INLINE CTA BLOCK #2 */}
          <div className="mt-16 rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent p-8 text-center shadow-[0_50px_120px_-20px_rgba(16,185,129,.4)]">
            <div className="text-sm font-medium text-emerald-400">
                            &ldquo;Green on first commit.&rdquo;
            </div>
            <div className="mt-2 text-xl font-semibold text-white md:text-2xl">
              Stop apologizing for red pipelines.
            </div>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 md:text-base">
              Install FirstTry, run <code>firsttry --run all</code>, fix what it
              tells you, then push. That&apos;s it.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton label="Start Free" className="w-full sm:w-auto" />
              <button className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white hover:bg-white/10">
                Read how it works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Pricing
            </h2>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Simple monthly billing. Cancel anytime.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:max-w-5xl lg:mx-auto lg:grid-cols-3">
            {/* Demo plan */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_40px_120px_-20px_rgba(16,185,129,.3)]">
              <div className="text-xs font-medium text-emerald-400">Demo</div>
              <div className="mt-2 flex items-end gap-1">
                <div className="text-3xl font-semibold text-white">$0</div>
                <div className="text-white/50 text-sm mb-1">/month</div>
              </div>
              <div className="mt-2 text-[13px] text-white/60 leading-relaxed">
                Try core checks in a sandbox repo. Limited runners.
              </div>
              <ul className="mt-4 text-[13px] text-white/70 space-y-2">
                <li>✓ Local CI mirror (sample)</li>
                <li>✓ Basic lint/tests</li>
                <li>✕ Org policy sync</li>
                <li>✕ Team dashboard</li>
              </ul>
              <CTAButton
                className="mt-6 w-full justify-center"
                label="Start Demo"
              />
              <div className="mt-3 text-[11px] text-white/40 text-center">
                No credit card.
              </div>
            </div>

            {/* Indie plan */}
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-6 ring-2 ring-emerald-500/40 shadow-[0_40px_200px_-10px_rgba(16,185,129,.6)]">
              <div className="text-xs font-medium text-emerald-400">Indie</div>
              <div className="mt-2 flex items-end gap-1">
                <div className="text-3xl font-semibold text-white">$9</div>
                <div className="text-white/50 text-sm mb-1">/month</div>
              </div>
              <div className="mt-2 text-[13px] text-white/60 leading-relaxed">
                1 developer seat. Unlimited projects. All core checks.
              </div>
              <ul className="mt-4 text-[13px] text-white/70 space-y-2">
                <li>✓ Full local CI mirror</li>
                <li>✓ DB drift & secrets scan</li>
                <li>✓ Docker sanity build</li>
                <li>✕ Shared org policy</li>
              </ul>
              <CTAButton
                className="mt-6 w-full justify-center"
                label="Start Free Trial"
              />
              <div className="mt-3 text-[11px] text-white/40 text-center">
                No credit card for trial.
              </div>
            </div>

            {/* Team + Enterprise stacked */}
            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_40px_120px_-20px_rgba(16,185,129,.3)]">
                <div className="text-xs font-medium text-emerald-400">
                  Teams
                </div>
                <div className="mt-2 flex items-end gap-1">
                  <div className="text-3xl font-semibold text-white">$29</div>
                  <div className="text-white/50 text-sm mb-1">/month</div>
                </div>
                <div className="mt-2 text-[13px] text-white/60 leading-relaxed">
                  Up to 10 developers. Shared policy file. Priority fixes.
                </div>
                <ul className="mt-4 text-[13px] text-white/70 space-y-2">
                  <li>✓ Everything in Indie</li>
                  <li>
                    ✓ Central org policy (ruff rules, python version)
                  </li>
                  <li>✓ Team dashboard (coming soon)</li>
                  <li>✓ Slack notifications (coming soon)</li>
                </ul>
                <CTAButton
                  className="mt-6 w-full justify-center"
                  label="Start Free Trial"
                />
                <div className="mt-3 text-[11px] text-white/40 text-center">
                  Great for 1–50 dev teams.
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_40px_120px_-20px_rgba(16,185,129,.3)]">
                <div className="text-xs font-medium text-emerald-400">
                  Enterprise
                </div>
                <div className="mt-2 flex items-end gap-1">
                  <div className="text-3xl font-semibold text-white">$99</div>
                  <div className="text-white/50 text-sm mb-1">/month</div>
                </div>
                <div className="mt-2 text-[13px] text-white/60 leading-relaxed">
                  50+ engineers, audit needs, SOC2-type language, custom policy
                  enforcement.
                </div>
                <ul className="mt-4 text-[13px] text-white/70 space-y-2">
                  <li>✓ Everything in Teams</li>
                  <li>✓ Policy lock / mandatory gates</li>
                  <li>✓ Exec-ready compliance reports</li>
                  <li>✓ Priority support channel</li>
                </ul>
                <CTAButton
                  className="mt-6 w-full justify-center"
                  label="Join Waitlist"
                />
                <div className="mt-3 text-[11px] text-white/40 text-center">
                  White-glove onboarding.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-white/50">
            50+ engineers? Need SOC2 language?{" "}
            <br className="hidden sm:block" />
            <span className="text-white">
              Enterprise plans are invite-only.{" "}
            </span>
            <button className="underline underline-offset-4 hover:text-emerald-400">
              Join the waitlist
            </button>
          </div>
        </div>
      </section>

      {/* BLOG TEASER / CONTENT MARKETING */}
      <section id="blog" className="border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Learn why your CI is always red.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
              We publish brutally honest guides for engineering leads,
              founders, and senior devs sick of wasting pipeline minutes.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-white font-medium">
                  Why CI failures cost your team real money
                </div>
                <div className="text-white/60 text-[13px] mt-1">
                  Every red pipeline isn&apos;t just &ldquo;oops&rdquo;, it&apos;s salary burn,
                  distraction, and missed deploy windows.
                </div>
              </li>
              <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-white font-medium">
                  Pre-commit vs Post-commit: what actually matters
                </div>
                <div className="text-white/60 text-[13px] mt-1">
                  Fix it locally in 15 seconds or wait 45 mins for CI + Slack
                  shame. Your choice.
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#blog"
                className="text-sm font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Read the blog →
              </a>
            </div>
          </div>

          {/* mini CTA card */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 max-w-md">
            <div className="text-xs font-medium text-emerald-400">
              Stay in the loop
            </div>
            <div className="mt-2 text-lg font-semibold text-white">
              Be first to get new features, fixes, and case studies.
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/60">
              We ship fast, based on real pipeline pain from real teams. Give
              us your email and we&apos;ll prove it.
            </p>

            <form
              className="mt-4 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
                alert("Thanks, you're on the list.");
              }}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white/20 bg-black px-3 py-2 text-sm text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
              />
              <CTAButton
                type="submit"
                className="w-full justify-center"
                label="Add me"
              />
            </form>

            <p className="mt-3 text-[11px] text-white/40">
              No spam. Unsubscribe with one click.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Questions developers actually ask
            </h2>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Still skeptical? Good.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <FAQ
              items={[
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
                  a: "Yes. You can register any shell command or script as a required check. This is how bigger teams standardize 'quality gates'.",
                },
                {
                  q: "We use Go / Node / Java, not Python. Worth it?",
                  a: "Yes. Python is our fastest path to value, but anything that runs in your CI can be mirrored locally. You just add the command.",
                },
                {
                  q: "What happens if I ignore FirstTry and push anyway?",
                  a: "Nothing breaks. But your PR will probably open red in CI, and now your reviewer is annoyed. Your call.",
                },
              ]}
            />
          </div>

          {/* INLINE CTA BLOCK #3 */}
          <div className="mx-auto mt-16 max-w-xl text-center">
            <div className="text-xl font-semibold text-white md:text-2xl">
              Ready to stop pushing red pipelines?
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton
                label="Start Free Trial"
                className="w-full sm:w-auto"
              />
              <button className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white hover:bg-white/10">
                Talk to us
              </button>
            </div>
            <p className="mt-3 text-[11px] text-white/40">
              You&apos;ll know in 1 day if this saves you hours.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/60">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              FirstTry
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-white/50">
              FirstTry makes sure your pull requests open green — tests passed,
              lint clean, container builds good — on the first try.
            </p>
          </div>

          <div>
            <div className="text-white font-medium">Product</div>
            <ul className="mt-3 space-y-2 text-white/60 text-[13px]">
              <li>
                <a href="#how" className="hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white font-medium">Resources</div>
            <ul className="mt-3 space-y-2 text-white/60 text-[13px]">
              <li>
                <a href="#blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Docs (soon)
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Status
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white font-medium">Trust & Legal</div>
            <ul className="mt-3 space-y-2 text-white/60 text-[13px]">
              <li>
                <a className="hover:text-white" href="#">
                  Security
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  GDPR
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-[11px] text-white/40">
          © {new Date().getFullYear()} FirstTry. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
