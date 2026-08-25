import type { Metadata } from "next";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "MWASCO | Mutitu Water & Sanitation", template: "%s | MWASCO" },
  description: "Access MWASCO water services, customer guidance, interruption updates, tariffs and public information.",
  applicationName: "MWASCO",
  keywords: ["MWASCO", "Mutitu Water", "water services Kenya", "water connection", "water interruption"],
  openGraph: {
    type: "website",
    siteName: "MWASCO",
    title: "MWASCO | Clean water. Closer to you.",
    description: "Access MWASCO water services, customer guidance and timely public information.",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "MWASCO — Clean water. Closer to you." }],
  },
  twitter: { card: "summary_large_image", title: "MWASCO | Clean water. Closer to you.", images: ["/og.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader /><div id="main-content">{children}</div><SiteFooter />
    </body></html>
  );
}
