export default async function getServerPartnerId(): Promise<
  string | undefined
> {
  if (typeof window !== "undefined") return undefined;
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  return cookieStore.get("PARTNER_ID")?.value || undefined;
}
