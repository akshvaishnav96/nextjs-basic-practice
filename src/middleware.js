import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { verifyLoginToken } from "./utils/LoginTokenVerification";

const roleBasedRoutes = {
  admin: ["/admin", "/admin/board", "/admin/message","/admin/profile"], // Example admin pages
  agent: ["/agent", "/agent/dashboard", "/agent/reports"], // Example agent pages
  agency: ["/agency", "/agency/overview", "/agency/contracts"], // Example agency pages
  owner: ["/owner"],
  user: ["/user/payment"],
};

// Middleware function
export async function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token")?.value;

  const restrictedRoutes = ["/login", "/signup"];

  let role;
  let status;

  if (token) {
    ({ role: role, status: status } = await verifyLoginToken(request.nextUrl.origin, token));
  }

  const pathname = request.nextUrl.pathname;

  if (!role && restrictedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if the role exists in roleBasedRoutes
  if (role) {

    if (restrictedRoutes.includes(pathname)) {
      return NextResponse.redirect(
        new URL(role == "user" ? "/" : `/${role}`, request.url)
      );
    }
    if (role && roleBasedRoutes[role]) {
      console.log();
      
      if (pathname.slice(1).startsWith(role)) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(
          new URL("/login?msg=not authorized&flag=error", request.url)
        );
      }
    } else {
      return NextResponse.redirect(
        new URL(
          "/not-found?msg=Something went wrong with user Role &flag=error",
          request.url
        )
      );
    }
  } else {
    return NextResponse.redirect(
      new URL(`/?msg=Not Authorized please login&flag=error`, request.url)
    );
  }
}

// Configure middleware to match all routes
export const config = {
  matcher: [
    "/admin/:path*",
    "/agent/:path*",
    "/agency/:path*",
    "/owner/:path*",
    "/access-denied",
    "/login",
    "/signup",
    "/user/:path*",
  ],
};
