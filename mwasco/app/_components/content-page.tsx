import Link from "next/link";
import type { SitePage } from "../_data/site-content";

export function ContentPage({ page }: { page: SitePage }) {
  return (
    <main>
      <section className="inner-hero">
        <div className="inner-hero-pattern" aria-hidden="true" />
        <div className="page-container inner-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><strong>{page.eyebrow}</strong></nav>
            <p className="eyebrow eyebrow-light"><span />{page.eyebrow}</p><h1>{page.title}</h1><p className="inner-intro">{page.intro}</p>
          </div>
          <aside className="feature-card"><small>{page.feature.label}</small><strong>{page.feature.value}</strong><p>{page.feature.note}</p></aside>
        </div>
      </section>
      <section className="page-body"><div className="page-container content-stack">
        {page.sections.map((section, sectionIndex) => (
          <article className="content-section" key={`${section.title}-${sectionIndex}`}>
            <div className="content-heading"><p className="eyebrow"><span />{section.label}</p><h2>{section.title}</h2>{section.body && <p>{section.body}</p>}</div>
            {section.bullets && <ul className="content-list">{section.bullets.map((bullet, index) => <li key={bullet}><span>{String(index + 1).padStart(2, "0")}</span><p>{bullet}</p></li>)}</ul>}
            {section.cards && <div className="content-card-grid">{section.cards.map((card, index) => (
              <div className="content-card" key={card.title}><span className="card-index">{String(index + 1).padStart(2, "0")}</span>{card.meta && <small>{card.meta}</small>}<h3>{card.title}</h3><p>{card.body}</p></div>
            ))}</div>}
          </article>
        ))}
      </div></section>
      <section className="page-cta-wrap"><div className="page-container"><div className="page-cta">
        <div><p className="eyebrow eyebrow-light"><span />Next step</p><h2>{page.cta.title}</h2><p>{page.cta.body}</p></div>
        <Link className="button button-lime" href={page.cta.href}>{page.cta.label} <span>→</span></Link>
      </div></div></section>
    </main>
  );
}
