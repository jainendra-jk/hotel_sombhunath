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

export function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How Hotel Sombhunath collects, uses, and protects your personal information when you use our website and services."
        breadcrumb="Privacy Policy"
      />
      <section className="w-full py-14 lg:py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <article
          className="mx-auto max-w-[720px] rounded-2xl border bg-white px-6 py-10 shadow-sm lg:px-10 lg:py-12"
          style={{ borderColor: "#E2E8F0" }}
        >
          <p className="mb-8 text-sm" style={{ color: "#94A3B8", fontFamily: "'Nunito', sans-serif" }}>
            Last updated: 2 May 2026 · Hotel Sombhunath, Jalpaiguri, West Bengal
          </p>

          {h2("1. Introduction")}
          {p(
            "This Privacy Policy describes how we handle information when you visit our website, make an enquiry, or interact with us by phone, email, or WhatsApp. By using our services, you agree to the practices described here.",
          )}

          {h2("2. Information we may collect")}
          {p(
            "We may collect details you provide directly, such as your name, phone number, email address, stay dates, guest counts, and special requests. We may also collect technical data such as browser type, device information, and approximate location derived from IP address for security and analytics.",
          )}

          {h2("3. How we use your information")}
          {p(
            "We use this information to respond to enquiries, process reservations, communicate about your stay, improve our website experience, comply with legal obligations, and protect against fraud or misuse.",
          )}

          {h2("4. Cookies and similar technologies")}
          {p(
            "Our website may use cookies or local storage to remember preferences and measure basic usage. You can control cookies through your browser settings; disabling cookies may limit some features.",
          )}

          {h2("5. Sharing with third parties")}
          {p(
            "We do not sell your personal data. We may share limited information with trusted service providers (for example, payment processors or messaging platforms) solely to operate our business, and only where they agree to protect your information.",
          )}

          {h2("6. Data retention and security")}
          {p(
            "We retain information only as long as needed for the purposes above or as required by law. We apply reasonable technical and organisational measures to safeguard data; however, no internet transmission is completely secure.",
          )}

          {h2("7. Your choices")}
          {p(
            "You may request access, correction, or deletion of your personal information where applicable law allows. You may opt out of non-essential marketing messages at any time by contacting us.",
          )}

          {h2("8. Contact")}
          {p(
            <>
              For privacy-related questions, contact us at{" "}
              <a href="mailto:contact@hotelsombhunathbhawan.in" className="font-semibold text-[#F97316] hover:underline">
                contact@hotelsombhunathbhawan.in
              </a>{" "}
              or via the{" "}
              <Link to="/contact" className="font-semibold text-[#F97316] hover:underline">
                Contact
              </Link>{" "}
              page.
            </>,
          )}
        </article>
      </section>
    </>
  );
}
