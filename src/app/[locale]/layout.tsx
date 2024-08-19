import "@/styles/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";

import { DefaultLayout } from "@/components/Layouts";
import { AppConfig } from "@/utils/appConfig";

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <DefaultLayout>
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>{children}</ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </DefaultLayout>
  );
}
