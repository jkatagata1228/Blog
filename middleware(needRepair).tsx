// middleware.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authOptions } from "./pages/api/auth/[...nextauth]";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (session === null) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/write"],
};
