"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, type SyntheticEvent } from "react";

const serviceLinks = [
  ["All services", "/services"], ["Service areas & schedules", "/service-areas"],
  ["New water connection", "/new-connection"], ["Billing & payments", "/billing-payments"],
  ["Tariffs & charges", "/tariffs"], ["Water quality", "/water-quality"],
];
const careLinks = [
  ["Water interruptions", "/interruptions"], ["Report a problem", "/report-a-problem"],
  ["Frequently asked questions", "/frequently-asked-questions"], ["Downloads & forms", "/downloads"],
];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);

  const closeMenus = useCallback(() => {
    headerRef.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((menu) => menu.removeAttribute("open"));
  }, []);

  function keepOnlyCurrentMenuOpen(event: SyntheticEvent<HTMLDetailsElement>) {
    const currentMenu = event.currentTarget;
    if (!currentMenu.open) return;

    headerRef.current
      ?.querySelectorAll<HTMLDetailsElement>("details[open]")
      .forEach((menu) => {
        if (menu !== currentMenu) menu.removeAttribute("open");
      });
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenus]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="utility-bar">
        <div className="page-container utility-inner">
          <p>A clean, reliable water service for every community.</p>
          <div><Link href="/contact" onClick={closeMenus}>Customer care</Link><span aria-hidden="true">•</span><button type="button" title="Kiswahili content will follow translation review">EN <span>/ SW</span></button></div>
        </div>
      </div>
      <div className="main-nav-wrap">
        <div className="page-container main-nav">
          <Link className="brand" href="/" aria-label="MWASCO home" onClick={closeMenus}>
            <span className="brand-mark">M</span><span><strong>MWASCO</strong><small>Mutitu Water & Sanitation</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/about" onClick={closeMenus}>About</Link>
            <details onToggle={keepOnlyCurrentMenuOpen}><summary>Services <span>⌄</span></summary><div className="nav-menu">{serviceLinks.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}<span>→</span></Link>)}</div></details>
            <details onToggle={keepOnlyCurrentMenuOpen}><summary>Customer care <span>⌄</span></summary><div className="nav-menu">{careLinks.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}<span>→</span></Link>)}</div></details>
            <Link href="/news" onClick={closeMenus}>News</Link><Link href="/opportunities" onClick={closeMenus}>Tenders & careers</Link><Link href="/contact" onClick={closeMenus}>Contact</Link>
          </nav>
          <Link className="portal-link" href="/billing-payments" onClick={closeMenus}><span className="portal-dot" /> Customer portal <strong>→</strong></Link>
          <details className="mobile-menu" onToggle={keepOnlyCurrentMenuOpen}>
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/" onClick={closeMenus}>Home</Link><Link href="/about" onClick={closeMenus}>About MWASCO</Link>
              {serviceLinks.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}</Link>)}
              {careLinks.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}</Link>)}
              <Link href="/news" onClick={closeMenus}>News & public notices</Link><Link href="/opportunities" onClick={closeMenus}>Tenders & careers</Link><Link href="/contact" onClick={closeMenus}>Contact</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
