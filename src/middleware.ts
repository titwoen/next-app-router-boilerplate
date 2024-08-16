import createMiddleware from "next-intl/middleware";
import { AppConfig } from "./utils/AppConfig";

export default createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix, // ! config redirect to empty locale when default locale = current locale acbc.com/vi => abc.com/
  defaultLocale: AppConfig.defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};
