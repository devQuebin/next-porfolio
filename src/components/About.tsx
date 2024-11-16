"use client";

import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function WithLargeQuote() {
  const t = useTranslations("HomePage");
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        {t("about_text")}
      </Text>
    </Stack>
  );
}
