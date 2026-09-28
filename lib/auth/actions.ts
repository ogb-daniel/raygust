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

export async function registerAction(
  _prevState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      success: false,
      error: "Email and password are required.",
    };
  }

  try {
    const user = await apiFetch<UserResponse>("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password } satisfies UserCreate),
    });

    const tokenRes = await apiFetch<TokenResponse>("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    await setTokenCookie(tokenRes.access_token);

    return { success: true, user };
  } catch (err) {
    if (err instanceof ApiError) {
      if (Array.isArray(err.detail)) {
        const fieldErrors: Record<string, string> = {};
        for (const e of err.detail) {
          const field = e.loc[e.loc.length - 1]?.toString() ?? "unknown";
          fieldErrors[field] = e.msg;
        }
        return { success: false, fieldErrors };
      }
      return { success: false, error: err.message };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function loginAction(
  _prevState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!email || !password) {
    return {
      success: false,
      error: "Email and password are required.",
    };
  }
  try {
    const tokenRes = await apiFetch<TokenResponse>("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    await setTokenCookie(tokenRes.access_token);
    const user = await apiFetch<UserResponse>("/api/v1/users/me", {
      method: "GET",
    });
    return { success: true, user };
  } catch (err) {
    if (err instanceof ApiError) {
      return { success: false, error: err.message };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function logoutAction(): Promise<void> {
  await removeTokenCookie();
  redirect("/login");
}
