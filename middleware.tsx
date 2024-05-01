import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token");

  if (!token) {
    return NextResponse.redirect(new URL("/list", req.url));
  }
}
export const config = {
  matcher: ["/write"],
};
