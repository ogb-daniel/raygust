"use client";

import { useEffect, useRef } from "react";
import { useAuthStore } from "@/lib/stores/auth";
import type { UserResponse } from "@/lib/api/client";

interface AuthHydratorProps {
  user: UserResponse;
}

export default function AuthHydrator({ user }: AuthHydratorProps) {
  const setAuth = useAuthStore((state) => state.setAuth);

  const hydrated = useRef(false);

  if (!hydrated.current) {
    setAuth(user);
    hydrated.current = true;
  }

  useEffect(() => {
    setAuth(user);
  }, [user, setAuth]);

  return null;
}
