import { Flex, Heading, Text } from "@chakra-ui/react";
import ThemedText from "../ThemedText";
import { Link } from "../../i18n/routing";
import { useTranslations } from "next-intl";

const color = "gray.500";

function Footer() {
  const t = useTranslations("general");
  const current_year = new Date().getFullYear().toString();

  return (
    <Flex
      bg="black"
      w="100%"
      h={{ base: "30svh", md: "32vmin" }}
      maxH={{ base: "40vh" }}
      minH="fit-content"
      justify={{ base: "center", md: "space-around" }}
      align="flex-end"
      py={{ base: "1em", md: 8 }}
      px={{ base: 3, sm: 6, lg: 10 }}
      direction={{ base: "column-reverse", md: "row" }}
      gap={{ base: 3 }}
    >
      <Flex
        w={{ base: "100%", md: "50%" }}
        direction="column"
        justify="center"
        align="flex-start"
        mt={{ base: 0, md: 3 }}
        gap={2}
      >
        <Heading color="white">Kevin Matsuda {current_year}</Heading>
        <ThemedText color={color} type="small">
          <Link href="/eperience">{t("work")}</Link> |{" "}
          <Link href="/education">{t("edu")}</Link> |{" "}
          <Link href="/projects">{t("project")}</Link> |{" "}
          <Link href="contact">{t("contact")}</Link>
        </ThemedText>
      </Flex>
      <Flex
        w={{ base: "100%", md: "40%" }}
        justify={{ base: "flex-start" }}
        gap={5}
        direction={{ base: "row", md: "column" }}
        borderLeftWidth={{ base: 0, md: 3 }}
        borderLeftColor="white"
        pl={{ base: 0, md: 3 }}
        pt={{ base: 2, md: 0 }}
      ></Flex>
    </Flex>
  );
}

export default Footer;
