/** Format `YYYY-MM-DD` → e.g. "15 May 2026" (en-IN), parsed as local calendar date. */
export function formatDateYmdToDisplay(ymd: string): string {
  if (!ymd) return "";
  const [y, m, d] = ymd.split("-").map(Number);
  if (!y || !m || !d) return "";
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Same as above but abbreviated month (compact UI labels). */
export function formatDateYmdToDisplayShort(ymd: string): string {
  if (!ymd) return "";
  const [y, mo, d] = ymd.split("-").map(Number);
  if (!y || !mo || !d) return "";
  return new Date(y, mo - 1, d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
