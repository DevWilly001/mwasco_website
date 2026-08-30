import Link from "next/link";

const mapUrl = "https://maps.app.goo.gl/6fisaahZrBUr3st48";

export function ContactPage() {
  return (
    <main>
      <section className="inner-hero contact-hero">
        <div className="inner-hero-pattern" aria-hidden="true" />
        <div className="page-container inner-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><strong>Contact us</strong></nav>
            <p className="eyebrow eyebrow-light"><span />Contact us</p>
            <h1>Call, visit or find us on the map.</h1>
            <p className="inner-intro">Mutitu Water Project office information from the supplied Google Maps listing.</p>
          </div>
          <aside className="feature-card"><small>Office phone</small><strong>0741 508321</strong><p>Mon-Thu: 8am-5pm | Fri: 8am-4pm | Sat: 8am-1pm</p></aside>
        </div>
      </section>

      <section className="contact-section">
        <div className="page-container contact-grid">
          <div className="contact-details">
            <p className="eyebrow"><span />Office information</p>
            <h2>Mutitu Water Project</h2>
            <div className="contact-cards">
              <a href="tel:0741508321"><small>Phone</small><strong>0741 508321</strong><span>Call office →</span></a>
              <a href={mapUrl} rel="noreferrer" target="_blank"><small>Location</small><strong>VP68+V2G, 1-10129</strong><span>Open directions →</span></a>
              <div><small>Located at</small><strong>Saints Peter and Paul Mugunda Catholic Parish</strong><span>Mugunda, Kenya</span></div>
              <div className="contact-hours-card"><small>Working hours</small><strong>Mon-Thu: 8am-5pm</strong><span>Fri: 8am-4pm<br />Sat: 8am-1pm</span></div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              allowFullScreen
              aria-label="Mutitu Water Project office location"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8067791566054!2d36.715064!3d-0.13781179999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828310008cd4e99%3A0xb304323d5bd39158!2sMutitu%20Water%20Project!5e0!3m2!1sen!2ske!4v1788000516407!5m2!1sen!2ske"
              title="Mutitu Water Project map"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
