import type { LocalePrefix } from "next-intl/routing";

const localePrefix: LocalePrefix = "as-needed";

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: "Nextjs Starter",
  locales: ["en", "vi"],
  defaultLocale: "vi",
  localePrefix,
};
