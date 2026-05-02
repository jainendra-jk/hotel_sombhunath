import { useEffect } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "../components/HeroSection";
import { FeatureStrip } from "../components/FeatureStrip";
import { RoomsSection } from "../components/RoomsSection";
import { OffersSection } from "../components/OffersSection";
import { AboutSection } from "../components/AboutSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactStrip } from "../components/ContactStrip";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollToRooms = () =>
      document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (location.hash === "#rooms" || (location.state as { scrollToRooms?: boolean } | null)?.scrollToRooms) {
      const id = requestAnimationFrame(() => scrollToRooms());
      return () => cancelAnimationFrame(id);
    }
  }, [location.hash, location.state]);

  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <RoomsSection />
      <OffersSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactStrip />
    </>
  );
}
