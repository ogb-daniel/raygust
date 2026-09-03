"use server";
import {
  apiFetch,
  ApiError,
  type UserCreate,
  type UserResponse,
  type TokenResponse,
} from "@/lib/api/client";
import { setTokenCookie, removeTokenCookie } from "@/lib/auth/cookies";
import { redirect } from "next/navigation";

type ActionResult = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
  user?: UserResponse;
};
