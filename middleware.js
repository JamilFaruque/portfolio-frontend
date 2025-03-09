import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function middleware(request) {
    // console.log('Middleware executed!');

    // console.log(request);
    if (request.nextUrl.pathname === '/edit') {
        return NextResponse.redirect(new URL('/verify', request.url));
    }
    
    // Add a header to check if middleware is work
    // return NextResponse.redirect(new URL('/about', request.url));

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/about', '/edit'],  // Runs only for the home page
};