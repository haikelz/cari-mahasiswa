import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: ["/mahasiswa", "/perguruan-tinggi"],
};
