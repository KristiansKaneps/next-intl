"use client";

import { useEffect, useState } from "react";
import getClientPartnerId from "../utils/getClientPartnerId.js";

export function usePartnerId(
  initialValue: string | undefined = undefined,
): string | undefined {
  const [partnerId, setPartnerId] = useState<string | undefined>(initialValue);

  useEffect(() => {
    const clientPartnerId = getClientPartnerId();
    if (clientPartnerId !== partnerId) {
      setPartnerId(clientPartnerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return partnerId;
}
