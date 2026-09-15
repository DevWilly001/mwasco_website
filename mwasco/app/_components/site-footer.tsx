import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-ribbon">
        <div className="page-container ribbon-inner">
          <div>
            <span className="ribbon-symbol">!</span>
            <p>
              <strong>Leak, burst or no water?</strong>
              <small className="text-black">
                Call with the exact location of the problem.
              </small>
            </p>
          </div>
          <Link className="footer-alert-link" href="/report-a-problem">
            Report a problem <span>→</span>
          </Link>
        </div>
      </div>

      <div className="page-container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <Image
              className="brand-logo"
              src="/mwasco_website/assets/logo.jpg"
              alt=""
              width={96}
              height={96}
            />
            <span>
              <strong>Mutitu Water</strong>
              <small>Water for prosperity</small>
            </span>
          </Link>
        </div>

        <div>
          <h2>Services</h2>
          <Link href="/services#new-connection">New connection</Link>
          <Link href="/services#billing-payments">Payment options</Link>
          <Link href="/services#tariffs">Tariffs & charges</Link>
          <Link href="/services#service-areas">Service areas</Link>
          <Link href="/services#water-quality">Water quality</Link>
        </div>

        <div>
          <h2>Contact</h2>
          <a href="tel:0741508321">0741 508321</a>
          <a
            href="https://maps.app.goo.gl/6fisaahZrBUr3st48"
            rel="noreferrer"
            target="_blank"
          >
            VP68+V2G, 1-10129
          </a>
          <span className="footer-hours">Mon-Thu: 8am-5pm</span>
          <span className="footer-hours">Fri: 8am-4pm | Sat: 8am-1pm</span>
          <Link href="/contact">Map & office details</Link>
        </div>

        <div>
          <h2>Company</h2>
          <Link href="/about">About us</Link>
          <Link href="/community">Community work</Link>
          <Link href="/news">News & notices</Link>
          <Link href="/opportunities">Tenders & careers</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of use</Link>
        </div>
      </div>

      <div className="page-container footer-bottom">
        <p>© {new Date().getFullYear()} Mutitu Water Project.</p>
      </div>
    </footer>
  );
}
