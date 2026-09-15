export type ServiceNotice = {
  id: string;
  category: string;
  status: "Scheduled" | "Ongoing" | "Restored";
  title: string;
  summary: string;
  area: string;
  timing: string;
  restoration: string;
  published: string;
  details: string;
  customerActions: string[];
};

/**
 * Demonstration content for reviewing the notice layout.
 * Replace these entries with approved service information before launch.
 */
export const sampleNotices: ServiceNotice[] = [
  {
    id: "sample-planned-maintenance",
    category: "Planned maintenance",
    status: "Scheduled",
    title: "Sample: Planned maintenance in Service Zone A",
    summary:
      "A temporary supply interruption is shown here to demonstrate how customers will see planned maintenance notices.",
    area: "Service Zone A (demo)",
    timing: "Tuesday, 9:00am (sample)",
    restoration: "Tuesday, 3:00pm (sample)",
    published: "Demonstration notice",
    details:
      "This sample notice represents planned network maintenance. A live notice would explain the work being carried out, the locations affected and any change to the expected restoration time.",
    customerActions: [
      "Store only the water you reasonably need before the interruption begins.",
      "Keep taps closed while supply is unavailable.",
      "Return to this page for restoration updates.",
    ],
  },
  {
    id: "sample-emergency-repair",
    category: "Emergency repair",
    status: "Ongoing",
    title: "Sample: Emergency repair in Service Zone B",
    summary:
      "This card demonstrates how an unplanned interruption and its current repair status will be communicated.",
    area: "Service Zone B (demo)",
    timing: "Repair in progress (sample)",
    restoration: "Update pending assessment",
    published: "Demonstration notice",
    details:
      "This sample notice represents an urgent pipeline repair. A live notice would include the confirmed affected area, the latest field update and a restoration estimate once the repair team completes its assessment.",
    customerActions: [
      "Use stored water carefully until service is restored.",
      "Avoid opening taps repeatedly while repairs are under way.",
      "Report a separate leak or safety concern through the problem-reporting page.",
    ],
  },
];
