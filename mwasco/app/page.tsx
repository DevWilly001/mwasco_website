import Link from "next/link";

const quickActions = [
  { number: "01", title: "Check your bill", copy: "View your balance and recent account activity.", href: "/billing-payments" },
  { number: "02", title: "Pay your bill", copy: "Find verified payment instructions and receipts.", href: "/billing-payments" },
  { number: "03", title: "Report a problem", copy: "Tell us about leaks, low pressure or no water.", href: "/report-a-problem" },
  { number: "04", title: "New connection", copy: "Understand the requirements and application process.", href: "/new-connection" },
];

const services = [
  { label: "Water supply", title: "Reliable water for homes, institutions and businesses", href: "/services" },
  { label: "Customer support", title: "Clear help for accounts, meters and service requests", href: "/frequently-asked-questions" },
  { label: "Water quality", title: "Safe water backed by monitoring and transparent reports", href: "/water-quality" },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="page-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span />Water for life. Service you can trust.</p>
            <h1>Clean water.<br /><em>Closer to you.</em></h1>
            <p className="hero-lead">Access essential water services, timely updates and practical customer support from one clear, dependable place.</p>
            <div className="hero-actions">
              <Link className="button button-lime" href="/billing-payments">Pay water bill <span>→</span></Link>
              <Link className="button button-ghost" href="/interruptions">View water updates</Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="MWASCO service overview">
            <div className="water-orbit orbit-one" /><div className="water-orbit orbit-two" />
            <div className="hero-drop"><span>MW</span></div>
            <div className="status-card">
              <div className="status-topline"><span className="status-dot" /> Service updates</div>
              <strong>Stay informed</strong>
              <p>Check notices for planned works and supply interruptions affecting your area.</p>
              <Link href="/interruptions">Open updates <span>↗</span></Link>
            </div>
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true" />
      </section>

      <section className="quick-section" aria-labelledby="quick-heading">
        <div className="page-container">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow"><span />Quick access</p><h2 id="quick-heading">What can we help you with?</h2></div>
            <p>Everyday water services, made easier to find and understand.</p>
          </div>
          <div className="quick-grid">
            {quickActions.map((action) => (
              <Link className="quick-card" href={action.href} key={action.number}>
                <span className="quick-number">{action.number}</span><div><h3>{action.title}</h3><p>{action.copy}</p></div><span className="round-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="notice-band">
        <div className="page-container notice-layout">
          <div className="notice-icon" aria-hidden="true">!</div>
          <div className="notice-copy"><p className="eyebrow eyebrow-light"><span />Service notice centre</p><h2>Know before the tap runs dry.</h2><p>Planned maintenance and emergency updates will be published with the affected locations, expected duration and restoration progress.</p></div>
          <div className="notice-state"><span>Current website status</span><strong>No active notices published</strong><Link href="/interruptions">View notice centre →</Link></div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-container">
          <div className="section-heading"><div><p className="eyebrow"><span />Our services</p><h2>Built around the communities we serve.</h2></div><Link className="text-link" href="/services">Explore all services <span>→</span></Link></div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Link className="service-card" href={service.href} key={service.label}>
                <div className={`service-art service-art-${index + 1}`} aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="service-card-copy"><p>{service.label}</p><h3>{service.title}</h3><span className="text-link">Learn more →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-area-section">
        <div className="page-container area-grid">
          <div className="area-panel" aria-hidden="true">
            <div className="map-line line-a" /><div className="map-line line-b" /><div className="map-line line-c" /><span className="map-pin pin-one" /><span className="map-pin pin-two" /><span className="map-pin pin-three" />
            <div className="area-badge"><small>Service footprint</small><strong>3 counties</strong><span>Public record, subject to confirmation</span></div>
          </div>
          <div className="area-copy">
            <p className="eyebrow"><span />Where we serve</p><h2>Local service information, without the guesswork.</h2>
            <p>Find your service zone, water supply schedule and location-specific notices. MWASCO&apos;s latest publicly recorded service footprint covers parts of Nyeri, Laikipia and Nyandarua.</p>
            <ul className="check-list"><li><span>✓</span> Service-area information</li><li><span>✓</span> Water supply schedules</li><li><span>✓</span> Location-specific interruption notices</li></ul>
            <Link className="button button-navy" href="/service-areas">Find your service area <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section-space help-section">
        <div className="page-container help-grid">
          <div><p className="eyebrow"><span />Need a hand?</p><h2>Start with the right support channel.</h2><p className="section-intro">Get guidance for common questions, report a fault, or find the nearest MWASCO office.</p></div>
          <div className="help-links"><Link href="/frequently-asked-questions"><span>Frequently asked questions</span><strong>→</strong></Link><Link href="/report-a-problem"><span>Report a service problem</span><strong>→</strong></Link><Link href="/contact"><span>Contact and office information</span><strong>→</strong></Link></div>
        </div>
      </section>
    </main>
  );
}
