import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-ribbon"><div className="page-container ribbon-inner">
        <div><span className="ribbon-symbol">~</span><p><strong>See a burst or major leak?</strong><small>Use the reporting guidance so the right details reach the response team.</small></p></div>
        <Link href="/report-a-problem">Report a problem <span>→</span></Link>
      </div></div>
      <div className="page-container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/"><span className="brand-mark">M</span><span><strong>MWASCO</strong><small>Mutitu Water & Sanitation</small></span></Link>
          <p>Clear information and better access to essential water services for the communities we serve.</p>
          <span className="verification-note">Customer-care contacts pending official verification.</span>
        </div>
        <div><h2>Services</h2><Link href="/new-connection">New connections</Link><Link href="/billing-payments">Billing & payments</Link><Link href="/tariffs">Tariffs & charges</Link><Link href="/service-areas">Service areas</Link><Link href="/water-quality">Water quality</Link></div>
        <div><h2>Customer care</h2><Link href="/interruptions">Water interruptions</Link><Link href="/report-a-problem">Report a problem</Link><Link href="/frequently-asked-questions">FAQs</Link><Link href="/downloads">Downloads & forms</Link><Link href="/contact">Contact & offices</Link></div>
        <div><h2>Company</h2><Link href="/about">About MWASCO</Link><Link href="/news">News & notices</Link><Link href="/opportunities">Tenders & careers</Link><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link></div>
      </div>
      <div className="page-container footer-bottom"><p>© {new Date().getFullYear()} Mutitu Water and Sanitation Company Limited.</p><p>Draft public website · Company details require approval before launch.</p></div>
    </footer>
  );
}
