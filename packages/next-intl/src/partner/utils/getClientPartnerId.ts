export default function getClientPartnerId(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const cookies = document.cookie.split("; ").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
  return cookies["PARTNER_ID"] || undefined;
}
