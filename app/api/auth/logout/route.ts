import { NextResponse } from "next/server";
import { TOKEN_KEY } from "@/lib/auth/constants";

export async function GET(request: Request) {
  const url = new URL("/login", request.url);
  
  url.searchParams.set("session_expired", "true");
  url.searchParams.set("callbackUrl", "/dashboard");

  const response = NextResponse.redirect(url);
  
  response.cookies.delete(TOKEN_KEY);

  return response;
}
