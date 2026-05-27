import TopNav from "@/components/top-nav";
import Hero from "@/components/hero";
import RidgesCanvas from "@/components/ridges-canvas";
import {
  ShiftSection,
  CorporateTransitionSection,
  ThesisSection,
  PortfolioSection,
  EngineSection,
  InvestorSection,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <div className="rph-page-bg">
        <div className="rph-grid-bg" />
        <div style={{ position: "absolute", inset: 0 }}>
          <RidgesCanvas />
        </div>
      </div>

      <div className="rph-app">
        <TopNav />
        <Hero />
        <ShiftSection />
        <CorporateTransitionSection />
        <ThesisSection />
        <PortfolioSection />
        <EngineSection />
        <InvestorSection />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
