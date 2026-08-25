export type ContentSection = {
  label: string;
  title: string;
  body?: string;
  bullets?: string[];
  cards?: { title: string; body: string; meta?: string }[];
};

export type SitePage = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  feature: { label: string; value: string; note: string };
  sections: ContentSection[];
  cta: { title: string; body: string; label: string; href: string };
};

export const sitePages: SitePage[] = [
  {
    slug: "about", eyebrow: "About MWASCO", title: "A community water provider with a public-service purpose.",
    intro: "Mutitu Water and Sanitation Company Limited exists to make safe, reliable and sustainable water services accessible within its licensed service area.",
    feature: { label: "Our focus", value: "Reliable service", note: "Responsible water management, transparent customer care and steady improvement." },
    sections: [
      { label: "Our mandate", title: "Water service that supports everyday life", body: "MWASCO manages water services for households, institutions, businesses and community facilities while balancing fair access, responsible resource management and dependable operations." },
      { label: "What guides us", title: "A practical commitment to customers", cards: [
        { title: "Service", body: "Put customers and communities at the centre of operational decisions." },
        { title: "Integrity", body: "Provide accurate information and act responsibly with public resources." },
        { title: "Sustainability", body: "Protect water sources and maintain systems for future generations." },
      ] },
      { label: "Governance", title: "Leadership and accountability", body: "Verified board, management, ownership and governance information will be published once supplied and approved by MWASCO." },
    ],
    cta: { title: "Looking for a specific service?", body: "Explore connections, account support and service updates.", label: "View our services", href: "/services" },
  },
  {
    slug: "services", eyebrow: "Our services", title: "Essential water services, clearly explained.",
    intro: "From a new connection to account support, MWASCO is building a simpler path to the services customers need most.",
    feature: { label: "Service principle", value: "Clear from start to finish", note: "Requirements, expected steps and the right support channel in one place." },
    sections: [
      { label: "Core services", title: "How we can help", cards: [
        { title: "Water connections", body: "Guidance for a new water connection.", meta: "Applications" },
        { title: "Water supply", body: "Service areas, schedules and updates.", meta: "Operations" },
        { title: "Meter & account support", body: "Help with readings and billing enquiries.", meta: "Customer care" },
        { title: "Fault reporting", body: "Report leaks, bursts and low pressure.", meta: "Response" },
        { title: "Water quality", body: "Monitoring information and reports.", meta: "Public health" },
        { title: "Documents & forms", body: "Approved forms and public documents.", meta: "Resources" },
      ] },
      { label: "Service workflow", title: "What customers should expect", bullets: ["Clear requirements before an application starts", "A reference for every accepted digital request", "Status updates through the appropriate channel", "A defined complaints and escalation path"] },
    ],
    cta: { title: "Planning a new connection?", body: "Review the expected process and information MWASCO will need.", label: "Connection guide", href: "/new-connection" },
  },
  {
    slug: "service-areas", eyebrow: "Service areas & schedules", title: "The right update for the right location.",
    intro: "Service information will be organised by operational zone so customers quickly find schedules and notices that affect them.",
    feature: { label: "Public register footprint", value: "3 counties", note: "Parts of Nyeri, Laikipia and Nyandarua. Current boundaries require confirmation." },
    sections: [
      { label: "Recorded footprint", title: "Areas served", cards: [
        { title: "Nyeri County", body: "Specific schemes, centres and villages will be added after verification." },
        { title: "Laikipia County", body: "Specific schemes, centres and villages will be added after verification." },
        { title: "Nyandarua County", body: "Specific schemes, centres and villages will be added after verification." },
      ] },
      { label: "Supply schedules", title: "Publishing schedule information", body: "The live schedule will show the service zone, normal supply days or hours, last update and active interruptions after MWASCO supplies verified operational data." },
      { label: "Future integration", title: "Location-aware notices", bullets: ["Select a zone without unnecessary personal data", "Connect every interruption to affected zones", "Add SMS and email subscriptions after notification services are connected"] },
    ],
    cta: { title: "Is your area experiencing a problem?", body: "Check active interruptions first, then report an unlisted issue.", label: "View interruptions", href: "/interruptions" },
  },
  {
    slug: "new-connection", eyebrow: "New water connection", title: "A clear path from application to connection.",
    intro: "Understand the expected stages before starting. Final requirements, charges and timelines must be confirmed before applications go live.",
    feature: { label: "Application path", value: "5 clear stages", note: "Prepare, apply, verify, receive a quotation, then schedule connection works." },
    sections: [
      { label: "The process", title: "How an application works", cards: [
        { title: "1. Check eligibility", body: "Confirm the property is within a serviceable zone." },
        { title: "2. Prepare documents", body: "Gather identification and property evidence." },
        { title: "3. Submit application", body: "Provide information and receive a reference." },
        { title: "4. Site assessment", body: "MWASCO verifies technical feasibility." },
        { title: "5. Quote & connection", body: "Charges are communicated before installation." },
      ] },
      { label: "Before you apply", title: "Requirements to be confirmed", body: "MWASCO must approve the checklist, charges, timelines and form. The website will not collect sensitive documents until private storage and staff review are operational." },
    ],
    cta: { title: "Need help before applying?", body: "Ask about serviceability and document requirements.", label: "Contact MWASCO", href: "/contact" },
  },
  {
    slug: "billing-payments", eyebrow: "Billing & payments", title: "Understand your bill. Pay through a verified channel.",
    intro: "Billing guidance, official payment instructions and secure access to the future customer portal will live here.",
    feature: { label: "Important", value: "Verify before paying", note: "Only use payment details published through confirmed MWASCO channels." },
    sections: [
      { label: "Your bill", title: "What a clear water bill should show", bullets: ["Billing period and due date", "Previous and current readings", "Consumption during the period", "Tariff blocks and charges", "Payments, credits or adjustments", "Total amount due"] },
      { label: "Digital services", title: "Secure billing integration", cards: [
        { title: "Check balance", body: "Requires verification through the authoritative billing system." },
        { title: "Pay with M-Pesa", body: "Will use backend-verified Daraja and reconciliation." },
        { title: "Download receipts", body: "Available after confirmed payments post to the account." },
      ] },
      { label: "Payment safety", title: "Protect your account", body: "The website will never mark an account paid from a browser response alone. Final status must be confirmed and reconciled by MWASCO's backend." },
    ],
    cta: { title: "Have a billing question?", body: "Review common answers or use verified customer-care channels.", label: "Billing FAQs", href: "/frequently-asked-questions" },
  },
  {
    slug: "tariffs", eyebrow: "Tariffs & charges", title: "Transparent charges, backed by the approved tariff.",
    intro: "The current tariff will be published with effective dates, customer categories, consumption blocks and its Gazette notice.",
    feature: { label: "Source of truth", value: "WASREB approval", note: "No figures will be published until the current schedule is verified." },
    sections: [
      { label: "Tariff information", title: "What will be published", bullets: ["Domestic consumption blocks", "Commercial and institutional categories", "Bulk-water charges where applicable", "Connection and meter-related fees", "Sanitation charges where applicable", "Effective dates and Gazette reference"] },
      { label: "How billing works", title: "From consumption to amount due", body: "A customer-friendly calculator can be added once the exact formula is confirmed. It will explain estimates without replacing the authoritative bill." },
      { label: "Official documents", title: "Current tariff publication pending", body: "The schedule and Gazette notice must be supplied or verified against the WASREB tariff register before launch." },
    ],
    cta: { title: "Need help understanding a charge?", body: "See how readings and tariffs contribute to a bill.", label: "Billing guidance", href: "/billing-payments" },
  },
  {
    slug: "interruptions", eyebrow: "Water interruption centre", title: "Timely updates when water service changes.",
    intro: "Planned works and emergency incidents will be published by affected area, with timestamps and restoration progress.",
    feature: { label: "Website notice status", value: "No active notices", note: "No interruption notices have been published to this new website yet." },
    sections: [
      { label: "Active notices", title: "Current service updates", body: "There are no active records in the website. This does not yet confirm uninterrupted supply; the operational notice feed must be connected before launch." },
      { label: "Every notice will show", title: "Useful information at a glance", bullets: ["Planned or unplanned classification", "Affected zones or villages", "Start time and expected duration", "Reason for the interruption", "Restoration status and last update", "Alternative supply where applicable"] },
      { label: "Stay informed", title: "Targeted alerts planned", body: "After SMS and email services are connected, customers can subscribe to a chosen service zone without receiving unrelated alerts." },
    ],
    cta: { title: "Problem not shown here?", body: "Use the reporting guide for leaks, bursts, low pressure and no water.", label: "Report a problem", href: "/report-a-problem" },
  },
  {
    slug: "report-a-problem", eyebrow: "Report a problem", title: "Help MWASCO respond with the right information.",
    intro: "A structured report is easier to locate, classify and assign. Digital submission opens after the staff ticket workflow is connected.",
    feature: { label: "Future workflow", value: "Trackable ticket", note: "Every accepted online report should receive a reference and updates." },
    sections: [
      { label: "Issue categories", title: "What customers will be able to report", cards: [
        { title: "No water or low pressure", body: "A supply problem affecting a property or wider area." },
        { title: "Burst pipe or leakage", body: "Visible water loss on a road or connection." },
        { title: "Water-quality concern", body: "Unexpected colour, smell, taste or contamination." },
        { title: "Meter or bill issue", body: "Faulty meter, unusual reading or missing payment." },
        { title: "Illegal connection", body: "Suspected unauthorised infrastructure access." },
        { title: "Other service issue", body: "A matter outside the listed categories." },
      ] },
      { label: "Information needed", title: "Prepare these details", bullets: ["Nature and exact location", "When it was first noticed", "A safe callback contact", "Account number only when relevant", "A photograph only if safe"] },
      { label: "Operational dependency", title: "Why the form is not active yet", body: "A live form must create a reference, send confirmation, enter a staff queue, preserve status history and support escalation." },
    ],
    cta: { title: "Need the current contact channels?", body: "Use the contact page for verified office information.", label: "Contact information", href: "/contact" },
  },
  {
    slug: "water-quality", eyebrow: "Water quality", title: "Safe water starts with monitoring and transparency.",
    intro: "This page will explain MWASCO's quality approach, publish approved results and guide customers when they raise a concern.",
    feature: { label: "Customer priority", value: "Safe water", note: "Information should be current and linked to verified laboratory records." },
    sections: [
      { label: "Quality approach", title: "From source to customer", cards: [
        { title: "Source protection", body: "Manage risks to water sources and catchments." },
        { title: "Treatment control", body: "Monitor treatment against required standards." },
        { title: "Network sampling", body: "Test at representative distribution points." },
        { title: "Customer response", body: "Investigate and communicate reported concerns." },
      ] },
      { label: "Published reports", title: "Water-quality reports pending", body: "Only dated and approved results supplied by MWASCO will be published, identifying period, scope and responsible authority." },
      { label: "Urgent concern", title: "What to report", bullets: ["Unexpected colour or cloudiness", "Unusual smell or taste", "Contamination near a damaged pipe", "Illness suspected to be connected to water"] },
    ],
    cta: { title: "Concerned about water quality?", body: "Use the official reporting channel once confirmed.", label: "Reporting guidance", href: "/report-a-problem" },
  },
  {
    slug: "news", eyebrow: "News & public notices", title: "Company updates and public information in one place.",
    intro: "This newsroom will carry verified announcements, project updates, public participation notices and community information.",
    feature: { label: "Publishing status", value: "Archive ready", note: "No official news items have been supplied yet." },
    sections: [
      { label: "Latest updates", title: "No posts published yet", body: "Approved stories and public notices will appear in date order, with clear categories and attachments where needed." },
      { label: "Content categories", title: "What you will find here", cards: [
        { title: "Public notices", body: "Formal customer and stakeholder announcements." },
        { title: "Projects", body: "Infrastructure and service improvements." },
        { title: "Community", body: "Education, conservation and engagement." },
      ] },
    ],
    cta: { title: "Looking for an interruption?", body: "Operational notices have their own location-based centre.", label: "Service updates", href: "/interruptions" },
  },
  {
    slug: "downloads", eyebrow: "Downloads & forms", title: "Official forms and documents, easy to find.",
    intro: "The document centre will provide current, approved forms, policies, reports and customer information.",
    feature: { label: "Document standard", value: "Current & accessible", note: "Every document will show type, size, date and revision." },
    sections: [
      { label: "Document library", title: "Publications pending", body: "No approved MWASCO documents have been supplied. Unverified forms will not be published." },
      { label: "Planned categories", title: "What the library will contain", cards: [
        { title: "Application forms", body: "Connection and service request forms." },
        { title: "Customer information", body: "Service charter, tariff and guidance." },
        { title: "Governance & reports", body: "Policies, reports and disclosures." },
        { title: "Procurement", body: "Tender documents and notices." },
      ] },
      { label: "Storage integration", title: "Safe document publishing", body: "Public documents can use managed storage. Customer identity documents belong in private storage and never in this library." },
    ],
    cta: { title: "Cannot find the form you need?", body: "Check the relevant service page or ask customer care.", label: "Browse services", href: "/services" },
  },
  {
    slug: "opportunities", eyebrow: "Tenders & careers", title: "Transparent opportunities to work with MWASCO.",
    intro: "Procurement notices, tender results and careers will be published with clear deadlines and official documents.",
    feature: { label: "Current listings", value: "None published", note: "No opportunity records have been supplied." },
    sections: [
      { label: "Procurement", title: "Tender notices", body: "Each opportunity will show its reference, title, category, publication date, closing date and approved documents." },
      { label: "Careers", title: "Vacancies and recruitment", body: "Vacancies appear only after formal approval and include requirements, the official application method and deadline." },
      { label: "Fraud awareness", title: "Verify every opportunity", bullets: ["Use confirmed MWASCO channels", "Check the reference and deadline", "Do not send money to personal accounts", "Report suspicious messages"] },
    ],
    cta: { title: "Need company announcements?", body: "Visit the newsroom for public notices and projects.", label: "News & notices", href: "/news" },
  },
  {
    slug: "frequently-asked-questions", eyebrow: "Frequently asked questions", title: "Straight answers to common water-service questions.",
    intro: "Start here for general guidance. Account-specific questions should use a secure, verified customer-care channel.",
    feature: { label: "Customer help", value: "Simple answers", note: "FAQs will be refined using real customer questions." },
    sections: [
      { label: "Billing", title: "Bills and payments", cards: [
        { title: "How will I check my balance?", body: "The portal retrieves it securely after account verification." },
        { title: "Payment not reflected?", body: "Keep the M-Pesa confirmation and report it. Do not pay twice unless advised." },
        { title: "Why is my bill higher?", body: "Compare readings, consumption and adjustments, then request a review." },
      ] },
      { label: "Supply", title: "Connections and interruptions", cards: [
        { title: "Where are interruptions?", body: "Use the notice centre, organised by service zone." },
        { title: "How do I get connected?", body: "Review serviceability and documents before applying." },
        { title: "How do I report a leak?", body: "Provide the location, time noticed and a callback contact." },
      ] },
      { label: "Security", title: "Protecting customer information", body: "Sensitive account details should never be revealed simply because someone knows an account number. Appropriate verification is required." },
    ],
    cta: { title: "Still need help?", body: "Use verified customer-care details or visit an office.", label: "Contact MWASCO", href: "/contact" },
  },
  {
    slug: "contact", eyebrow: "Contact & offices", title: "Reach the right MWASCO support channel.",
    intro: "Verified customer-care numbers, office locations, hours and escalation channels will form the official contact directory.",
    feature: { label: "Public postal record", value: "P.O. Box 42, Mugunda", note: "Listed in the June 2023 WASREB register; confirmation is required." },
    sections: [
      { label: "Contact directory", title: "Current details awaiting confirmation", body: "Telephone numbers, email, physical directions, working hours and social accounts have not yet been verified. They will not be invented or copied from unconfirmed listings." },
      { label: "Support channels", title: "The directory will separate", cards: [
        { title: "Emergencies", body: "Urgent bursts, leaks and quality concerns." },
        { title: "Customer care", body: "Accounts, bills, connections and complaints." },
        { title: "Head office", body: "Correspondence and administration." },
        { title: "Procurement", body: "Clarifications through each notice." },
      ] },
      { label: "Office information", title: "What every listing will show", bullets: ["Office name and available services", "Directions and map location", "Opening days and hours", "Telephone and email", "Accessibility information"] },
    ],
    cta: { title: "Looking for a common answer?", body: "The help centre may resolve your question without a visit.", label: "View FAQs", href: "/frequently-asked-questions" },
  },
  {
    slug: "privacy", eyebrow: "Privacy policy", title: "How customer and visitor information should be handled.",
    intro: "This draft explains privacy principles for the public website. MWASCO must complete legal and operational review before adoption.",
    feature: { label: "Core principle", value: "Collect only what is needed", note: "Every personal field needs a purpose and retention period." },
    sections: [
      { label: "Information", title: "Data the service may process", bullets: ["Contact details supplied in an enquiry", "Account information for authenticated services", "Application details and private documents", "Payment references", "Security and reliability logs"] },
      { label: "Purpose", title: "Why information is used", body: "Information should be used only to provide requested services, manage accounts, respond to complaints, send selected notices, meet legal duties and protect the platform." },
      { label: "Customer rights", title: "Access, correction and concerns", body: "The final policy will name MWASCO's data contact and explain access, correction and complaints procedures." },
      { label: "Protection", title: "Retention and security", body: "Sensitive records require access controls, encryption, audit logs and retention rules. Analytics should avoid unnecessary identification." },
    ],
    cta: { title: "Have a privacy concern?", body: "The official data-protection contact will be added after confirmation.", label: "Contact directory", href: "/contact" },
  },
  {
    slug: "terms", eyebrow: "Terms of use", title: "Using MWASCO's public website responsibly.",
    intro: "These draft terms set expectations for website information and online services. They require legal approval before publication.",
    feature: { label: "Draft status", value: "Review required", note: "Operational, legal and regulatory owners should approve these terms." },
    sections: [
      { label: "Website information", title: "Public guidance and official records", body: "Where website summaries differ from an approved tariff, Gazette notice or authoritative record, the authoritative record takes precedence." },
      { label: "Acceptable use", title: "Responsible access", bullets: ["Do not attempt unauthorised access", "Do not submit false reports", "Do not upload harmful material", "Do not interfere with availability or security"] },
      { label: "Online transactions", title: "Payments and service requests", body: "A request or payment is complete only after the relevant backend confirms it. A browser message alone is not final proof." },
      { label: "Availability", title: "Service continuity", body: "Features may be restricted for maintenance or security. Emergency channels should remain available outside the website." },
    ],
    cta: { title: "Need official clarification?", body: "Use the verified contact directory for service questions.", label: "Contact MWASCO", href: "/contact" },
  },
];

export function getSitePage(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
