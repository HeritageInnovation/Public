import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Building2,
  Coins,
  HeartPulse,
  Landmark,
  Layers3,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  WalletCards,
  Globe2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const verticals = [
  {
    title: "Web3.0 Banking",
    eyebrow: "Digital finance infrastructure",
    icon: Banknote,
    description:
      "A next-generation banking ecosystem designed for borderless payments, digital wallets, on-chain value movement, and compliant financial access.",
    points: ["Digital wallets", "Global payments", "Token-ready infrastructure"],
  },
  {
    title: "Betting",
    eyebrow: "Entertainment and prediction markets",
    icon: Trophy,
    description:
      "A modern betting platform focused on secure transactions, transparent odds, user engagement, and scalable entertainment experiences.",
    points: ["Sports and events", "Responsible gaming", "Real-time engagement"],
  },
  {
    title: "Real Estate",
    eyebrow: "Property, ownership, and access",
    icon: Building2,
    description:
      "A real estate network connecting physical assets with digital ownership, smart financing, and broader access to property-backed opportunities.",
    points: ["Property marketplace", "Smart financing", "Asset-backed models"],
  },
  {
    title: "AI Health",
    eyebrow: "Intelligent healthcare services",
    icon: HeartPulse,
    description:
      "AI-powered health solutions that support smarter diagnostics, wellness monitoring, care navigation, and data-informed health decisions.",
    points: ["AI assistance", "Preventive care", "Health intelligence"],
  },
  {
    title: "Livelihood",
    eyebrow: "Income, opportunity, and daily life",
    icon: Users,
    description:
      "A livelihood platform built around jobs, services, creator income, local commerce, and practical tools that help people earn and grow.",
    points: ["Income tools", "Local services", "Community growth"],
  },
  {
    title: "RWA",
    eyebrow: "Real-world assets on digital rails",
    icon: Coins,
    description:
      "A real-world asset ecosystem connecting tangible value to digital markets through tokenization, asset management, and compliant access.",
    points: ["Asset tokenization", "Digital ownership", "Liquidity pathways"],
  },
];

const stats = [
  { value: "6", label: "Strategic sectors" },
  { value: "1", label: "Connected ecosystem" },
  { value: "24/7", label: "Digital-first access" },
  { value: "Global", label: "Market ambition" },
];

const ecosystem = [
  {
    title: "Finance layer",
    text: "Banking, wallets, payments, and asset movement form the foundation of the platform.",
    icon: WalletCards,
  },
  {
    title: "Asset layer",
    text: "Real estate and RWA products connect physical value to digital ownership and liquidity.",
    icon: Landmark,
  },
  {
    title: "Life layer",
    text: "AI health, livelihood, and entertainment products support practical daily use cases.",
    icon: Layers3,
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Ecosystem", "Sectors", "Vision", "Contact"];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-cyan-500/20">
            <Globe2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Heritage</p>
            <p className="text-xs text-slate-400">Digital Holdings</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="rounded-full bg-white px-5 text-slate-950 hover:bg-cyan-100">
            Explore the Ecosystem
          </Button>
        </div>

        <button
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{text}</p>}
    </div>
  );
}

export default function HeritageIntroSite() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Nav />

      <section className="relative px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_36%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_38%),linear-gradient(180deg,rgba(15,23,42,0),#020617_82%)]" />
        <div className="absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              One company. Six high-growth digital sectors.
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
              Building the connected economy for finance, assets, health, and daily life.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Heritage Digital Holdings brings together Web3.0 banking, betting, real estate, AI health,
              livelihood tools, and real-world assets into one integrated ecosystem designed for modern users,
              investors, operators, and communities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-white px-7 text-slate-950 hover:bg-cyan-100">
                Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white"
              >
                View Our Verticals
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Ecosystem map</p>
                    <p className="text-xl font-semibold text-white">Heritage Platform</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Active Vision
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {verticals.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + index * 0.07 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{item.eyebrow}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 text-center">
              <p className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The ecosystem"
            title="A single operating system for modern value."
            text="Each business line can stand alone, but the real strength comes from how they connect: finance powers access, assets create value, and life services drive everyday adoption."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {ecosystem.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="h-full rounded-3xl border-white/10 bg-white/[0.04] text-white shadow-xl shadow-slate-950/20">
                    <CardContent className="p-7">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sectors" className="bg-slate-900/40 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our sectors"
            title="Six pillars. One digital growth engine."
            text="Heritage is positioned across the markets where technology, ownership, finance, health, and entertainment are converging."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {verticals.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-950"
                >
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.eyebrow}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
                      <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="vision" className="relative px-5 py-24 lg:px-8">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_42%)]" />
        <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">The vision</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Make digital ownership useful in the real world.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Heritage is building a connected platform where people can bank, earn, invest, access property,
                manage health, participate in entertainment, and hold real-world value through modern digital rails.
              </p>
              <p>
                The opportunity is not only in launching separate products. It is in creating a shared ecosystem where
                identity, payments, assets, data, and user relationships strengthen every vertical.
              </p>
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-base text-emerald-100">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                Built for scale, trust, compliance, and long-term market expansion.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-8 text-slate-950 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Work with us</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Partner with Heritage across the next generation of digital markets.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                We are connecting capital, technology, communities, and real-world utility across finance,
                betting, real estate, AI health, livelihood, and RWA.
              </p>
            </div>
            <Button size="lg" className="rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
              Contact the Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Heritage Digital Holdings. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-white" href="#top">Home</a>
            <a className="hover:text-white" href="#sectors">Sectors</a>
            <a className="hover:text-white" href="#vision">Vision</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
