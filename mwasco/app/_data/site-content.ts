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
  feature?: { label: string; value: string; note: string };
  sections: ContentSection[];
  cta: { title: string; body: string; label: string; href: string };
};

export const sitePages: SitePage[] = [
  {
    slug: "about",
    eyebrow: "About us",
    title: "Water service for the community.",
    intro:
      "Mutitu Water Project supports access to reliable water services for homes, institutions and businesses.",
    feature: {
      label: "Our focus",
      value: "Reliable water",
      note: "Clear information, responsible operations and practical customer support.",
    },
    sections: [
      {
        label: "What we do",
        title: "Our role",
        body: "We manage water-service information, customer support and day-to-day service needs within the project area.",
      },
      {
        label: "Our history",
        title: "How the project has grown",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        label: "Our priorities",
        title: "What guides our work",
        cards: [
          { title: "Service", body: "Respond clearly and consistently." },
          {
            title: "Integrity",
            body: "Publish accurate, approved information.",
          },
          {
            title: "Sustainability",
            body: "Protect water resources and infrastructure.",
          },
        ],
      },
      {
        label: "Board members",
        title: "Project governance",
        cards: [
          { title: "Chairperson", body: "Board member profile to be added." },
          { title: "Vice Chairperson", body: "Board member profile to be added." },
          { title: "Secretary", body: "Board member profile to be added." },
          { title: "Board Member 01", body: "Board member profile to be added." },
          { title: "Board Member 02", body: "Board member profile to be added." },
          { title: "Board Member 03", body: "Board member profile to be added." },
        ],
      },
      {
        label: "Working hours",
        title: "Office opening hours",
        body: "Mon-Thu: 8am-5pm | Fri: 8am-4pm | Sat: 8am-1pm",
        cards: [
          { title: "Monday–Thursday", body: "8:00am–5:00pm" },
          { title: "Friday", body: "8:00am–4:00pm" },
          { title: "Saturday", body: "8:00am–1:00pm" },
        ],
      },
    ],
    cta: {
      title: "Need a water service?",
      body: "Connections, billing, tariffs and water-quality guidance are in one place.",
      label: "View services",
      href: "/services#all-services",
    },
  },
  {
    slug: "services",
    eyebrow: "Services",
    title: "All water services in one place.",
    intro:
      "Choose a service tab to see the key steps and information you need.",
    // feature: { label: "Quick access", value: "6 service areas", note: "Use the tabs to move directly to the right service." },
    sections: [],
    cta: {
      title: "Need help?",
      body: "Call or visit the Mutitu Water Project office.",
      label: "Contact us",
      href: "/contact",
    },
  },
  {
    slug: "report-a-problem",
    eyebrow: "Report a problem",
    title: "Report a water-service problem.",
    intro:
      "Share the issue, location and a contact number so the team can respond.",
    feature: {
      label: "Phone",
      value: "0741 508321",
      note: "Call the office for urgent leaks, bursts or supply problems.",
    },
    sections: [
      {
        label: "Problems",
        title: "What to report",
        cards: [
          { title: "No water", body: "No supply or very low pressure." },
          {
            title: "Leak or burst",
            body: "Visible water loss from a pipe or connection.",
          },
          {
            title: "Water quality",
            body: "Unexpected colour, smell or taste.",
          },
          {
            title: "Meter or bill",
            body: "A faulty meter or billing concern.",
          },
        ],
      },
      {
        label: "Before calling",
        title: "Have these details ready",
        bullets: [
          "Exact location",
          "Type of problem",
          "When it started",
          "A callback number",
        ],
      },
    ],
    cta: {
      title: "Need immediate help?",
      body: "Use the verified office phone number.",
      label: "Call 0741 508321",
      href: "tel:0741508321",
    },
  },
  {
    slug: "news",
    eyebrow: "News & notices",
    title: "Project news and public notices.",
    intro: "Approved updates will be published here in date order.",
    feature: {
      label: "Status",
      value: "No posts yet",
      note: "New project updates will appear here.",
    },
    sections: [
      {
        label: "Updates",
        title: "No news published",
        body: "Project updates, public notices and community information will appear here once approved.",
      },
    ],
    cta: {
      title: "Looking for a supply notice?",
      body: "Current water notices appear on the homepage.",
      label: "View homepage notices",
      href: "/#service-updates",
    },
  },
  {
    slug: "downloads",
    eyebrow: "Downloads",
    title: "Forms and public documents.",
    intro: "Current approved forms and notices will be available here.",
    feature: {
      label: "Status",
      value: "Documents pending",
      note: "Only approved documents will be published.",
    },
    sections: [
      {
        label: "Library",
        title: "No downloads available",
        body: "Application forms, tariffs and public reports will appear here when approved.",
      },
    ],
    cta: {
      title: "Need a form now?",
      body: "Contact the office for the current version.",
      label: "Contact us",
      href: "/contact",
    },
  },
  {
    slug: "opportunities",
    eyebrow: "Tenders & careers",
    title: "Current opportunities.",
    intro: "Approved tenders, quotations and vacancies will be listed here.",
    feature: {
      label: "Status",
      value: "No open notices",
      note: "Check this page for new opportunities.",
    },
    sections: [
      {
        label: "Open notices",
        title: "No opportunities published",
        body: "Each future notice will show its reference, deadline and official submission method.",
      },
    ],
    cta: {
      title: "Need clarification?",
      body: "Use the contact details stated in the relevant notice.",
      label: "Contact office",
      href: "/contact",
    },
  },
  {
    slug: "frequently-asked-questions",
    eyebrow: "Frequently asked questions",
    title: "Quick answers to common questions.",
    intro: "Start here for basic service, billing and connection guidance.",
    feature: {
      label: "Need more help?",
      value: "0741 508321",
      note: "Mon-Thu: 8am-5pm | Fri: 8am-4pm | Sat: 8am-1pm",
    },
    sections: [
      {
        label: "Common questions",
        title: "Service guidance",
        cards: [
          {
            title: "How do I apply for water?",
            body: "Open Services and select New connection.",
          },
          {
            title: "Where can I check tariffs?",
            body: "Open Services and select Tariffs & charges.",
          },
          {
            title: "How do I report a leak?",
            body: "Call 0741 508321 with the exact location.",
          },
        ],
      },
    ],
    cta: {
      title: "Still need help?",
      body: "Call or visit the project office.",
      label: "Contact us",
      href: "/contact",
    },
  },
  {
    slug: "contact",
    eyebrow: "Contact us",
    title: "Contact Mutitu Water Project.",
    intro:
      "Call the office, get directions or view the office location on the map.",
    feature: {
      label: "Phone",
      value: "0741 508321",
      note: "Mon-Thu: 8am-5pm | Fri: 8am-4pm | Sat: 8am-1pm",
    },
    sections: [],
    cta: { title: "", body: "", label: "", href: "/" },
  },
  {
    slug: "privacy",
    eyebrow: "Privacy policy",
    title: "How we handle website information.",
    intro: "This draft policy requires review before launch.",
    feature: {
      label: "Principle",
      value: "Collect only what is needed",
      note: "Personal information should have a clear service purpose.",
    },
    sections: [
      {
        label: "Information",
        title: "What may be collected",
        bullets: [
          "Contact details supplied in an enquiry",
          "Account details used for a requested service",
          "Payment references",
          "Website security logs",
        ],
      },
      {
        label: "Use",
        title: "Why information is used",
        body: "Information is used to provide services, answer enquiries, manage accounts and protect the website.",
      },
    ],
    cta: {
      title: "Have a privacy question?",
      body: "Contact the project office.",
      label: "Contact us",
      href: "/contact",
    },
  },
  {
    slug: "terms",
    eyebrow: "Terms of use",
    title: "Using this website.",
    intro: "These draft terms require review before launch.",
    feature: {
      label: "Status",
      value: "Review required",
      note: "Approved official records take priority over website summaries.",
    },
    sections: [
      {
        label: "Website information",
        title: "Public guidance",
        body: "Where a website summary differs from an approved tariff or official notice, the official record applies.",
      },
      {
        label: "Acceptable use",
        title: "Use the website responsibly",
        bullets: [
          "Do not submit false reports",
          "Do not attempt unauthorised access",
          "Do not interfere with website availability",
        ],
      },
    ],
    cta: {
      title: "Need clarification?",
      body: "Contact the project office.",
      label: "Contact us",
      href: "/contact",
    },
  },
];

export function getSitePage(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
