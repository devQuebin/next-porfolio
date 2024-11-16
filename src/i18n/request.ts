import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const resolvedLocale = await requestLocale;

  const locale: Locale | undefined = routing.locales.includes(
    resolvedLocale as Locale
  )
    ? (resolvedLocale as Locale)
    : routing.defaultLocale;

  // // Ensure that a valid locale is used
  // if (!locale || !routing.locales.includes(locale)) {
  //   locale = routing.defaultLocale;
  // }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
