import Link from "next/link";
import { sampleNotices } from "../_data/notices";

export function NewsPage() {
  return (
    <main>
      <section className="inner-hero news-hero">
        <div className="inner-hero-pattern" aria-hidden="true" />
        <div className="page-container inner-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <strong>News &amp; notices</strong>
            </nav>
            <p className="eyebrow eyebrow-light">
              <span />
              News &amp; notices
            </p>
            <h1>Service notices and public updates, in one place.</h1>
            <p className="inner-intro">
              Read planned maintenance, interruption and restoration updates
              published for Mutitu Water Project customers.
            </p>
          </div>
          <aside className="feature-card">
            <small>Notice preview</small>
            <strong>{String(sampleNotices.length).padStart(2, "0")} samples</strong>
            <p>Demonstration notices for reviewing the website design.</p>
          </aside>
        </div>
      </section>

      <section className="news-page-body">
        <div className="page-container">
          <div className="news-sample-banner" role="note">
            <strong>Sample content for testing</strong>
            <p>
              The notices below are design examples only. They do not describe
              real interruptions and must be replaced with approved information
              before the website goes live.
            </p>
          </div>

          <div className="news-section-heading">
            <div>
              <p className="eyebrow">
                <span />
                Service updates
              </p>
              <h2>Notice detail preview</h2>
            </div>
            <p>
              Each homepage card links directly to its matching notice below.
            </p>
          </div>

          <div className="news-notice-list">
            {sampleNotices.map((notice, index) => (
              <article
                className={`news-notice-detail news-notice-${notice.status.toLowerCase()}`}
                id={notice.id}
                key={notice.id}
              >
                <header className="news-notice-header">
                  <div>
                    <span className="news-notice-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{notice.category}</p>
                  </div>
                  <span className="news-notice-status">
                    <i aria-hidden="true" />
                    {notice.status}
                  </span>
                </header>

                <div className="news-notice-title">
                  <p className="news-sample-label">Sample notice</p>
                  <h2>{notice.title}</h2>
                  <p>{notice.summary}</p>
                </div>

                <dl className="news-notice-facts">
                  <div>
                    <dt>Affected area</dt>
                    <dd>{notice.area}</dd>
                  </div>
                  <div>
                    <dt>Timing</dt>
                    <dd>{notice.timing}</dd>
                  </div>
                  <div>
                    <dt>Expected restoration</dt>
                    <dd>{notice.restoration}</dd>
                  </div>
                  <div>
                    <dt>Published</dt>
                    <dd>{notice.published}</dd>
                  </div>
                </dl>

                <div className="news-notice-content">
                  <div>
                    <h3>Notice details</h3>
                    <p>{notice.details}</p>
                  </div>
                  <div>
                    <h3>What customers should do</h3>
                    <ul>
                      {notice.customerActions.map((action) => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="news-notice-footer">
                  <p>Is your area affected by a different problem?</p>
                  <Link className="button button-alert" href="/report-a-problem">
                    Report a problem <span>→</span>
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
