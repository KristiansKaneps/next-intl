"use client";

import NextLink, { type LinkProps as _LinkProps } from "next/link.js";
import { usePathname } from "next/navigation.js";
import { type ComponentProps, type ReactNode, type Ref, forwardRef} from "react";
import { usePartnerId } from "../hooks/usePartnerId.js";
import syncPartnerIdCookie from "../utils/syncPartnerIdCookie.js";

type NextLinkProps = Omit<ComponentProps<'a'>, keyof _LinkProps> &
  Omit<_LinkProps, 'partnerId'>;

type Props = NextLinkProps & {
  partnerId?: string;
};

function BaseLink(
  { href, onClick: _onClick, partnerId, prefetch, ...rest }: Props,
  ref: Ref<HTMLAnchorElement>,
) {
  const currentPartnerId = usePartnerId();
  const isChangingPartnerId = !!partnerId && partnerId !== currentPartnerId;

  const pathname = usePathname() as ReturnType<typeof usePathname> | null;

  // eslint-disable-next-line func-style
  const onClick: Props["onClick"] = (event) => {
    syncPartnerIdCookie(pathname, currentPartnerId, partnerId);
    if (_onClick) _onClick(event);
  };

  prefetch = prefetch && !isChangingPartnerId && !partnerId;

  const Link = NextLink as unknown as (props: NextLinkProps) => ReactNode;

  return (
    <Link
      ref={ref}
      href={href}
      onClick={onClick}
      prefetch={prefetch}
      {...rest}
    />
  );
}

export default forwardRef(BaseLink);
export type { Props as LinkProps };
