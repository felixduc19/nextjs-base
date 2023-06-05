import { NextResponse } from 'next/server'
import { NextRequestWithAuth } from 'next-auth/middleware'

export default function middleware(request: NextRequestWithAuth) {
    if (
        !request.cookies.get('next-auth.session-token') &&
        !request.nextUrl.pathname.startsWith('/login')
    ) {
        // private router
        return NextResponse.redirect(
            new URL(
                `/login?callbackUrl=${request.nextUrl.pathname}`,
                request.url
            )
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        // can modify
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
