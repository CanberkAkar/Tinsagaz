import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['tr', 'en', 'de', 'fr', 'it', 'ja'];
const defaultLocale = 'tr';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths, api routes, and static files
    '/((?!api|_next/static|_next/image|favicon.ico|logo-tinsagaz-v2.png|logo-v2.png|logo-tinsagaz.png|logo.png|hero.png|file.svg|globe.svg|next.svg|vercel.svg|window.svg|.*\\.png|.*\\.svg|.*\\.ico|.*\\.pdf).*)',
  ],
};
