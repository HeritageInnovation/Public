import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, Building2, HeartPulse, Landmark, Menu, Network, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    name: "Heritage / RickyPark RWA Platform",
    url: "https://www.rickypark.com/",
    status: "Under Development",
    category: ["RWA", "Infrastructure"],
    description:
      "A developing real-world asset platform exploring exceptional asset registry, custody context, provenance, private access, exchange, yield programs, bridge workflows, compliance, vault, and governance concepts.",
  },
  {
    name: "BridgeTree Finance",
    url: "https://bridgetreefinance.com/",
    status: "Live / In Development",
    category: ["Finance", "Digital Assets"],
    description:
      "A finance vertical focused on non-custodial digital asset yield, lending, and asset-backed financial workflows.",
  },
  {
    name: "AIHK",
    url: "https://aihk.space/",
    status: "Live",
    category: ["Property", "AI"],
    description:
      "A Hong Kong AI property platform for owner-direct listings, agent-supported transactions, AI property search, listing tools, maps, and real-estate market workflows.",
  },
  {
    name: "SatiStay",
    url: "https://satistay.space/",
    status: "In Development",
    category: ["Property", "Marketplace"],
    description:
      "A property rental and accommodation platform focused on homes, rentals, property discovery, owner listings, agent listings, and property-manager listings.",
  },
  {
    name: "HomeHK",
    url: "https://homehk.org/",
    status: "Live",
    category: ["Civic Tech", "Public Data"],
    description:
      "A Hong Kong daily-life information platform for weather, transport, parking, public facilities, price comparison, restaurants, utilities, recycling, libraries, beaches, and public data.",
  },
  {
    name: "Chicken Dinner",
    url: "https://chickendinner.space/",
    status: "Live",
    category: ["Prediction Markets", "Interface"],
    description:
      "A Chinese-language Polymarket market discovery and prediction-market interface showing probabilities, volume, liquidity, trending markets, categories, and user-signed non-custodial workflows.",
  },
  {
    name: "AI Health & Insurance Guide",
    url: "https://aiinsurence.vercel.app/",
    status: "MVP / Temporary Link",
    category: ["AI", "Health", "Insurance"],
    description:
      "A Hong Kong-focused AI healthcare and insurance navigation assistant for safety triage support, symptom organization, potential department matching, and relevant insurance topic guidance. It is navigation support only, not medical diagnosis or regulated insurance advice.",
  },
];

const focusAreas = [
  { icon: Building2, title: "Property & Real Estate Platforms" },
  { icon: Landmark, title: "Finance & Digital Asset Workflows" },
  { icon: Network, title: "Civic Data & Public Information" },
  { icon: HeartPulse, title: "AI Navigation Tools" },
  { icon: ArrowRight, title: "Emerging RWA Infrastructure" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary">
        <a href="#top" className="text-lg font-semibold tracking-tight text-white">
          RickyPark Holdings
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#portfolio" className="hidden md:block">
          <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200">View Portfolio</Button>
        </a>

        <button
          className="rounded-xl border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default function HeritageIntroSite() {
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.title = "RickyPark Holdings | Digital Platform Portfolio";

    const metaDescription =
      document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute(
      "content",
      "RickyPark Holdings develops digital platforms across property, finance, AI tools, civic information, healthcare navigation, prediction markets, and emerging real-world asset infrastructure.",
    );
    if (!metaDescription.parentElement) document.head.appendChild(metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", "RickyPark Holdings | Digital Platform Portfolio");
    if (!ogTitle.parentElement) document.head.appendChild(ogTitle);

    const ogDescription =
      document.querySelector('meta[property="og:description"]') || document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute(
      "content",
      "RickyPark Holdings develops digital platforms across property, finance, AI tools, civic information, healthcare navigation, prediction markets, and emerging real-world asset infrastructure.",
    );
    if (!ogDescription.parentElement) document.head.appendChild(ogDescription);
  }, []);

  return (
    <main id="top" className="min-h-screen bg-slate-950 text-white">
      <Nav />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 shadow-2xl shadow-cyan-950/30 md:p-12">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            RickyPark Holdings builds practical digital platforms across property, finance, AI, public information,
            and emerging asset infrastructure.
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A portfolio of Hong Kong-focused and global digital products spanning real estate, fintech, civic
            utilities, healthcare navigation, prediction markets, and real-world asset infrastructure.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#portfolio">
              <Button className="w-full rounded-full bg-white text-slate-950 hover:bg-slate-200 sm:w-auto">
                Explore Portfolio
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="w-full rounded-full border-white/30 bg-white/5 hover:bg-white/10 sm:w-auto">
                Contact
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Portfolio</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                  {project.status}
                </span>
                {project.category.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                aria-label={`Open ${project.name} in a new tab`}
              >
                Visit Project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="focus-areas" className="bg-white/[0.03] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Focus Areas</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {focusAreas.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <Icon className="h-5 w-5 text-cyan-200" />
                  <p className="mt-3 text-sm text-slate-200">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
        <div className="mt-6 max-w-4xl space-y-5 text-slate-300">
          <p>
            RickyPark Holdings develops and manages a growing ecosystem of digital platforms. The portfolio is built
            around practical products that organize information, simplify transactions, and create useful interfaces
            for real-world services.
          </p>
          <p>
            Some projects are live products, while others are MVPs or platforms under development. The portfolio is
            intentionally broad, covering property, finance, AI, civic information, healthcare navigation, and
            asset-backed infrastructure.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Contact</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            For partnerships, product inquiries, or portfolio discussions, contact RickyPark Holdings.
          </p>
          <a href="mailto:hello@rickypark.com" className="mt-5 inline-block text-cyan-200 hover:text-cyan-100">
            hello@rickypark.com
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-400 lg:px-8">
        <div className="mx-auto max-w-7xl">© {year} RickyPark Holdings. All rights reserved.</div>
      </footer>
    </main>
  );
}
