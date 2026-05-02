import type { ReactNode } from "react";
import { PageHeader } from "../components/PageHeader";
import { Link } from "react-router";

const p = (children: ReactNode) => (
  <p
    className="mb-4 text-base leading-relaxed"
    style={{ color: "#475569", fontFamily: "'Nunito', sans-serif" }}
  >
    {children}
  </p>
);

const h2 = (children: ReactNode) => (
  <h2
    className="mb-3 mt-10 text-xl first:mt-0"
    style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 800 }}
  >
    {children}
  </h2>
);

export function TermsOfServicePage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Terms governing use of this website and booking-related communications with Hotel Sombhunath."
        breadcrumb="Terms of Service"
      />
      <section className="w-full py-14 lg:py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <article
          className="mx-auto max-w-[720px] rounded-2xl border bg-white px-6 py-10 shadow-sm lg:px-10 lg:py-12"
          style={{ borderColor: "#E2E8F0" }}
        >
          <p className="mb-8 text-sm" style={{ color: "#94A3B8", fontFamily: "'Nunito', sans-serif" }}>
            Last updated: 2 May 2026 · Hotel Sombhunath, Jalpaiguri, West Bengal
          </p>

          {h2("1. Agreement")}
          {p(
            "By accessing this website or contacting us for reservations, you agree to these Terms of Service. If you do not agree, please do not use our digital channels.",
          )}

          {h2("2. Website use")}
          {p(
            "Content on this site is provided for general information about our property and services. We may update descriptions, imagery, or rates without prior notice. Obvious errors or typos may be corrected at any time.",
          )}

          {h2("3. Bookings and confirmations")}
          {p(
            "A reservation request sent via website form, email, phone, or WhatsApp does not guarantee a confirmed booking until we issue a written confirmation (including message or email) with agreed dates, room category, and price. Published rates are subject to availability and applicable taxes.",
          )}

          {h2("4. Guest conduct")}
          {p(
            "Guests are expected to follow local laws, respect other guests and staff, and comply with house rules (including non-smoking areas where posted). We may refuse service or ask guests to leave for serious misconduct, without refund where permitted by our cancellation policy.",
          )}

          {h2("5. Limitation of liability")}
          {p(
            "To the fullest extent permitted by law, Hotel Sombhunath is not liable for indirect or consequential losses arising from use of this website or from events beyond our reasonable control. Nothing in these terms excludes liability that cannot be excluded under applicable law.",
          )}

          {h2("6. Intellectual property")}
          {p(
            "Text, graphics, and branding on this site are owned by or licensed to Hotel Sombhunath. You may not copy, scrape, or reuse materials for commercial purposes without prior written consent.",
          )}

          {h2("7. Governing law")}
          {p(
            "These terms are governed by the laws of India. Courts at Jalpaiguri, West Bengal, shall have exclusive jurisdiction over disputes arising from these terms or your stay, subject to any mandatory consumer protections.",
          )}

          {h2("8. Contact")}
          {p(
            <>
              Questions about these terms?{" "}
              <Link to="/contact" className="font-semibold text-[#F97316] hover:underline">
                Contact us
              </Link>{" "}
              or email{" "}
              <a href="mailto:contact@hotelsombhunathbhawan.in" className="font-semibold text-[#F97316] hover:underline">
                contact@hotelsombhunathbhawan.in
              </a>
              .
            </>,
          )}
        </article>
      </section>
    </>
  );
}
