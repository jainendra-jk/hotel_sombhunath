import { CheckCircle, Tag, ArrowRight, Clock } from "lucide-react";
import { getWhatsAppGenericBookingUrl } from "../../utils/whatsappBooking";

const benefits = [
  { text: "Best Price Guarantee — No Hidden Charges" },
  { text: "Free Cancellation up to 24 hours before check-in" },
  { text: "24/7 Customer Support via Call & WhatsApp" },
  { text: "Complimentary Early Check-in (Subject to availability)" },
  { text: "Exclusive Member Discounts on Long Stays" },
];

export function OffersSection() {
  return (
    <section
      id="offers"
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: "#EFF6FF" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-widest mb-3"
            style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
          >
            Special Offers
          </p>
          <h2
            className="text-3xl lg:text-4xl"
            style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
          >
            Why Book Directly With Us?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Benefits */}
          <div
            className="flex-1 rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
            style={{
              backgroundColor: "white",
              border: "1px solid #BFDBFE",
              boxShadow: "0 4px 24px rgba(11,44,74,0.07)",
            }}
          >
            <div>
              {/* Section badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                style={{
                  backgroundColor: "rgba(249,115,22,0.08)",
                  border: "1px solid rgba(249,115,22,0.25)",
                }}
              >
                <span className="text-xs" style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                  Direct Booking Benefits
                </span>
              </div>

              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 700 }}
              >
                Book Direct &amp; Save More
              </h3>
              <p
                className="text-sm mb-8"
                style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.7 }}
              >
                Booking directly through our website gives you the best rates and
                exclusive privileges you won't find on third-party platforms.
              </p>

              <ul className="flex flex-col gap-4">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: "#22C55E" }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: "#1F2937",
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={getWhatsAppGenericBookingUrl(
                  "I would like your best direct-booking price for Hotel Sombhunath. Please share availability and rates.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
                style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
              >
                Book Now at Best Price
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Offer Highlight Card */}
          <div
            className="lg:w-[380px] rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0B2C4A 0%, #123B63 60%, #0B2C4A 100%)",
              boxShadow: "0 12px 48px rgba(11,44,74,0.35)",
            }}
          >
            {/* Decorative circles */}
            <div
              className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-10"
              style={{ backgroundColor: "#F97316" }}
            />
            <div
              className="absolute -bottom-16 -left-10 w-52 h-52 rounded-full opacity-10"
              style={{ backgroundColor: "#FACC15" }}
            />

            <div className="relative z-10 flex flex-col items-center gap-5">
              {/* Badge */}
              <div
                className="px-4 py-1.5 rounded-full text-xs"
                style={{
                  backgroundColor: "rgba(249,115,22,0.2)",
                  border: "1px solid rgba(249,115,22,0.4)",
                  color: "#FB923C",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                LIMITED TIME OFFER
              </div>

              {/* Percentage */}
              <div>
                <p
                  style={{
                    color: "#FACC15",
                    fontFamily: "'Merriweather', serif",
                    fontWeight: 900,
                    fontSize: "96px",
                    lineHeight: 1,
                  }}
                >
                  10%
                </p>
                <p
                  style={{
                    color: "white",
                    fontFamily: "'Merriweather', serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    marginTop: "4px",
                  }}
                >
                  OFF
                </p>
              </div>

              <p
                className="text-sm"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "'Nunito', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                On direct bookings for stays of{" "}
                <strong style={{ color: "white" }}>2 nights or more</strong>. Use code at checkout.
              </p>

              {/* Promo code */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg"
                style={{
                  backgroundColor: "rgba(250,204,21,0.1)",
                  border: "1.5px dashed rgba(250,204,21,0.4)",
                }}
              >
                <Tag className="w-4 h-4" style={{ color: "#FACC15" }} />
                <span
                  className="text-sm tracking-widest"
                  style={{ color: "#FACC15", fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
                >
                  SOMBHUNATH10
                </span>
              </div>

              {/* Expiry */}
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" style={{ color: "#FB923C" }} />
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Nunito', sans-serif" }}
                >
                  Offer valid till 31st May 2026
                </span>
              </div>

              <a
                href={getWhatsAppGenericBookingUrl(
                  "I would like to book with the SOMBHUNATH10 code (10% off, 2+ nights). Please confirm eligibility and help me complete the booking.",
                )}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-xl py-4 text-center text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C)",
                  color: "white",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  boxShadow: "0 4px 16px rgba(249,115,22,0.4)",
                }}
              >
                Book Now &amp; Save 10%
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
