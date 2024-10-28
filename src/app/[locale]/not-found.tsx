"use client";
// export const dynamic = 'force-dynamic;
import ThemedText from "@/components/ThemedText";
import { useRouter } from "@/i18n/routing";
import { Flex, Icon } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function NotFound() {
  const [counter, setCounter] = useState(30);

  const router = useRouter();

  const t = useTranslations("404-page");

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (counter === 0) router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <Flex
      w="100%"
      h="100vh"
      justify="center"
      align="center"
      direction="column"
      gap={5}
      position="relative"
    >
      <ThemedText color="black" type="title">
        {t("title")}
      </ThemedText>
      <ThemedText color="black">{t("description")}</ThemedText>
      <Flex
        py={3}
        px={4}
        bg="black"
        borderRadius={15}
        justify="center"
        align="center"
        gap={2}
        cursor="pointer"
        onClick={() => router.push("/")}
      >
        <Icon as={BiLeftArrowAlt} fontSize={20} color="white" />
        <ThemedText color="white"> {t("button")}</ThemedText>
      </Flex>
      <ThemedText type="grey-default" position="absolute" bottom={10}>
        {t("redirection", { seconds: counter })}
      </ThemedText>
    </Flex>
  );
}
