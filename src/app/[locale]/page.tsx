"use Client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Flex } from "@chakra-ui/react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Flex>Hola</Flex>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
