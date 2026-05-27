import { Fragment } from "react";
import { IconArrowRight, IconExtLink, IconLogo } from "./icons";
import { Button, GlassCard, SectionLabel, StatusBadge } from "./atoms";

/* ============================================================
   ShiftSection
   ============================================================ */
const ECONOMICS = [
  { num: "10×", label: "Faster product cycles", sub: "from quarters to days" },
  { num: "90%", label: "Lower build cost", sub: "for AI-generated verticals" },
  { num: "∞", label: "Vertical expansion", sub: "one engine, unlimited products" },
  { num: "24h", label: "Self-improving", sub: "continuous optimization loops" },
];

export function ShiftSection() {
  return (
    <section className="rph-section rph-shift" id="shift">
      <div className="rph-container">
        <SectionLabel number="01" label="The Shift" />
        <div className="rph-shift__grid">
          <div className="rph-shift__head">
            <h2 className="rph-h2">
              AI will not just <span className="editorial text-light">use</span>{" "}
              software.
              <br />
              AI will <span className="editorial text-aurora">create</span> it.
            </h2>
            <p className="lead" style={{ marginTop: 28, maxWidth: 460 }}>
              Every industry running on legacy software is facing the same
              reckoning. The companies that build AI-native infrastructure now
              will own the next decade. Those that wait will procure from whoever
              did.
            </p>
          </div>

          <div className="rph-shift__body">
            <div className="rph-shift__statement">
              <div className="rph-shift__statement-line" />
              <p>
                AI will define products, write code, test workflows, deploy
                interfaces, analyze data, monitor performance, and improve systems
                continuously. This changes the economics of software permanently.
              </p>
            </div>

            <div className="rph-shift__economics">
              {ECONOMICS.map((e, i) => (
                <div key={i} className="rph-shift__econ-card">
                  <div className="rph-shift__econ-num">{e.num}</div>
                  <div className="rph-shift__econ-label">{e.label}</div>
                  <div className="rph-shift__econ-sub">{e.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CorporateTransitionSection
   ============================================================ */
const STAGES = [
  {
    id: "legacy",
    label: "Legacy",
    sub: "Manual systems,\nsiloed data,\nslow cycles",
    color: "rgba(255,255,255,0.15)",
    industries: ["Government", "Insurance", "Property"],
  },
  {
    id: "hybrid",
    label: "Hybrid",
    sub: "AI-assisted,\npartial automation,\nmixed infrastructure",
    color: "rgba(167,139,250,0.35)",
    industries: ["Healthcare", "Education", "Banking"],
  },
  {
    id: "ai-native",
    label: "AI-Native",
    sub: "Autonomous workflows,\nself-improving systems,\nfull-stack AI",
    color: "rgba(103,232,249,0.35)",
    industries: ["DeFi", "Prediction Markets", "RWA"],
  },
];

const BLOCKERS = [
  { n: "01", k: "Legacy Architecture", d: "Monolithic systems that cannot absorb AI natively. Most enterprise software was never designed to be AI-readable." },
  { n: "02", k: "Talent Scarcity", d: "There are not enough AI engineers to rebuild every industry simultaneously. Autonomous software generation closes this gap." },
  { n: "03", k: "Vertical Depth", d: "General AI platforms lack domain specificity. Finance, property, insurance, and civic data each need AI tuned to their logic." },
  { n: "04", k: "Speed of Change", d: "Competitors are not waiting. The window for first-mover infrastructure advantage in each vertical is narrowing monthly." },
];

function TrackArrow() {
  return (
    <div className="rph-track__arrow">
      <svg viewBox="0 0 40 24" fill="none">
        <line x1="0" y1="12" x2="32" y2="12" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M28 6L36 12L28 18" stroke="rgba(103,232,249,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function CorporateTransitionSection() {
  return (
    <section className="rph-section rph-transition" id="transition">
      <div className="rph-container">
        <SectionLabel number="02" label="Corporate AI Transition" />

        <div className="rph-transition__head">
          <h2 className="rph-h2">
            Every organization is on{" "}
            <span className="editorial text-aurora">this track</span>.
            <br />
            Most are stuck at stage one.
          </h2>
          <p className="lead rph-transition__lead">
            The transition from legacy software to AI-native infrastructure is
            not optional. The only variable is timing — and who builds the rails.
          </p>
        </div>

        <div className="rph-track">
          {STAGES.map((s, i) => (
            <Fragment key={s.id}>
              <div className={`rph-track__stage rph-track__stage--${s.id}`}>
                <div className="rph-track__stage-header" style={{ borderColor: s.color }}>
                  <div className="rph-track__stage-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="rph-track__stage-label">{s.label}</div>
                </div>
                <div className="rph-track__stage-sub">{s.sub}</div>
                <div className="rph-track__stage-tags">
                  {s.industries.map((ind, j) => (
                    <span
                      key={j}
                      className="rph-track__tag"
                      style={{
                        borderColor: s.color,
                        color: i === 2 ? "var(--cyan-400)" : i === 1 ? "var(--violet-300)" : "var(--fg-3)",
                      }}
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                {i === 2 && (
                  <div className="rph-track__stage-badge">
                    <span className="rph-dash__live-dot" style={{ width: 5, height: 5 }} />
                    RickyPark builds here
                  </div>
                )}
              </div>
              {i < STAGES.length - 1 && <TrackArrow />}
            </Fragment>
          ))}
        </div>

        <div className="rph-transition__blockers">
          <div className="rph-transition__blockers-label">
            <div className="rph-section-label__line" style={{ width: 32 }} />
            <span className="rph-section-label__text">What Blocks the Shift</span>
          </div>
          <div className="rph-transition__blockers-grid">
            {BLOCKERS.map((b, i) => (
              <div key={i} className="rph-transition__blocker">
                <div className="rph-transition__blocker-n">{b.n}</div>
                <div className="rph-transition__blocker-k">{b.k}</div>
                <div className="rph-transition__blocker-d">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ThesisSection
   ============================================================ */
const THESES = [
  { k: "AI-Generated Software", d: "Models that ship working applications, not just text.", g: "◈" },
  { k: "AI-Connected Markets", d: "Liquidity, signals, and price discovery as software-native primitives.", g: "◆" },
  { k: "AI-Powered Finance", d: "Self-custody finance with intelligent risk, credit, and routing.", g: "$" },
  { k: "AI Property Infrastructure", d: "Real estate, listings, and housing access organized by intent.", g: "⌂" },
  { k: "AI Insurance Intelligence", d: "Policy logic, coverage, and risk made legible to every user.", g: "◐" },
  { k: "AI Civic Information", d: "Public knowledge and civic services accessible through dialog.", g: "⬡" },
  { k: "AI Real-World Asset Systems", d: "Registry, provenance, vaults, and yield for tokenized assets.", g: "∎" },
  { k: "AI Prediction Interfaces", d: "Forecasting, sentiment, and event-based intelligence at scale.", g: "◉" },
];

export function ThesisSection() {
  return (
    <section className="rph-section rph-thesis" id="thesis">
      <div className="rph-container">
        <SectionLabel number="03" label="Thesis" />

        <div className="rph-thesis__head">
          <h2 className="rph-h2">
            From isolated apps to{" "}
            <span className="editorial text-aurora">autonomous</span> software
            ecosystems.
          </h2>
          <p className="lead rph-thesis__lead">
            Most companies are building single AI tools. RickyPark Holdings is
            building a connected ecosystem where AI learns from real workflows,
            generates new software layers, and expands across industries
            continuously.
          </p>
        </div>

        <div className="rph-thesis__grid">
          {THESES.map((t, i) => (
            <GlassCard key={i} className="rph-thesis-card">
              <div className="rph-thesis-card__glyph">{t.g}</div>
              <div className="rph-thesis-card__num">
                T·{String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="rph-thesis-card__k">{t.k}</h3>
              <p className="rph-thesis-card__d">{t.d}</p>
              <div className="rph-thesis-card__line" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PortfolioSection
   ============================================================ */
const PORTFOLIO = [
  {
    code: "P·01", name: "Heritage / RickyPark RWA",
    short: "Real-World Asset Infrastructure",
    url: "https://www.rickypark.com/", status: "Under Development",
    desc: "A developing real-world asset platform exploring asset registry, provenance, private access, exchange, yield programs, bridge workflows, vault infrastructure, and governance concepts.",
    tags: ["RWA", "Registry", "Vaults", "Yield", "Governance"],
    accent: "cyan",
  },
  {
    code: "P·02", name: "BridgeTree Finance",
    short: "Self-Custody DeFi Finance",
    url: "https://bridgetreefinance.com/", status: "Live / In Development",
    desc: "A wallet-based crypto deposit, withdrawal, credit, and risk-monitoring interface for users interacting with onchain finance through their own wallet. Self-custody DeFi — not a traditional bank.",
    tags: ["Wallet", "Credit", "Risk", "Onchain"],
    accent: "violet",
  },
  {
    code: "P·03", name: "ChickenDinner",
    short: "Prediction Market Intelligence",
    url: "https://chickendinner.space/", status: "Live / In Development",
    desc: "A prediction-market style interface exploring forecasting, market signals, user sentiment, and event-based intelligence across global events.",
    tags: ["Forecasting", "Sentiment", "Markets"],
    accent: "cyan",
  },
  {
    code: "P·04", name: "AI Insurance",
    short: "Coverage & Risk Reasoning",
    url: "https://aiinsurence.vercel.app/", status: "Prototype",
    desc: "An AI-powered insurance intelligence platform concept for helping users understand coverage, risk, policy logic, and insurance decisions.",
    tags: ["Insurance", "Coverage", "Policy AI"],
    accent: "warm",
  },
  {
    code: "P·05", name: "AIHK",
    short: "Civic Intelligence · Hong Kong",
    url: "https://aihk.space/", status: "Live / In Development",
    desc: "A civic and AI information interface focused on Hong Kong-related intelligence, public knowledge, and useful digital services for the city.",
    tags: ["Civic", "Public Data", "Local"],
    accent: "violet",
  },
  {
    code: "P·06", name: "HomeHK",
    short: "Property & Housing Information",
    url: "https://homehk.org/", status: "Live / In Development",
    desc: "A property and housing information platform designed to organize real estate, housing access, location data, and property-related services for Hong Kong.",
    tags: ["Property", "Housing", "Location"],
    accent: "cyan",
  },
  {
    code: "P·07", name: "SatiStay",
    short: "Stays & Property Discovery",
    url: "https://satistay.space/", status: "Under Development",
    desc: "A rental and property platform focused on homes, listings, stays, and property discovery — connecting people to places through intelligent search.",
    tags: ["Rentals", "Stays", "Discovery"],
    accent: "violet",
  },
];

function PortfolioCard({ p }: { p: (typeof PORTFOLIO)[0] }) {
  return (
    <GlassCard accent={p.accent} className="rph-portfolio-card">
      <div className="rph-portfolio-card__top">
        <div className="rph-portfolio-card__code">{p.code}</div>
        <StatusBadge status={p.status} />
      </div>
      <div className="rph-portfolio-card__short">{p.short}</div>
      <h3 className="rph-portfolio-card__name">{p.name}</h3>
      <p className="rph-portfolio-card__desc">{p.desc}</p>
      <div className="rph-portfolio-card__tags">
        {p.tags.map((t, i) => (
          <span key={i} className="rph-tag">{t}</span>
        ))}
      </div>
      <a className="rph-portfolio-card__link" href={p.url} target="_blank" rel="noopener">
        <span className="rph-portfolio-card__url">
          {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
        <span className="rph-portfolio-card__icon">
          <IconExtLink size={13} />
        </span>
      </a>
      <div className="rph-portfolio-card__shine" />
    </GlassCard>
  );
}

export function PortfolioSection() {
  return (
    <section className="rph-section rph-portfolio" id="portfolio">
      <div className="rph-container">
        <SectionLabel number="04" label="Portfolio" />
        <div className="rph-portfolio__head">
          <h2 className="rph-h2">
            A growing network of{" "}
            <span className="editorial text-aurora">AI-native platforms</span>.
          </h2>
          <p className="lead rph-portfolio__lead">
            Not a collection of isolated apps — a network of use cases, data
            layers, market systems, and automation engines that strengthen each
            other.
          </p>
        </div>
        <div className="rph-portfolio__grid">
          {PORTFOLIO.map((p, i) => (
            <PortfolioCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EngineSection
   ============================================================ */
const ENGINE_STAGES = [
  { k: "Idea", sub: "product intent" },
  { k: "AI Software Engine", sub: "generate · connect · monitor", big: true },
  { k: "Product", sub: "interfaces · workflows" },
  { k: "Platform", sub: "data · APIs · users" },
  { k: "Ecosystem", sub: "autonomous expansion" },
];

const CAPS = [
  "Understand product intent",
  "Generate application interfaces",
  "Write and improve code",
  "Connect databases and APIs",
  "Build workflows",
  "Monitor usage in real time",
  "Optimize performance loops",
  "Launch new vertical products",
  "Expand the ecosystem automatically",
];

function EngineDiagram() {
  return (
    <div className="rph-engine-diagram">
      {ENGINE_STAGES.map((s, i) => (
        <Fragment key={i}>
          <div className={`rph-engine-node ${s.big ? "rph-engine-node--big" : ""}`}>
            <div className="rph-engine-node__inner">
              <div className="rph-engine-node__index">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="rph-engine-node__k">{s.k}</div>
              <div className="rph-engine-node__sub">{s.sub}</div>
            </div>
          </div>
          {i < ENGINE_STAGES.length - 1 && (
            <div className="rph-engine-link">
              <svg viewBox="0 0 80 20" preserveAspectRatio="none" className="rph-engine-link__svg">
                <line x1="0" y1="10" x2="80" y2="10" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 4" />
                <circle r="2.4" fill="#67E8F9" className="rph-engine-link__bead">
                  <animateMotion dur="2.6s" repeatCount="indefinite" path="M 0 10 L 80 10" />
                </circle>
              </svg>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function EngineSection() {
  return (
    <section className="rph-section rph-engine" id="engine">
      <div className="rph-container">
        <SectionLabel number="05" label="Auto-Software Engine" />
        <div className="rph-engine__head">
          <h2 className="rph-h2">
            The <span className="editorial text-aurora">Auto-Software</span>{" "}
            Layer.
          </h2>
          <p className="lead rph-engine__lead">
            The long-term vision: an AI system that turns ideas into working
            platforms — without human engineers at every step.
          </p>
        </div>
        <div className="rph-engine__diagram-wrap">
          <EngineDiagram />
        </div>
        <div className="rph-engine__caps">
          {CAPS.map((c, i) => (
            <div key={i}>
              <div className="rph-engine__cap">
                <span className="rph-engine__cap-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rph-engine__cap-txt">{c}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   InvestorSection
   ============================================================ */
const METRICS = [
  { val: "$4.4T", label: "Enterprise software market by 2027", sub: "AI-native share still <5%" },
  { val: "78%", label: "CXOs accelerating AI transformation", sub: "Per McKinsey 2024 survey" },
  { val: "12×", label: "AI infra investment growth rate", sub: "YoY across all verticals" },
];

const PILLARS = [
  { k: "AI Operating Layer", d: "AI as the substrate for all digital creation across the portfolio — not a feature, but the foundation." },
  { k: "Vertical Depth", d: "Eight industries already mapped with live platforms. Each new product sharpens the engine for the next." },
  { k: "Compounding Returns", d: "Platforms share AI infrastructure. Each new vertical reduces the marginal cost of the next." },
];

export function InvestorSection() {
  return (
    <section className="rph-section rph-investor" id="investors">
      <div className="rph-container">
        <SectionLabel number="06" label="For Investors" />
        <div className="rph-investor__inner">
          <h2 className="rph-h2 rph-investor__h">
            The next software giant may not{" "}
            <span className="editorial text-aurora">write software manually</span>.
          </h2>
          <p className="lead rph-investor__lead">
            The company that teaches AI to build software for everything — across
            finance, property, insurance, markets, civic data, and real-world
            assets — will define the infrastructure layer of the next economy.
          </p>

          <div className="rph-investor__metrics">
            {METRICS.map((m, i) => (
              <div key={i} className="rph-investor__metric-card">
                <div className="rph-investor__metric-val">{m.val}</div>
                <div className="rph-investor__metric-label">{m.label}</div>
                <div className="rph-investor__metric-sub">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="rph-investor__pillars">
            {PILLARS.map((p, i) => (
              <div key={i} className="rph-investor__pillar">
                <div className="rph-investor__pillar-k">{p.k}</div>
                <div className="rph-investor__pillar-d">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FinalCTA
   ============================================================ */
export function FinalCTA() {
  return (
    <section className="rph-section rph-cta" id="contact">
      <div className="rph-container">
        <div className="rph-cta__panel">
          <div className="rph-cta__glow" />
          <div className="rph-cta__inner">
            <div className="rph-hero__eyebrow-row" style={{ justifyContent: "center", marginBottom: 24 }}>
              <span className="rph-hero__eyebrow-dot" />
              <span className="rph-hero__eyebrow-text">Next Economy</span>
            </div>
            <h2 className="rph-cta__h">
              AI will run the next economy.
              <br />
              We are{" "}
              <span className="editorial text-aurora">building where it runs</span>.
            </h2>
            <div className="rph-cta__btns">
              <Button kind="primary" href="#portfolio" icon={<IconArrowRight size={13} />}>
                View Portfolio
              </Button>
              <Button kind="ghost" href="mailto:hello@rickypark.com" icon={<IconExtLink size={13} />}>
                Contact RickyPark Holdings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Footer
   ============================================================ */
export function Footer() {
  const cols = [
    {
      title: "Portfolio",
      links: PORTFOLIO.map((p) => ({ label: p.name, href: p.url })),
    },
    {
      title: "Company",
      links: [
        { label: "AI Transition", href: "#transition" },
        { label: "Thesis", href: "#thesis" },
        { label: "Auto-Software", href: "#engine" },
        { label: "For Investors", href: "#investors" },
        { label: "Contact", href: "mailto:hello@rickypark.com" },
      ],
    },
  ];
  return (
    <footer className="rph-footer">
      <div className="rph-container">
        <div className="rph-footer__top">
          <div className="rph-footer__brand">
            <div className="rph-footer__brand-row">
              <IconLogo size={30} />
              <div className="rph-footer__brand-wm">
                <span style={{ fontWeight: 600 }}>RickyPark</span>
                <span style={{ color: "var(--fg-4)", marginLeft: 6 }}>Holdings</span>
              </div>
            </div>
            <p className="rph-footer__desc">
              AI-native ecosystem company building autonomous software
              infrastructure across finance, property, markets, intelligence, and
              real-world assets.
            </p>
          </div>
          <div className="rph-footer__cols">
            {cols.map((c, i) => (
              <div key={i} className="rph-footer__col">
                <div className="rph-footer__col-h">{c.title}</div>
                <ul>
                  {c.links.map((l, j) => (
                    <li key={j}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="rph-footer__bottom">
          <div>© {new Date().getFullYear()} RickyPark Holdings — All rights reserved.</div>
          <div className="rph-footer__bottom-meta">
            <span
              className="rph-eyebrow__dot"
              style={{ background: "var(--sig-live)", boxShadow: "0 0 10px var(--sig-live)" }}
            />
            <span>Systems online · Building autonomously</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
