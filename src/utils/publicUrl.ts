/** Resolve a path under `public/` for use in `src` (respects Vite `base`). */
export function publicUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL;
  const path = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${path}`;
}
