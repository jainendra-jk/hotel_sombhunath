import { Wifi, UtensilsCrossed, Car, Wind, HeadphonesIcon, ShieldCheck } from "lucide-react";

const features = [
  { icon: Wifi, label: "Free WiFi", sub: "High-Speed Internet" },
  { icon: UtensilsCrossed, label: "Room Service", sub: "24-Hour Service" },
  { icon: Car, label: "Free Parking", sub: "On-Site Parking" },
  { icon: Wind, label: "AC Rooms", sub: "Climate Control" },
  { icon: HeadphonesIcon, label: "24/7 Support", sub: "Always Available" },
  { icon: ShieldCheck, label: "Safe & Secure", sub: "CCTV Monitored" },
];

export function FeatureStrip() {
  return (
    <section
      className="w-full py-10"
      style={{
        background: "linear-gradient(135deg, #0B2C4A 0%, #123B63 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 py-5 px-3 rounded-xl transition-all duration-200 hover:bg-white/10 cursor-default group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(249,115,22,0.15)",
                  border: "1.5px solid rgba(249,115,22,0.35)",
                }}
              >
                <Icon className="w-5 h-5" style={{ color: "#F97316" }} />
              </div>
              <div className="text-center">
                <p
                  className="text-sm"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}