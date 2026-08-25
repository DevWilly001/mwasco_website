import Link from "next/link";

export default function NotFound() {
  return <main className="not-found page-container"><p className="eyebrow"><span />404</p><h1>We couldn&apos;t find that page.</h1><p>The information may have moved, or the address may be incomplete.</p><Link className="button button-navy" href="/">Return home <span>→</span></Link></main>;
}
