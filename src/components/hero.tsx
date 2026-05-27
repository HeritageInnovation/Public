import { IconArrowRight, IconSparkle } from "./icons";
import { Button } from "./atoms";
import HeroVisual from "./hero-visual";

export default function Hero() {
  return (
    <section className="rph-hero">
      <div className="rph-hero__inner">
        <div className="rph-hero__copy">
          <div className="rph-hero__eyebrow-row">
            <span className="rph-hero__eyebrow-dot" />
            <span className="rph-hero__eyebrow-text">
              Enterprise AI Infrastructure
            </span>
            <span className="rph-hero__eyebrow-sep">·</span>
            <span className="rph-hero__eyebrow-text">RickyPark Holdings</span>
          </div>

          <h1 className="rph-hero__title">
            Corporations are
            <br />
            shifting to AI.
            <br />
            <span className="editorial text-aurora">
              We build where
              <br />
              they land.
            </span>
          </h1>

          <p className="rph-hero__sub">
            RickyPark Holdings creates the infrastructure, interfaces, and
            intelligence platforms that enable organizations to operate as
            AI-native systems — across finance, property, markets, civic data,
            and real-world asset infrastructure.
          </p>

          <div className="rph-hero__ctas">
            <Button
              kind="primary"
              href="#portfolio"
              icon={<IconArrowRight size={13} />}
            >
              Explore Portfolio
            </Button>
            <Button
              kind="ghost"
              href="#thesis"
              icon={<IconSparkle size={13} />}
            >
              Our AI Thesis
            </Button>
          </div>

          <div className="rph-hero__proof">
            <div className="rph-hero__proof-item">
              <div className="rph-hero__proof-num">$4.4T</div>
              <div className="rph-hero__proof-sub">
                enterprise software market by 2027
              </div>
            </div>
            <div className="rph-hero__proof-sep" />
            <div className="rph-hero__proof-item">
              <div className="rph-hero__proof-num">78%</div>
              <div className="rph-hero__proof-sub">
                of CXOs accelerating AI transformation
              </div>
            </div>
            <div className="rph-hero__proof-sep" />
            <div className="rph-hero__proof-item">
              <div className="rph-hero__proof-num">7</div>
              <div className="rph-hero__proof-sub">
                AI-native platforms already live
              </div>
            </div>
          </div>
        </div>

        <div className="rph-hero__viz-wrap">
          <HeroVisual />
        </div>
      </div>

      <div className="rph-hero__cue">
        <span>SCROLL</span>
        <span className="rph-hero__cue-line" />
      </div>
    </section>
  );
}
