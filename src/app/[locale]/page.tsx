"use Client";
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
// import { Flex } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function HomePage() {
  // const t = useTranslations("HomePage");
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
