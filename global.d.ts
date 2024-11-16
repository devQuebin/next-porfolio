import { routing } from "./src/i18n/routing";
import es from "./messages/es.json";

type Messages = typeof es;

type Locale = (typeof routing.locales)[number];

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
