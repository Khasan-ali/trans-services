import createMiddleware from 'next-intl/middleware';
// import { locales, localePrefix } from '../navigation';
 
export default createMiddleware({
  locales: ['en', 'uz', 'ru', 'uzb'],
 
  defaultLocale: 'uz',

});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(uz|en|uzb|ru)/:path*']
};
