import { ReactNode } from "react";

export function Button({
  kind = "primary",
  children,
  icon,
  href,
  onClick,
}: {
  kind?: "primary" | "ghost";
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const cls =
    kind === "primary"
      ? "rph-btn rph-btn--primary"
      : "rph-btn rph-btn--ghost";
  const inner = (
    <>
      <span>{children}</span>
      {icon ? <span className="rph-btn__icon">{icon}</span> : null}
    </>
  );
  if (href)
    return (
      <a
        className={cls}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener"
      >
        {inner}
      </a>
    );
  return (
    <button className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rph-section-label">
      <span className="rph-section-label__num">{number}</span>
      <span className="rph-section-label__line" />
      <span className="rph-section-label__text">{label}</span>
    </div>
  );
}

export function GlassCard({
  children,
  hover = true,
  accent = "cyan",
  className = "",
}: {
  children: ReactNode;
  hover?: boolean;
  accent?: string;
  className?: string;
}) {
  return (
    <div
      className={`rph-glass ${hover ? "rph-glass--hover" : ""} rph-glass--${accent} ${className}`}
    >
      {children}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { color: string; label: string }> = {
    "Live / In Development": {
      color: "var(--sig-live)",
      label: "Live · In Dev",
    },
    "Under Development": {
      color: "var(--sig-dev)",
      label: "Under Development",
    },
    Prototype: { color: "var(--sig-proto)", label: "Prototype" },
  };
  const c = map[status] || { color: "var(--fg-3)", label: status };
  return (
    <span className="rph-badge">
      <span
        className="rph-badge__dot"
        style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }}
      />
      <span style={{ color: c.color }}>{c.label}</span>
    </span>
  );
}
