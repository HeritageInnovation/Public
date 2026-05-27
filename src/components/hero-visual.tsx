"use client";

import { useEffect, useRef, useState } from "react";

const EVENT_POOL = [
  { text: "Contract logic automated · RWA Registry", type: "deploy" },
  { text: "Risk model updated · BridgeTree credit layer", type: "opt" },
  { text: "Prediction market signal · ChickenDinner", type: "signal" },
  { text: "Policy reasoning deployed · AI Insurance", type: "deploy" },
  { text: "Civic index refreshed · AIHK intelligence", type: "opt" },
  { text: "Property cluster expanded · HomeHK listings", type: "signal" },
  { text: "Stay algorithm updated · SatiStay discovery", type: "deploy" },
  { text: "AI code layer committed · auto-software engine", type: "opt" },
];

const INDUSTRIES = [
  { label: "Finance", pct: 74, color: "var(--cyan-400)", delta: "+12%" },
  { label: "Property", pct: 58, color: "var(--violet-300)", delta: "+9%" },
  { label: "Insurance", pct: 43, color: "var(--cyan-400)", delta: "+21%" },
  { label: "Markets", pct: 81, color: "var(--violet-300)", delta: "+6%" },
  { label: "Civic Data", pct: 37, color: "var(--cyan-400)", delta: "+34%" },
];

type DashEvent = {
  id: number;
  text: string;
  ts: string;
  type: string;
};

const TYPE_COLOR: Record<string, string> = {
  deploy: "var(--cyan-400)",
  opt: "var(--violet-300)",
  signal: "var(--warm-400)",
};
const TYPE_LABEL: Record<string, string> = {
  deploy: "DEPLOY",
  opt: "OPTIM",
  signal: "SIGNAL",
};

export default function HeroVisual() {
  const [tick, setTick] = useState(0);
  const [events, setEvents] = useState<DashEvent[]>([
    { id: 0, text: "AI layer deployed · BridgeTree Finance", ts: "00:00", type: "deploy" },
    { id: 1, text: "Workflow optimized · HomeHK property data", ts: "00:04", type: "opt" },
    { id: 2, text: "New vertical detected · Insurance signals", ts: "00:11", type: "signal" },
  ]);
  const poolRef = useRef(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setTick((t) => t + 1);
      if (Math.random() > 0.45) {
        const ev = EVENT_POOL[poolRef.current % EVENT_POOL.length];
        poolRef.current++;
        const mins = Math.floor(Date.now() / 60000) % 60;
        const secs = Math.floor(Date.now() / 1000) % 60;
        const ts = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
        setEvents((prev) => [
          { id: Date.now(), text: ev.text, ts, type: ev.type },
          ...prev.slice(0, 4),
        ]);
      }
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  const bar = (base: number, index: number) => {
    const drift = tick % 7 === 0 ? ((tick / 7 + index) % 2 === 0 ? 1 : -1) : 0;
    return Math.max(8, Math.min(99, base + drift));
  };

  return (
    <div className="rph-dash">
      <div className="rph-dash__header">
        <div className="rph-dash__header-left">
          <span className="rph-dash__live-dot" />
          <span className="rph-dash__label">AI Transition Monitor</span>
        </div>
        <div className="rph-dash__header-right">
          <span className="rph-dash__tag">v2.6.1</span>
          <span className="rph-dash__tag rph-dash__tag--hi">SYSTEMS ONLINE</span>
        </div>
      </div>

      <div className="rph-dash__industries">
        <div className="rph-dash__sec-label">Industry AI Adoption</div>
        {INDUSTRIES.map((ind, i) => (
          <div key={i} className="rph-dash__row">
            <div className="rph-dash__row-label">{ind.label}</div>
            <div className="rph-dash__bar-track">
              <div
                className="rph-dash__bar-fill"
                style={{
                  width: `${bar(ind.pct, i)}%`,
                  background: `linear-gradient(90deg, ${ind.color} 0%, rgba(255,255,255,0.55) 100%)`,
                  transition: "width 1.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>
            <div className="rph-dash__row-pct">{bar(ind.pct, i)}%</div>
            <div className="rph-dash__row-delta" style={{ color: ind.color }}>
              {ind.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="rph-dash__divider" />

      <div className="rph-dash__log">
        <div className="rph-dash__sec-label">Live Deployment Log</div>
        <div className="rph-dash__events">
          {events.map((ev) => (
            <div key={ev.id} className="rph-dash__event">
              <span className="rph-dash__event-ts">{ev.ts}</span>
              <span className="rph-dash__event-type" style={{ color: TYPE_COLOR[ev.type] }}>
                {TYPE_LABEL[ev.type]}
              </span>
              <span className="rph-dash__event-text">{ev.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rph-dash__footer">
        <div className="rph-dash__metric">
          <span className="rph-dash__metric-val">7</span>
          <span className="rph-dash__metric-lbl">Platforms</span>
        </div>
        <div className="rph-dash__metric-sep" />
        <div className="rph-dash__metric">
          <span className="rph-dash__metric-val">8</span>
          <span className="rph-dash__metric-lbl">Verticals</span>
        </div>
        <div className="rph-dash__metric-sep" />
        <div className="rph-dash__metric">
          <span className="rph-dash__metric-val">∞</span>
          <span className="rph-dash__metric-lbl">Auto layers</span>
        </div>
      </div>

      <div className="rph-dash__corner rph-dash__corner--tl" />
      <div className="rph-dash__corner rph-dash__corner--tr" />
      <div className="rph-dash__corner rph-dash__corner--bl" />
      <div className="rph-dash__corner rph-dash__corner--br" />
    </div>
  );
}
