"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";

const serviceLinks = [
  ["All services", "/services#all-services"],
  ["Service areas & schedules", "/services#service-areas"],
  ["New water connection", "/services#new-connection"],
  ["Payment options", "/services#billing-payments"],
  ["Tariffs & charges", "/services#tariffs"],
  ["Water quality", "/services#water-quality"],
];
const careLinks = [
  ["Report a problem", "/report-a-problem"],
  ["Frequently asked questions", "/frequently-asked-questions"],
  ["Downloads & forms", "/downloads"],
];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setIsScrolled((current) =>
        current ? scrollPosition > 40 : scrollPosition > 140,
      );
    }

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeMenus]);

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}`}
      ref={headerRef}
    >
      <div className="utility-bar">
        <div className="page-container utility-inner">
          <p>A clean, reliable water service for every community.</p>
          <div>
            <span aria-hidden="true">•</span>

            <Link href="/contact" onClick={closeMenus}>
              Customer care
            </Link>
            <span aria-hidden="true">•</span>
          </div>
        </div>
      </div>
      <div className="main-nav-wrap">
        <div className="page-container main-nav">
          <Link
            className="brand"
            href="/"
            aria-label="Mutitu Water Project home"
            onClick={closeMenus}
          >
            <Image
              className="brand-logo"
              src="/assets/logo.jpg"
              alt=""
              width={96}
              height={96}
              priority
            />
            <span>
              <strong>Mutitu Water</strong>
              <small>Water for prosperity</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/about" onClick={closeMenus}>
              About
            </Link>
            <details onToggle={keepOnlyCurrentMenuOpen}>
              <summary>
                Services <span>⌄</span>
              </summary>
              <div className="nav-menu">
                {serviceLinks.map(([label, href]) => (
                  <Link href={href} key={href} onClick={closeMenus}>
                    {label}
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </details>
            <details onToggle={keepOnlyCurrentMenuOpen}>
              <summary>
                Customer care <span>⌄</span>
              </summary>
              <div className="nav-menu">
                {careLinks.map(([label, href]) => (
                  <Link
                    className={
                      href === "/report-a-problem"
                        ? "urgent-nav-link"
                        : undefined
                    }
                    href={href}
                    key={href}
                    onClick={closeMenus}
                  >
                    {label}
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/news" onClick={closeMenus}>
              News
            </Link>
            <Link href="/opportunities" onClick={closeMenus}>
              Tenders & careers
            </Link>
            <Link href="/contact" onClick={closeMenus}>
              Contact
            </Link>
          </nav>
          <Link
            className="portal-link"
            href="/customer-portal"
            onClick={closeMenus}
          >
            <span className="portal-dot" /> Customer portal <strong>→</strong>
          </Link>
          <details className="mobile-menu" onToggle={keepOnlyCurrentMenuOpen}>
            <summary aria-label="Open navigation">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              <Link href="/" onClick={closeMenus}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenus}>
                About Mutitu Water
              </Link>
              {serviceLinks.map(([label, href]) => (
                <Link href={href} key={href} onClick={closeMenus}>
                  {label}
                </Link>
              ))}
              {careLinks.map(([label, href]) => (
                <Link
                  className={
                    href === "/report-a-problem" ? "urgent-nav-link" : undefined
                  }
                  href={href}
                  key={href}
                  onClick={closeMenus}
                >
                  {label}
                </Link>
              ))}
              <Link href="/news" onClick={closeMenus}>
                News & public notices
              </Link>
              <Link href="/opportunities" onClick={closeMenus}>
                Tenders & careers
              </Link>
              <Link href="/contact" onClick={closeMenus}>
                Contact
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
