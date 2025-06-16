export default function syncPartnerIdCookie(
  pathname: string | null,
  partnerId?: string,
  nextPartnerId?: string,
) {
  const isSwitchingPartnerId = nextPartnerId !== partnerId;

  if (!isSwitchingPartnerId || !pathname) {
    return;
  }

  // Note that writing to `document.cookie` doesn't overwrite all
  // cookies, but only the ones referenced via the name here.
  document.cookie = `PARTNER_ID=${nextPartnerId};SameSite=strict;`;
}
