"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    id: "all-services",
    label: "All services",
    title: "Choose the service you need",
    intro:
      "Connections, billing, tariffs, service areas and water quality are managed from this page.",
    items: [
      "Service areas & schedules",
      "New water connection",
      "Billing & payments",
      "Tariffs & charges",
      "Water quality",
    ],
  },
  {
    id: "service-areas",
    label: "Service areas",
    title: "Service areas and supply schedules",
    intro:
      "Check whether your location is served and ask the office for the current supply schedule.",
    items: [
      "Nyeri County",
      "Laikipia County",
      "Nyandarua County",
      "Check the current supply schedule",
      "Report an unlisted supply problem",
    ],
  },
  {
    id: "new-connection",
    label: "New connection",
    title: "Apply for a new water connection",
    intro: "Confirm service availability before submitting an application.",
    items: [
      "Confirm the property is serviceable",
      "Prepare identification and property details",
      "Submit the application",
      "Complete the site assessment",
      "Receive the approved quotation",
    ],
  },
  {
    id: "billing-payments",
    label: "Billing & payments",
    title: "Billing and payment support",
    intro: "Use only payment details confirmed by Mutitu Water Project.",
    items: [
      "Check your bill and meter reading",
      "Confirm the amount due",
      "Pay through an approved channel",
      "Keep the payment reference",
    ],
  },
  {
    id: "tariffs",
    label: "Tariffs",
    title: "Tariffs and service charges",
    intro:
      "Approved tariff figures and effective dates will be published here.",
    items: [
      "Water-consumption charges",
      "Connection charges",
      "Meter-related charges",
      "Effective dates and approval reference",
    ],
  },
  {
    id: "water-quality",
    label: "Water quality",
    title: "Water-quality information",
    intro:
      "Find monitoring information and report an unusual colour, smell or taste.",
    items: [
      "Water-source protection",
      "Treatment monitoring",
      "Distribution sampling",
      "Customer quality reports",
    ],
  },
];

export function ServicesPage() {
  const [activeId, setActiveId] = useState("all-services");

  useEffect(() => {
    function syncFromHash() {
      const requested = window.location.hash.slice(1);
      if (services.some((service) => service.id === requested)) {
        setActiveId(requested);
        window.requestAnimationFrame(() => {
          document
            .getElementById(requested)
            ?.scrollIntoView({ block: "nearest", inline: "center" });
        });
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeService =
    services.find((service) => service.id === activeId) ?? services[0];

  function selectService(id: string) {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <main>
      <section className="inner-hero services-hero">
        <div className="inner-hero-pattern" aria-hidden="true" />
        <div className="page-container inner-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <strong>Services</strong>
            </nav>
            <p className="eyebrow eyebrow-light">
              <span />
              Services
            </p>
            <h1>All water services in one place.</h1>
          </div>
          {/* <aside className="feature-card"><small>Quick access</small><strong>6 service areas</strong><p>No separate service pages to search through.</p></aside> */}
        </div>
      </section>

      <section className="services-tabs-section" id="service-tabs">
        <div className="page-container">
          <div
            className="services-tab-list"
            role="tablist"
            aria-label="Water services"
          >
            {services.map((service) => (
              <button
                aria-controls={`${service.id}-panel`}
                aria-selected={activeId === service.id}
                className={activeId === service.id ? "is-active" : ""}
                id={service.id}
                key={service.id}
                onClick={() => selectService(service.id)}
                role="tab"
                type="button"
              >
                {service.label}
              </button>
            ))}
          </div>

          <section
            aria-labelledby={activeService.id}
            className="service-tab-panel"
            id={`${activeService.id}-panel`}
            role="tabpanel"
          >
            <div className="service-tab-copy">
              <p className="eyebrow">
                <span />
                {activeService.label}
              </p>
              <h2>{activeService.title}</h2>
              <p>{activeService.intro}</p>
              <Link className="button button-navy" href="/contact">
                Contact the office <span>→</span>
              </Link>
            </div>
            <ol className="service-tab-listing">
              {activeService.items.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </section>
    </main>
  );
}
