import { useState } from "react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

interface DatePickerCalendarProps {
  value: string;          // YYYY-MM-DD or ""
  onChange: (date: string) => void;
  minDate?: string;       // YYYY-MM-DD
  rangeStart?: string;    // for range highlight
  rangeEnd?: string;
  onClose: () => void;
  align?: "left" | "right";
}

function toMidnight(dateStr: string): Date {
  // parse as local date (not UTC)
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toYMD(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function DatePickerCalendar({
  value,
  onChange,
  minDate,
  rangeStart,
  rangeEnd,
  onClose,
  align = "left",
}: DatePickerCalendarProps) {
  const todayObj = new Date();
  todayObj.setHours(0, 0, 0, 0);

  const initDate = value ? toMidnight(value) : (minDate ? toMidnight(minDate) : new Date());
  const [viewYear, setViewYear] = useState(initDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initDate.getMonth());

  const minDateObj = minDate ? toMidnight(minDate) : todayObj;
  const rangeStartObj = rangeStart ? toMidnight(rangeStart) : null;
  const rangeEndObj = rangeEnd ? toMidnight(rangeEnd) : null;
  const valueObj = value ? toMidnight(value) : null;

  // Build grid cells
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDayOfWeek).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  const handleDayClick = (day: number | null) => {
    if (!day) return;
    const clicked = new Date(viewYear, viewMonth, day);
    if (clicked < minDateObj) return;
    onChange(toYMD(clicked));
    onClose();
  };

  const getState = (day: number | null) => {
    if (!day) return "empty";
    const d = new Date(viewYear, viewMonth, day);
    if (d < minDateObj) return "disabled";
    if (valueObj && d.getTime() === valueObj.getTime()) return "selected";
    if (rangeStartObj && d.getTime() === rangeStartObj.getTime()) return "rangeStart";
    if (rangeEndObj && d.getTime() === rangeEndObj.getTime()) return "rangeEnd";
    if (rangeStartObj && rangeEndObj && d > rangeStartObj && d < rangeEndObj) return "inRange";
    if (d.toDateString() === todayObj.toDateString()) return "today";
    return "normal";
  };

  // Can we go to prev month? Don't go before the month containing minDate
  const canGoPrev = !(viewYear === minDateObj.getFullYear() && viewMonth === minDateObj.getMonth());

  return (
    <>
      {/* Invisible backdrop to catch outside clicks */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Calendar Panel */}
      <div
        className={`absolute top-full mt-2 z-50 rounded-2xl select-none ${align === "right" ? "right-0" : "left-0"}`}
        style={{
          backgroundColor: "white",
          boxShadow: "0 24px 64px rgba(11,44,74,0.22), 0 4px 16px rgba(11,44,74,0.1)",
          border: "1px solid #E2E8F0",
          width: "300px",
          padding: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-px rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, #F97316, transparent)" }}
        />

        {/* Month / Year Header */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={prevMonth}
            disabled={!canGoPrev}
            className="group flex items-center justify-center transition-all duration-200"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              border: canGoPrev ? "1px solid #E2E8F0" : "1px solid transparent",
              cursor: canGoPrev ? "pointer" : "not-allowed",
              opacity: canGoPrev ? 1 : 0.25,
            }}
            onMouseEnter={(e) => {
              if (canGoPrev) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F8FAFC";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            }}
          >
            {/* Thin arrow left */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 11.5L4.5 7L9 2.5"
                stroke={canGoPrev ? "#0B2C4A" : "#CBD5E1"}
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="text-center">
            <p
              style={{
                fontFamily: "'Merriweather', serif",
                color: "#0B2C4A",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.3px",
              }}
            >
              {MONTHS[viewMonth]}
            </p>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#F97316",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "1px",
                marginTop: "1px",
              }}
            >
              {viewYear}
            </p>
          </div>

          <button
            onClick={nextMonth}
            className="flex items-center justify-center transition-all duration-200"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "transparent",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F8FAFC";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            }}
          >
            {/* Thin arrow right */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 2.5L9.5 7L5 11.5"
                stroke="#0B2C4A"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Thin divider */}
        <div className="mb-3" style={{ height: "1px", backgroundColor: "#F1F5F9" }} />

        {/* Day Names */}
        <div className="grid grid-cols-7 mb-2">
          {DAY_NAMES.map((d) => (
            <div
              key={d}
              className="text-center py-1"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "10px",
                color: "#94A3B8",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7">
          {cells.map((day, idx) => {
            const state = getState(day);
            const isWeekend = idx % 7 === 0 || idx % 7 === 6;

            let bgColor = "transparent";
            let textColor = isWeekend ? "#374151" : "#1F2937";
            let fontWeight = 500;
            let borderRadius = "50%";
            let border = "none";
            let cursor = "pointer";
            let opacity = 1;
            let rangeBg = "transparent";

            switch (state) {
              case "empty":
                return <div key={idx} />;
              case "disabled":
                textColor = "#D1D5DB";
                cursor = "not-allowed";
                opacity = 0.4;
                break;
              case "selected":
                bgColor = "#0B2C4A";
                textColor = "white";
                fontWeight = 700;
                border = "none";
                break;
              case "rangeStart":
                bgColor = "#0B2C4A";
                textColor = "white";
                fontWeight = 700;
                rangeBg = "rgba(249,115,22,0.08)";
                borderRadius = "50% 0 0 50%";
                break;
              case "rangeEnd":
                bgColor = "#F97316";
                textColor = "white";
                fontWeight = 700;
                rangeBg = "rgba(249,115,22,0.08)";
                borderRadius = "0 50% 50% 0";
                break;
              case "inRange":
                bgColor = "transparent";
                textColor = "#92400E";
                fontWeight = 500;
                rangeBg = "rgba(249,115,22,0.08)";
                borderRadius = "0";
                break;
              case "today":
                border = "1px solid #0B2C4A";
                textColor = "#0B2C4A";
                fontWeight = 700;
                break;
            }

            return (
              <div
                key={idx}
                style={{ backgroundColor: rangeBg, borderRadius: state === "inRange" ? "0" : undefined }}
                className="relative"
              >
                <button
                  onClick={() => handleDayClick(day)}
                  disabled={state === "disabled"}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius,
                    backgroundColor: bgColor,
                    color: textColor,
                    fontWeight,
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "12.5px",
                    border,
                    cursor,
                    opacity,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "1px auto",
                    transition: "background-color 0.15s, color 0.15s",
                    outline: "none",
                    letterSpacing: "0.2px",
                  }}
                  onMouseEnter={(e) => {
                    if (state !== "disabled" && state !== "selected" && state !== "rangeStart" && state !== "rangeEnd") {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.backgroundColor = "rgba(11,44,74,0.07)";
                      el.style.color = "#0B2C4A";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (state !== "selected" && state !== "rangeStart" && state !== "rangeEnd") {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.backgroundColor = state === "inRange" ? "transparent" : bgColor;
                      el.style.color = textColor;
                    }
                  }}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="mt-4 pt-3 flex items-center justify-between"
          style={{ borderTop: "1px solid #F1F5F9" }}
        >
          {value ? (
            <>
              {/* Small calendar icon — thin stroke */}
              <span className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <rect x="1.5" y="2.5" width="13" height="12" rx="2" stroke="#F97316" strokeWidth="1.3"/>
                  <path d="M1.5 6.5h13" stroke="#F97316" strokeWidth="1.3"/>
                  <path d="M5 1v3M11 1v3" stroke="#F97316" strokeWidth="1.3" strokeLinecap="round"/>
                  <rect x="4.5" y="9" width="2" height="2" rx="0.5" fill="#F97316"/>
                  <rect x="7.5" y="9" width="2" height="2" rx="0.5" fill="#F97316"/>
                </svg>
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "11px",
                    color: "#F97316",
                    fontWeight: 700,
                  }}
                >
                  {new Date(value + "T00:00:00").toLocaleDateString("en-IN", {
                    day: "numeric", month: "short", year: "numeric",
                  })}
                </span>
              </span>
              {/* Checkmark tick — thin */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="#22C55E" strokeWidth="1.3"/>
                <path d="M5 8l2 2 4-4" stroke="#22C55E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          ) : (
            <span
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "11px",
                color: "#94A3B8",
                letterSpacing: "0.3px",
              }}
            >
              Select a date to continue
            </span>
          )}
        </div>
      </div>
    </>
  );
}