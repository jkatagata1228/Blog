import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const developToken = req.cookies.get("next-auth.session-token");
  const releaseToken = req.cookies.get("__Secure-next-auth.session-token");

  if (!developToken && !releaseToken) {
    return NextResponse.redirect(new URL("/list", req.url));
  }
}
export const config = {
  matcher: ["/write"],
};
