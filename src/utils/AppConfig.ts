import type { LocalePrefix } from "next-intl/routing";

import type { TApps } from "@/types";

const localePrefix: LocalePrefix = "as-needed";

// FIXME: Update this configuration file based on your project information
export const AppConfig: {
  name: string;
  locales: TApps.ILanguage[];
  defaultLocale: TApps.ILanguage;
  localePrefix: LocalePrefix;
} = {
  name: "Nextjs Starter",
  locales: ["en", "vi"],
  defaultLocale: "vi",
  localePrefix,
};
