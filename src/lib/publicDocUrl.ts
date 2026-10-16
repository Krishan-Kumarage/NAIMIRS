/** Build a URL for files under `public/` (e.g. documents with spaces in folder names). */
export function publicDocUrl(relativeToPublic: string): string {
  const normalized = relativeToPublic.replace(/^\/+/, "");
  return (
    "/" +
    normalized
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/")
  );
}
