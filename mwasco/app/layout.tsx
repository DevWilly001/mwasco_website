import type { Metadata } from "next";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mutitu Water Project", template: "%s | Mutitu Water Project" },
  description: "Access Mutitu Water Project services, notices and customer support.",
  applicationName: "Mutitu Water Project",
  icons: { icon: "/assets/logo.jpg", apple: "/assets/logo.jpg" },
  keywords: ["Mutitu Water Project", "Mutitu Water", "water services Kenya", "water connection"],
  openGraph: {
    type: "website",
    siteName: "Mutitu Water Project",
    title: "Mutitu Water Project | Clean water. Closer to you.",
    description: "Access water services, notices and customer support.",
  },
  twitter: { card: "summary", title: "Mutitu Water Project | Clean water. Closer to you." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"><body>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader /><div id="main-content">{children}</div><SiteFooter />
    </body></html>
  );
}
