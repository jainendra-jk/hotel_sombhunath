import { Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";
import { brand } from "../../constants/brand";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        background: brand.pageHeaderBg,
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pg" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pg)" />
        </svg>
      </div>

      {/* Glow orb */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"
        style={{ backgroundColor: brand.colors.accent, filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/2 -translate-x-1/4"
        style={{ backgroundColor: brand.colors.accentYellow, filter: "blur(60px)" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-xs no-underline transition-colors hover:text-[#F97316]"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: brand.fonts.sans }}
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" style={{ color: "rgba(255,255,255,0.3)" }} />
          <span
            className="text-xs"
            style={{ color: brand.colors.accent, fontFamily: brand.fonts.sans, fontWeight: 600 }}
          >
            {breadcrumb}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl lg:text-5xl"
          style={{
            fontFamily: brand.fonts.serif,
            color: brand.colors.white,
            fontWeight: 900,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="mt-3 max-w-lg text-base"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontFamily: brand.fonts.sans,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Accent line */}
        <div
          className="mt-6 h-1 w-20 rounded-full"
          style={{ background: brand.accentLineGradient }}
        />
      </div>
    </div>
  );
}
