import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { AppConfig } from "./utils/AppConfig";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid

  if (!AppConfig.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
