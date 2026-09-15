"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

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
      "Payment options",
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
    label: "Payment options",
    title: "Payment options",
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

const paymentMethods = [
  {
    id: "mpesa",
    label: "M-Pesa",
    mark: "M",
    title: "Pay with M-Pesa",
    description:
      "Use the approved Mutitu Water Project PayBill details and your water account number.",
    steps: [
      "Open M-Pesa and choose Lipa na M-Pesa.",
      "Select Pay Bill.",
      "Enter the PayBill number confirmed by Mutitu Water Project.",
      "Enter your water account number as the account reference.",
      "Enter the amount and confirm with your M-Pesa PIN.",
    ],
    confirmation:
      "Keep the M-Pesa confirmation message until the payment appears on your account.",
  },
  {
    id: "equity",
    label: "Equity Bank",
    mark: "EQ",
    title: "Pay through Equity Bank or an agent",
    description:
      "Provide your water account number when paying at an approved Equity Bank branch or agent.",
    steps: [
      "Visit an approved Equity Bank branch or agent.",
      "State that you are making a Mutitu Water Project bill payment.",
      "Provide your water account number and the amount to pay.",
      "Check the account number and amount before confirming payment.",
      "Keep the transaction receipt as your payment reference.",
    ],
    confirmation:
      "Use only payment instructions confirmed by Mutitu Water Project before making a bank payment.",
  },
  {
    id: "coop",
    label: "Co-op Bank",
    mark: "CO",
    title: "Pay through Co-operative Bank or an agent",
    description:
      "Use your water account number when paying at an approved Co-operative Bank branch or agent.",
    steps: [
      "Visit an approved Co-operative Bank branch or agent.",
      "Ask to make a Mutitu Water Project bill payment.",
      "Provide your water account number and payment amount.",
      "Confirm the account reference before authorising payment.",
      "Keep the receipt for your records.",
    ],
    confirmation:
      "Contact the office if you need the approved channel details before paying.",
  },
  {
    id: "family",
    label: "Family Bank",
    mark: "FB",
    title: "Pay through Family Bank or an agent",
    description:
      "Use your water account number when paying at an approved Family Bank branch or agent.",
    steps: [
      "Visit an approved Family Bank branch or agent.",
      "Ask to make a Mutitu Water Project bill payment.",
      "Provide your water account number and payment amount.",
      "Review the account reference before confirming payment.",
      "Keep the transaction receipt for your records.",
    ],
    confirmation:
      "If a payment channel or detail is unclear, confirm it with the office before paying.",
  },
] as const;

type PaymentMethodId = (typeof paymentMethods)[number]["id"];

type BillEstimate = {
  consumptionCharge: number;
  standingCharge: number;
  total: number;
  units: number;
};

const currencyFormatter = new Intl.NumberFormat("en-KE", {
  style: "currency",
  currency: "KES",
  minimumFractionDigits: 2,
});

export function ServicesPage() {
  const [activeId, setActiveId] = useState("all-services");
  const [activePaymentMethod, setActivePaymentMethod] =
    useState<PaymentMethodId>("mpesa");
  const [previousReading, setPreviousReading] = useState("");
  const [currentReading, setCurrentReading] = useState("");
  const [ratePerUnit, setRatePerUnit] = useState("");
  const [standingCharge, setStandingCharge] = useState("");
  const [billEstimate, setBillEstimate] = useState<BillEstimate | null>(null);
  const [calculationError, setCalculationError] = useState("");

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
  const selectedPaymentMethod =
    paymentMethods.find((method) => method.id === activePaymentMethod) ??
    paymentMethods[0];

  function selectService(id: string) {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  function clearBillEstimate() {
    setBillEstimate(null);
    setCalculationError("");
  }

  function calculateBill(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!previousReading || !currentReading || !ratePerUnit) {
      setCalculationError("Enter the previous reading, current reading and approved water rate.");
      setBillEstimate(null);
      return;
    }

    const previous = Number(previousReading);
    const current = Number(currentReading);
    const rate = Number(ratePerUnit);
    const standing = standingCharge ? Number(standingCharge) : 0;

    if (
      !Number.isFinite(previous) ||
      !Number.isFinite(current) ||
      !Number.isFinite(rate) ||
      !Number.isFinite(standing) ||
      previous < 0 ||
      current < previous ||
      rate <= 0 ||
      standing < 0
    ) {
      setCalculationError(
        "Use valid values. The current meter reading must be equal to or higher than the previous reading.",
      );
      setBillEstimate(null);
      return;
    }

    const units = current - previous;
    const consumptionCharge = units * rate;
    setBillEstimate({
      units,
      consumptionCharge,
      standingCharge: standing,
      total: consumptionCharge + standing,
    });
    setCalculationError("");
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

          {activeId !== "billing-payments" && (
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
          )}

          {activeId === "new-connection" && (
            <section
              className="connection-details"
              id="connection-details"
              aria-labelledby="connection-details-heading"
            >
              <div className="connection-details-intro">
                <p className="eyebrow">
                  <span />
                  New water and sewerage connections
                </p>
                <h2 id="connection-details-heading">A clear process from request to reconnection.</h2>
                <p>
                  Mutitu Water Project aims to make connection requests, deposits,
                  disconnections and reconnections easier to understand.
                </p>
              </div>

              <div className="connection-commitments">
                <article>
                  <span>01</span>
                  <h3>Assessment and processing</h3>
                  <p>
                    We assess requests for water and sewer connections within 12
                    hours. Complete applications are processed within two working
                    days after the required forms and fees are received. Sewerage
                    connection works, including manhole construction, are supervised.
                  </p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Deposit refunds</h3>
                  <p>
                    Water deposits are refunded within seven working days of an
                    application, once all relevant documents have been received.
                  </p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Disconnections</h3>
                  <p>
                    For non-payment, disconnection may begin from the 14th day after
                    billing and a KSh 500 penalty is applied. Requested
                    disconnections are handled within 12 hours. Illegal consumption
                    after disconnection is penalised under the applicable tariff.
                  </p>
                </article>
                <article>
                  <span>04</span>
                  <h3>Reconnections</h3>
                  <p>
                    Supply is reconnected within 12 hours after applicable penalty
                    charges are received. A mistaken disconnection is reconnected
                    free of charge within 12 hours.
                  </p>
                </article>
              </div>

              <div className="connection-application">
                <div>
                  <p className="eyebrow">
                    <span />
                    How to apply
                  </p>
                  <h2>Apply for a new water connection.</h2>
                  <ol className="application-steps">
                    <li>
                      <span>01</span>
                      Get the application form from the Mutitu Water Project office
                      for KSh 200.
                    </li>
                    <li>
                      <span>02</span>
                      Complete the form and attach copies of your National ID, KRA
                      PIN and Title Deed.
                    </li>
                    <li>
                      <span>03</span>
                      If you do not have a Title Deed, have your local Chief or
                      Sub-Chief sign the application.
                    </li>
                    <li>
                      <span>04</span>
                      Return the completed form to the office for review and approval.
                    </li>
                  </ol>
                </div>
                <aside className="application-download-card">
                  <span className="download-icon" aria-hidden="true">↓</span>
                  <small>Application form</small>
                  <h3>View or download the connection form.</h3>
                  <p>
                    This draft form is provided for preparation. Confirm the
                    approved version and current fee with the office before submitting.
                  </p>
                  <div className="download-actions">
                    <a
                      className="button button-navy"
                      href="/forms/mutitu-water-new-connection-application-form.html"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View form <span>↗</span>
                    </a>
                    <a
                      className="button button-outline"
                      download
                      href="/forms/mutitu-water-new-connection-application-form.html"
                    >
                      Download <span>↓</span>
                    </a>
                  </div>
                </aside>
              </div>
            </section>
          )}

          {activeId === "billing-payments" && (
            <section
              className="payment-options"
              id="billing-payments-panel"
              aria-labelledby="billing-payments"
              role="tabpanel"
            >
              <aside className="payment-method-sidebar" aria-label="Payment options">
                <p>Payment options</p>
                <div role="tablist" aria-label="Approved payment channels">
                  {paymentMethods.map((method) => (
                    <button
                      aria-controls={`payment-method-${method.id}-details`}
                      aria-selected={activePaymentMethod === method.id}
                      className={
                        activePaymentMethod === method.id ? "is-active" : ""
                      }
                      id={`payment-method-${method.id}-tab`}
                      key={method.id}
                      onClick={() => setActivePaymentMethod(method.id)}
                      role="tab"
                      type="button"
                    >
                      <span className="payment-method-mark" aria-hidden="true">
                        {method.mark}
                      </span>
                      <span>{method.label}</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  ))}
                </div>
                <small>
                  Confirm the current payment details with Mutitu Water Project
                  before you pay.
                </small>
              </aside>

              <div
                className={`payment-method-detail payment-method-${selectedPaymentMethod.id}`}
                id={`payment-method-${selectedPaymentMethod.id}-details`}
                role="tabpanel"
                aria-labelledby={`payment-method-${selectedPaymentMethod.id}-tab`}
              >
                <p className="eyebrow">
                  <span />
                  How to pay
                </p>
                <h2 id="payment-options-heading">{selectedPaymentMethod.title}</h2>
                <p>{selectedPaymentMethod.description}</p>
                <ol className="payment-steps">
                  {selectedPaymentMethod.steps.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="payment-confirmation">
                  <strong>Remember:</strong> {selectedPaymentMethod.confirmation}
                </p>
              </div>
            </section>
          )}

          {activeId === "billing-payments" && (
            <section
              className="bill-calculator"
              id="bill-calculator"
              aria-labelledby="bill-calculator-heading"
            >
              <div className="bill-calculator-intro">
                <p className="eyebrow">
                  <span />
                  Water bill estimator
                </p>
                <h2 id="bill-calculator-heading">Calculate your water-use estimate.</h2>
                <p>
                  Enter the readings shown on your meter and the current approved
                  tariff figures to estimate your consumption charge.
                </p>
                <Link className="portal-text-link" href="/customer-portal">
                  Check your bill or submit a meter reading in the customer portal <span>→</span>
                </Link>
              </div>

              <form className="bill-calculator-form" onSubmit={calculateBill}>
                <div className="bill-form-grid">
                  <label>
                    <span>Previous meter reading</span>
                    <input
                      inputMode="decimal"
                      min="0"
                      onChange={(event) => {
                        setPreviousReading(event.target.value);
                        clearBillEstimate();
                      }}
                      placeholder="e.g. 1250"
                      required
                      step="0.01"
                      type="number"
                      value={previousReading}
                    />
                  </label>
                  <label>
                    <span>Current meter reading</span>
                    <input
                      inputMode="decimal"
                      min="0"
                      onChange={(event) => {
                        setCurrentReading(event.target.value);
                        clearBillEstimate();
                      }}
                      placeholder="e.g. 1268"
                      required
                      step="0.01"
                      type="number"
                      value={currentReading}
                    />
                  </label>
                  <label>
                    <span>Approved rate per unit (KSh)</span>
                    <input
                      inputMode="decimal"
                      min="0.01"
                      onChange={(event) => {
                        setRatePerUnit(event.target.value);
                        clearBillEstimate();
                      }}
                      placeholder="Enter current tariff rate"
                      required
                      step="0.01"
                      type="number"
                      value={ratePerUnit}
                    />
                  </label>
                  <label>
                    <span>Standing charge (KSh, optional)</span>
                    <input
                      inputMode="decimal"
                      min="0"
                      onChange={(event) => {
                        setStandingCharge(event.target.value);
                        clearBillEstimate();
                      }}
                      placeholder="0.00"
                      step="0.01"
                      type="number"
                      value={standingCharge}
                    />
                  </label>
                </div>

                {calculationError && (
                  <p className="bill-calculation-error" role="alert">
                    {calculationError}
                  </p>
                )}

                <div className="bill-calculator-footer">
                  <button className="button button-navy" type="submit">
                    Calculate bill estimate <span>→</span>
                  </button>
                  <p>
                    This is an estimate only. Your official account balance and
                    applicable tariff are confirmed through the customer portal or office.
                  </p>
                </div>
              </form>

              {billEstimate && (
                <aside className="bill-estimate-result" aria-live="polite">
                  <span>Estimated bill</span>
                  <strong>{currencyFormatter.format(billEstimate.total)}</strong>
                  <dl>
                    <div>
                      <dt>Water used</dt>
                      <dd>{billEstimate.units.toFixed(2)} units</dd>
                    </div>
                    <div>
                      <dt>Consumption charge</dt>
                      <dd>{currencyFormatter.format(billEstimate.consumptionCharge)}</dd>
                    </div>
                    <div>
                      <dt>Standing charge</dt>
                      <dd>{currencyFormatter.format(billEstimate.standingCharge)}</dd>
                    </div>
                  </dl>
                </aside>
              )}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
