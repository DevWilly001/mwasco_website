import Image from "next/image";
import Link from "next/link";

const communityPriorities = [
  {
    number: "01",
    title: "Listen before planning",
    body: "Community discussions, customer reports and local service patterns help identify where attention is needed most.",
  },
  {
    number: "02",
    title: "Keep water points useful",
    body: "Access points, valves, pipelines and related infrastructure need routine checks and timely maintenance.",
  },
  {
    number: "03",
    title: "Communicate service changes",
    body: "Clear notices help residents prepare for planned works, interruptions and restoration timelines.",
  },
  {
    number: "04",
    title: "Support essential institutions",
    body: "Schools, health facilities, businesses and community centres depend on practical service information and support.",
  },
  {
    number: "05",
    title: "Promote safe water use",
    body: "Water-quality awareness, responsible storage and prompt reporting protect customers throughout the service area.",
  },
  {
    number: "06",
    title: "Protect water resources",
    body: "Source protection, careful use and early leak reporting support a more resilient water supply for everyone.",
  },
];

export function CommunityPage() {
  return (
    <main>
      <section className="inner-hero community-hero">
        <div className="inner-hero-pattern" aria-hidden="true" />
        <div className="page-container inner-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <strong>Community</strong>
            </nav>
            <p className="eyebrow eyebrow-light">
              <span />
              Working with communities
            </p>
            <h1>Water service shaped around everyday community needs.</h1>
            <p className="inner-intro">
              Mutitu Water Project connects service planning, field operations,
              customer support and responsible water use with the communities it serves.
            </p>
          </div>
          <aside className="feature-card">
            <small>Service area</small>
            <strong>Three counties</strong>
            <p>Nyeri, Laikipia and Nyandarua.</p>
          </aside>
        </div>
      </section>

      <section className="community-overview">
        <div className="page-container community-split">
          <figure className="community-image community-image-large">
            <Image
              alt="Illustrative view of residents using a maintained community water point"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              src="/mwasco_website/assets/community-water-point.png"
            />
            <figcaption>Illustrative community water-point image</figcaption>
          </figure>
          <div className="community-copy">
            <p className="eyebrow">
              <span />
              Community-centred service
            </p>
            <h2>Local knowledge makes water services more practical.</h2>
            <p>
              Every community experiences water access differently. Distance,
              terrain, population, public institutions, farming activity and the
              condition of local infrastructure all influence day-to-day needs.
            </p>
            <p>
              A community-centred approach brings those realities into planning.
              It connects what customers report with field inspections, maintenance
              priorities, service notices and longer-term improvements.
            </p>
            <Link className="text-link" href="/contact">
              Share a local service concern <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="community-priorities-section">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span />
                What this means in practice
              </p>
              <h2>Six areas guide community-focused work.</h2>
            </div>
            <p>
              The page can be updated with approved programmes, results and
              community stories as they become available.
            </p>
          </div>
          <div className="community-priority-grid">
            {communityPriorities.map((priority) => (
              <article key={priority.number}>
                <span>{priority.number}</span>
                <h3>{priority.title}</h3>
                <p>{priority.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="community-field-section">
        <div className="page-container community-split community-split-reverse">
          <div className="community-copy">
            <p className="eyebrow">
              <span />
              From reports to field work
            </p>
            <h2>Service reliability depends on visible, consistent maintenance.</h2>
            <p>
              Customer reports help direct attention to leaks, low pressure,
              damaged connections and interrupted supply. Field teams then assess
              the issue, identify the required repair and communicate what customers
              should expect.
            </p>
            <ul className="community-checklist">
              <li><span>✓</span> Record the location and type of problem.</li>
              <li><span>✓</span> Inspect the affected infrastructure.</li>
              <li><span>✓</span> Prioritise urgent public-health and supply risks.</li>
              <li><span>✓</span> Update customers when service conditions change.</li>
            </ul>
            <Link className="button button-alert" href="/report-a-problem">
              Report a water problem <span>→</span>
            </Link>
          </div>
          <figure className="community-image">
            <Image
              alt="Illustrative view of water technicians inspecting community pipeline infrastructure"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/mwasco_website/assets/community-pipeline-maintenance.png"
            />
            <figcaption>Illustrative field-maintenance image</figcaption>
          </figure>
        </div>
      </section>

      <section className="community-engagement-section">
        <div className="page-container community-split">
          <figure className="community-image">
            <Image
              alt="Illustrative community consultation between residents and water-project staff"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/mwasco_website/assets/community-engagement.png"
            />
            <figcaption>Illustrative community-engagement image</figcaption>
          </figure>
          <div className="community-copy">
            <p className="eyebrow">
              <span />
              Participation and feedback
            </p>
            <h2>Good decisions start with clear conversations.</h2>
            <p>
              Residents, local leaders, institutions and businesses can highlight
              issues that are not obvious from technical records alone. Structured
              feedback helps explain who is affected, how long a concern has existed
              and what a practical response should consider.
            </p>
            <p>
              Mutitu Water Project can use this page to publish verified community
              meeting dates, project updates and participation opportunities once
              those details are approved.
            </p>
          </div>
        </div>
      </section>

      <section className="page-cta-wrap">
        <div className="page-container">
          <div className="page-cta">
            <div>
              <p className="eyebrow eyebrow-light">
                <span />
                Be part of better service
              </p>
              <h2>Tell us what your community needs.</h2>
              <p>
                Share service concerns, request information or contact the office
                about local water access.
              </p>
            </div>
            <Link className="button button-lime" href="/contact">
              Contact Mutitu Water <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
