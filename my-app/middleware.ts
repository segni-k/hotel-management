// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isReservationRoute = createRouteMatcher(["/reserve(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isReservationRoute(req)) {
    // Auth guard
    await auth.protect();  
  }
});

export const config = {
  matcher: [
    // Ensure middleware runs for all routes except static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/reservation(.*)'
  ],
};
