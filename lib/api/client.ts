import type { components } from "@/lib/api-types";
import { getTokenCookie } from "@/lib/auth/cookies";

export type UserResponse = components["schemas"]["UserResponse"];
export type UserCreate = components["schemas"]["UserCreate"];
export type UserLogin = components["schemas"]["UserLogin"];
export type TokenResponse = components["schemas"]["TokenResponse"];
export type ValidationError = components["schemas"]["ValidationError"];
export type HTTPValidationError = components["schemas"]["HTTPValidationError"];

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export class ApiError extends Error {
  status: number;
  detail: string | ValidationError[];

  constructor(status: number, detail: string | ValidationError[]) {
    const message = typeof detail === "string" ? detail : "Validation error";
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.detail = detail;
  }
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit & { token?: string | null },
): Promise<T> {
  const { token, headers: customHeaders, ...rest } = options;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((customHeaders as Record<string, string>) ?? {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...rest,
    headers,
  });
  if (!response.ok) {
    let detail: string | ValidationError[];

    try {
      const body = await response.json();
      detail = body.detail ?? response.statusText;
    } catch {
      detail = response.statusText;
    }
    throw new ApiError(response.status, detail);
  }
  return response.json();
}
