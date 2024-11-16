import { Flex, Text } from "@chakra-ui/react";
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
        <Text>Kevin Matsuda {current_year}</Text>
        <ThemedText color={color} type="small">
          <Link href="/privacy">Privacy Policy</Link> |{" "}
          <Link href="/terms">Terms of Service</Link> |{" "}
          <Link href="cookies">Cookies</Link>
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
      >
        <ThemedText color={color} type="small">
          Product
        </ThemedText>
        <ThemedText color="white" type="small">
          <Link href="/faqs">FAQ</Link>
        </ThemedText>
        <ThemedText color="white" type="small">
          <Link href="/contactus">{t("contact")}</Link>
        </ThemedText>
      </Flex>
    </Flex>
  );
}

export default Footer;
