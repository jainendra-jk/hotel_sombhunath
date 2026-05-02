import {
  Wifi, UtensilsCrossed, Car, Wind, HeadphonesIcon, ShieldCheck,
  Dumbbell, TreePine, Coffee, Tv, Bath, Sparkles, Users, MapPin,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader";

const IMG_RESTAURANT = "https://images.unsplash.com/photo-1657349226718-4387403dfa1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBlbGVnYW50fGVufDF8fHx8MTc3NzczNjY2Nnww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CONFERENCE = "https://images.unsplash.com/photo-1617113139611-b7b97c561ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjBoYWxsJTIwbWVldGluZyUyMHJvb218ZW58MXx8fHwxNzc3NzM2NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_SPA = "https://images.unsplash.com/photo-1677763856232-d9eb9e127e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzJTIwcmVsYXhhdGlvbnxlbnwxfHx8fDE3Nzc2MTYwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_POOL = "https://images.unsplash.com/photo-1731080647322-f9cf691d40ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN3aW1taW5nJTIwcG9vbCUyMHJlc29ydCUyMGx1eHVyeXxlbnwxfHx8fDE3Nzc3MzY2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const highlights = [
  {
    image: IMG_RESTAURANT,
    icon: UtensilsCrossed,
    title: "Multi-Cuisine Restaurant",
    description:
      "Savour authentic Indian cuisine and continental favourites at our in-house restaurant. Open from 7 AM to 11 PM, serving freshly prepared meals using locally sourced ingredients.",
    features: ["Breakfast Buffet (7–10 AM)", "À la carte Lunch & Dinner", "Vegetarian & Vegan options", "Room Service available"],
  },
  {
    image: IMG_POOL,
    icon: Bath,
    title: "Swimming Pool",
    description:
      "Take a refreshing dip in our temperature-controlled outdoor pool surrounded by lush greenery. Perfect for both a morning workout and an evening relaxation session.",
    features: ["Open 6 AM – 9 PM", "Towels & floaties provided", "Poolside snacks & drinks", "Separate kids' pool"],
  },
  {
    image: IMG_SPA,
    icon: Sparkles,
    title: "Wellness & Spa",
    description:
      "Rejuvenate your body and mind with our range of traditional Ayurvedic treatments and modern spa therapies. Pre-booking recommended.",
    features: ["Ayurvedic massages", "Aromatherapy sessions", "Couple's spa packages", "Yoga & meditation deck"],
  },
  {
    image: IMG_CONFERENCE,
    icon: Users,
    title: "Conference & Events",
    description:
      "Host corporate meetings, seminars, or private events in our fully-equipped conference hall with AV infrastructure and dedicated catering support.",
    features: ["Capacity up to 80 pax", "High-speed WiFi & projector", "Dedicated event coordinator", "Custom catering menus"],
  },
];

const smallFacilities = [
  { icon: Wifi, label: "High-Speed WiFi", desc: "Complimentary 100 Mbps in all rooms & common areas" },
  { icon: Wind, label: "AC in All Rooms", desc: "Individually controlled climate systems" },
  { icon: Car, label: "Free Parking", desc: "Covered & open parking for 50+ vehicles" },
  { icon: Coffee, label: "24/7 Coffee Bar", desc: "Complimentary tea, coffee & refreshments" },
  { icon: HeadphonesIcon, label: "24/7 Front Desk", desc: "Round-the-clock concierge support" },
  { icon: ShieldCheck, label: "CCTV Surveillance", desc: "Comprehensive security across the property" },
  { icon: Dumbbell, label: "Fitness Centre", desc: "Fully equipped gym open 5 AM – 10 PM" },
  { icon: TreePine, label: "Nature Trails", desc: "Guided forest walks and birding trails nearby" },
  { icon: Tv, label: "In-Room Entertainment", desc: "Smart TVs with OTT access in all rooms" },
  { icon: MapPin, label: "Travel Desk", desc: "Tour bookings, cab arrangements & local guides" },
];

export function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Hotel Facilities"
        subtitle="Everything you need for a perfect stay — recreation, dining, wellness, and more, all under one roof."
        breadcrumb="Facilities"
      />

      {/* Highlight Facilities */}
      <section className="w-full py-16" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-widest mb-2"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Premium Amenities
            </p>
            <h2
              className="text-3xl"
              style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
            >
              Signature Experiences
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full rounded-2xl overflow-hidden" style={{ height: "320px" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #F97316, #FB923C)", boxShadow: "0 4px 12px rgba(249,115,22,0.3)" }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 700 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.8 }}
                    >
                      {item.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {item.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "#1F2937", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                            style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E" }}
                          >
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Small Facilities Grid */}
      <section className="w-full py-16" style={{ backgroundColor: "white" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p
              className="text-sm uppercase tracking-widest mb-2"
              style={{ color: "#F97316", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              All Amenities
            </p>
            <h2
              className="text-3xl"
              style={{ fontFamily: "'Merriweather', serif", color: "#0B2C4A", fontWeight: 900 }}
            >
              Everything You Need
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {smallFacilities.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  cursor: "default",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "1.5px solid rgba(249,115,22,0.2)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#F97316" }} />
                </div>
                <p
                  className="text-sm"
                  style={{ color: "#0B2C4A", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                >
                  {label}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif", lineHeight: 1.6 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
