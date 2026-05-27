"use client";

import { useEffect, useState } from "react";
import { IconLogo, IconArrowRight } from "./icons";
import { Button } from "./atoms";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`rph-nav${scrolled ? " rph-nav--scrolled" : ""}`}>
      <a href="#" className="rph-nav__brand">
        <IconLogo size={26} />
        <span className="rph-nav__wm">
          <span style={{ fontWeight: 600 }}>RickyPark</span>
          <span style={{ color: "var(--fg-4)", marginLeft: 6 }}>Holdings</span>
        </span>
      </a>
      <nav className="rph-nav__links">
        <a href="#transition">AI Transition</a>
        <a href="#thesis">Thesis</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#engine">Auto-Software</a>
        <a href="#investors">Investors</a>
      </nav>
      <div className="rph-nav__cta">
        <a className="rph-nav__quiet" href="#contact">
          Contact
        </a>
        <Button
          kind="primary"
          icon={<IconArrowRight size={13} />}
          href="#portfolio"
        >
          View Portfolio
        </Button>
      </div>
    </header>
  );
}
