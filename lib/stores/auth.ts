import { create } from "zustand";

import type { UserResponse } from "@/lib/api/client";
interface AuthState {
  user: UserResponse | null;
  isAuthenticated: boolean;
  setAuth: (user: UserResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  setAuth: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
