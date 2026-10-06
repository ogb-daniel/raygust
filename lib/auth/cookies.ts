import { cookies } from "next/headers";
import { TOKEN_KEY, TOKEN_MAX_AGE_SECONDS } from "./constants";

export async function setTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_KEY, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: TOKEN_MAX_AGE_SECONDS,
  });
}
export async function getTokenCookie(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(TOKEN_KEY)?.value ?? null;
}
export async function removeTokenCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_KEY);
}
