import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="How do rules shape the choices of human nature? Delivery courier Cole Vance uses a programmer's mindset to exploit bugs and deconstruct arcane fate.">
      <header className="vanish-hero">
        <div className="container">
          <div className="row vanish-hero-row">
            <div className="col col--6 vanish-hero-left">
              <h1 className="vanish-hero-title">Vanishing Horizon</h1>
              <p className="vanish-hero-subtitle">
                An epic saga about "how rules shape the choices of human nature"
              </p>
              <div className="vanish-awards-badge-row">
                <span className="vanish-award-badge">🥇 2025 All-Channel Sales Champion</span>
                <span className="vanish-award-badge">🚀 2026 Best Innovative Work</span>
                <span className="vanish-award-badge">🌌 Locus Award: Best Genre Fusion</span>
              </div>
              <Link
                className="vanish-cta-button"
                to="/docs/"
                style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
                Initialize Narrative Engine · Start Reading
              </Link>

              <div className="vanish-tags-container">
                <span className="vanish-tag">Infinite Flow</span>
                <span className="vanish-tag">Rules Horror</span>
                <span className="vanish-tag">Lovecraftian</span>
                <span className="vanish-tag">Hard Sci-Fi</span>
                <span className="vanish-tag">Dual Leads</span>
                <span className="vanish-tag">Suspense Thriller</span>
                <span className="vanish-tag">Urban Supernatural</span>
                <span className="vanish-tag">Alternate History Politics</span>
                <span className="vanish-tag">Gamified Reality</span>
                <span className="vanish-tag">Romance</span>
              </div>
            </div>

            <div className="col col--6 vanish-hero-right">
              <div className="vanish-cover-wrapper">
                <img
                  src="/img/novel_cover.png"
                  className="vanish-novel-cover"
                  alt="Vanishing Horizon Book Cover"
                />
              </div>

              <div className="vanish-terminal">
                <div className="vanish-terminal-header">
                  <div className="vanish-terminal-dot red"></div>
                  <div className="vanish-terminal-dot yellow"></div>
                  <div className="vanish-terminal-dot green"></div>
                  <div className="vanish-terminal-title">Narrative Engine Console</div>
                </div>
                <div className="vanish-terminal-body">
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span>sys.init_narrative_engine_core()... </span>
                    <span className="vanish-terminal-success">SUCCESS</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span>loading_universe("Vanish_Main_World") </span>
                    <span className="vanish-terminal-info">[Active]</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span>scan_active_variables()</span>
                  </div>
                  <div className="vanish-terminal-line" style={{ paddingLeft: '15px' }}>
                    <span>- Cole_Vance (Urban Courier / BugTrigger): </span>
                    <span className="vanish-terminal-success">ONLINE</span>
                  </div>
                  <div className="vanish-terminal-line" style={{ paddingLeft: '15px' }}>
                    <span>- Dorian_Cross (Cold Enforcer / NarrativeAnchor): </span>
                    <span className="vanish-terminal-info">BOUNDED</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span className="vanish-terminal-warning">[WARN] Alert: Rule hot-update in progress. Spacetime format altered.</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span className="vanish-terminal-warning">[WARN] Detected abnormal 13th Mansion delivery order.</span>
                  </div>
                  <div className="vanish-terminal-line">
                    <span className="vanish-terminal-prompt">&gt;</span>
                    <span className="vanish-terminal-info">[QUEST] Break the rules, override the typewriter, rewrite the end.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="vanish-features-section">
        <div className="container">
          <div className="row">
            <div className="col col--4 margin-bottom--lg">
              <div className="vanish-card">
                <div className="vanish-card-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4"></path>
                  </svg>
                </div>
                <h3 className="vanish-card-title">Rule Hot-Reloads & Free Will</h3>
                <p className="vanish-card-description">When the world is hot-reloaded like a game, and spacetime, laws, and identities are rewritten in an instant, how does a bottom-tier lifeform preserve free will and self-awareness under the system resets?</p>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="vanish-card">
                <div className="vanish-card-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="vanish-card-title">Soul Intersections</h3>
                <p className="vanish-card-description">In countless dead-end abysses where memories are wiped and stances are opposed, how does a bond beyond life and death with Dorian Cross serve as the sole anchor for two lonely souls in a simulated universe?</p>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="vanish-card">
                <div className="vanish-card-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="vanish-card-title">An Urban Courier Exploiting Bugs</h3>
                <p className="vanish-card-description">Programmer-turned-courier Cole Vance uses rigorous computational logic to deconstruct unknown Lovecraftian metaphysics and higher-dimensional wars, transforming from a pawn of fate into the author of the script.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="vanish-reviews-section">
        <div className="container">
          <h2 className="vanish-reviews-title">💬 Critical Acclaim · From Hard Sci-Fi to Modern Allegory</h2>
          <div className="row">
            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">"It writes the coldest higher-dimensional poetry inside the absurd digital landscape."</div>
                  <p className="vanish-review-text">
                    The image of Cole Vance straddling his code-crackling scooter, Dorian Cross riding behind him, charging toward the Endpoint Tower — it possesses a visceral, poetic power. This is not merely science fiction. It is a high-energy hacking of real-world fate through the logic of computation.
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">A</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">Dr. Arthur Sterling</span>
                    <span className="vanish-review-title-desc">Bestselling Hard Sci-Fi Novelist</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">"This is the most ferocious, black-humored rebellion of the contemporary tool-human against fate itself."</div>
                  <p className="vanish-review-text">
                    In reality, couriers are trapped in the platform's algorithmic system. In this novel, that predicament is pushed to the extreme of higher-dimensional mechanism — "timeout equals erasure." Cole Vance doesn't choose to smash the machine. He chooses to become the person who understands the machine best. This is a work of magical realism — an answer delivered to the age of the algorithm.
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">S</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">Prof. Sarah Jenkins</span>
                    <span className="vanish-review-title-desc">Media & Cultural Studies Scholar, Stanford University</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">"The logic is airtight as a perfect murder indictment. Addictive. Absolutely goddamn addictive."</div>
                  <p className="vanish-review-text">
                    The plot-thread management in this novel can only be described as flawless. Ten core mysteries — not a single one dropped. Chapter 12: the protagonist, relying on nothing but a programmer's pure If-Then logic, crashes a horror specter's CPU until it detonates. This is absolute gospel for anyone with obsessive-compulsive tendencies.
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">G</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">Gillian Thorne</span>
                    <span className="vanish-review-title-desc">Acclaimed Thriller Author</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--6 margin-bottom--lg">
              <div className="vanish-review-card">
                <div>
                  <div className="vanish-review-quote">"Eleven Laws and the thing didn't collapse! The two leads' 'Life-Sympathy' achieves pure, unadulterated romance."</div>
                  <p className="vanish-review-text">
                    Two men, tormented by the Life-Sympathy bond, sharing fatal wounds while being forced by the system to deliver confessions in the middle of a serious horror battlefield — this blend of absurdity and tension simply plays the reader's emotions like an instrument. The finale — writing the script by hand at the cosmic typewriter — is both explosive and devastatingly romantic.
                  </p>
                </div>
                <div className="vanish-review-author">
                  <div className="vanish-review-avatar">T</div>
                  <div className="vanish-review-info">
                    <span className="vanish-review-name">Tess Miller</span>
                    <span className="vanish-review-title-desc">Locus Award-Winning Fantasy Author</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
