import Link from "next/link";
import Image from "next/image";
import { sampleNotices } from "./_data/notices";

const quickActions = [
  {
    number: "01",
    title: "Check your bill",
    copy: "View your balance and recent account activity.",
    href: "/customer-portal",
  },
  {
    number: "02",
    title: "Check payment options",
    copy: "Find verified payment instructions and receipts.",
    href: "/services#billing-payments",
  },
  {
    number: "03",
    title: "Report a problem",
    copy: "Tell us about leaks, low pressure or no water.",
    href: "/report-a-problem",
    urgent: true,
  },
  {
    number: "04",
    title: "New connection",
    copy: "Understand the requirements and application process.",
    href: "/services#new-connection",
  },
];

const services = [
  {
    label: "Water supply",
    title: "Reliable water for homes, institutions and businesses",
    href: "/services#service-areas",
  },
  {
    label: "Customer support",
    title: "Clear help for accounts, meters and service requests",
    href: "/services#billing-payments",
  },
  {
    label: "Water quality",
    title: "Safe water backed by monitoring and transparent reports",
    href: "/services#water-quality",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <Image
          className="hero-photo"
          src="/assets/mutitu-water-project-hero.jpg"
          alt="Entrance to the Mutitu Water Project office"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-photo-overlay" aria-hidden="true" />
        <div className="page-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">
              <span />
              Water for life. Service you can trust.
            </p>
            <h1>
              Clean water.
              <br />
              <em>Closer to you.</em>
            </h1>
            <p className="hero-lead">
              Access water services, notices and customer support in one place.
            </p>
            <div className="hero-actions">
              <Link className="button button-lime" href="/services#billing-payments">
                Check payment options <span>→</span>
              </Link>
              <Link className="button button-alert" href="#service-updates">
                View water updates
              </Link>
            </div>
          </div>
          {/* <div className="hero-visual" aria-label="Mutitu Water Project service overview">
            <div className="status-card">
              <div className="status-topline">
                <span className="status-dot" /> Service updates
              </div>
              <strong>Stay informed</strong>
              <p>
                Check notices for planned works and supply interruptions
                affecting your area.
              </p>
              <Link href="#service-updates">
                Open updates <span>↗</span>
              </Link>
            </div>
          </div> */}
        </div>
        <div className="hero-wave" aria-hidden="true" />
      </section>

      <section className="quick-section" aria-labelledby="quick-heading">
        <div className="page-container">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">
                <span />
                Quick access
              </p>
              <h2 id="quick-heading">What can we help you with?</h2>
            </div>
            
          </div>
          <div className="quick-grid">
            {quickActions.map((action) => (
              <Link
                className={`quick-card${action.urgent ? " urgent-card" : ""}`}
                href={action.href}
                key={action.number}
              >
                <span className="quick-number">{action.number}</span>
                <div>
                  <h3>{action.title}</h3>
                  <p>{action.copy}</p>
                </div>
                <span className="round-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="updates-section" id="service-updates" aria-labelledby="updates-heading">
        <div className="page-container">
          <div className="section-heading updates-heading">
            <div>
              <p className="eyebrow eyebrow-light">
                <span />
                Current service updates
              </p>
              <h2 id="updates-heading">
                Interruption notices, where customers see them first.
              </h2>
            </div>
            <Link className="button button-alert" href="/report-a-problem">
              Report a problem <span>→</span>
            </Link>
          </div>
          <div className="updates-grid">
            {sampleNotices.map((notice) => (
              <article
                className={`update-card update-notice-card update-notice-${notice.status.toLowerCase()}`}
                key={notice.id}
              >
                <div className="update-card-top">
                  <span className="update-badge">Sample notice</span>
                  <span className="update-count">{notice.status}</span>
                </div>
                <div className="update-card-body">
                  <span className="update-symbol" aria-hidden="true">!</span>
                  <p className="update-category">{notice.category}</p>
                  <h3>{notice.title}</h3>
                  <p>{notice.summary}</p>
                </div>
                <dl className="update-card-meta">
                  <div>
                    <dt>Area</dt>
                    <dd>{notice.area}</dd>
                  </div>
                  <div>
                    <dt>Timing</dt>
                    <dd>{notice.timing}</dd>
                  </div>
                </dl>
                <div className="update-card-footer">
                  <span><i className="update-dot" /> Demo content only</span>
                  <Link className="update-more-link" href={`/news#${notice.id}`}>
                    More <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                Our services
              </p>
              <h2>Built around the communities we serve.</h2>
            </div>
            <Link className="text-link" href="/community">
              Explore our community work <span>→</span>
            </Link>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Link
                aria-label={`Learn more about ${service.label}`}
                className="service-card"
                href={service.href}
                key={service.label}
              >
                <div
                  className={`service-art service-art-${index + 1}`}
                  aria-hidden="true"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="service-card-copy">
                  <p>{service.label}</p>
                  <h3>{service.title}</h3>
                  <span className="text-link">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-area-section">
        <div className="page-container area-grid">
          <div className="area-panel service-area-map">
            <iframe
              aria-label="Map showing the Mutitu Water Project service region"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.google.com/maps?q=0.0,36.75&z=8&output=embed"
              title="Mutitu Water Project service counties"
            />
            <div className="county-legend">
              <small>Service counties</small>
              <strong>Three-county service area</strong>
              <div><span>Nyeri</span><span>Laikipia</span><span>Nyandarua</span></div>
            </div>
          </div>
          <div className="area-copy">
            <p className="eyebrow">
              <span />
              Where we serve
            </p>
            <h2>Local service information, without the guesswork.</h2>
            <p>
              Mutitu Water Project serves communities across Nyeri, Laikipia
              and Nyandarua counties.
            </p>
            <ul className="check-list">
              <li>
                <span>✓</span> Nyeri County
              </li>
              <li>
                <span>✓</span> Laikipia County
              </li>
              <li>
                <span>✓</span> Nyandarua County
              </li>
            </ul>
            <Link className="button button-navy" href="/services#service-areas">
              Find your service area <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space help-section">
        <div className="page-container help-grid">
          <div>
            <p className="eyebrow">
              <span />
              Need a hand?
            </p>
            <h2>Start with the right support channel.</h2>
            <p className="section-intro">
              Get guidance for common questions, report a fault, or find the
              Mutitu Water Project office.
            </p>
          </div>
          <div className="help-links">
            <Link href="/frequently-asked-questions">
              <span>Frequently asked questions</span>
              <strong>→</strong>
            </Link>
            <Link href="/report-a-problem">
              <span>Report a service problem</span>
              <strong>→</strong>
            </Link>
            <Link href="/contact">
              <span>Contact and office information</span>
              <strong>→</strong>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
