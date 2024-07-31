import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


/*
 we are setting all the routes to private
 When we go to any route we want to redilect the user to login page

*/
const protectedRoute = createRouteMatcher([
    '/',
    '/upcoming',
    '/meeting(.*)',
    '/previous',
    '/recordings',
    '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
    if (protectedRoute(req))
        auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};