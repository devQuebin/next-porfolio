"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import React, { useTransition } from "react";
import { Locale } from "../../../global";
import { setUserLocale } from "@/actions/locale";
import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiTranslate } from "react-icons/hi";
import { GiCheckMark } from "react-icons/gi";
import ThemedText from "../ThemedText";
import { useTranslations } from "next-intl";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

function Navbar({ defaultValue, items }: Props) {
  const t = useTranslations("general");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
      router.replace(pathname, { locale });
    });
  }

  return (
    <Flex
      //   bg="yellow"
      h="9vh"
      w="100%"
      justify="space-between"
      align="center"
      position="fixed"
      px={{ base: 2, sm: 10, md: 20 }}
      backdropFilter="blur(10px)"
      bg="whiteAlpha.900"
      zIndex={1000}
    >
      <Link href="/">
        <ThemedText>Kevin Matsuda</ThemedText>
      </Link>
      <Flex gap={5} justify="flex-end" align="center">
        <Link href="/experience">
          <ThemedText>{t("work")}</ThemedText>
        </Link>
        <Link href="/education">
          <ThemedText>{t("edu")}</ThemedText>
        </Link>
        <Link href="/project">
          <ThemedText>{t("project")}</ThemedText>
        </Link>
        <Link href="/contact">
          <ThemedText>{t("contact")}</ThemedText>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HiTranslate />}
            bg="none"
            variant="shadow"
          />
          <MenuList bg={"none"} boxShadow={"common-shadow"} py={"0"}>
            {items.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => changeLocale(item.value)}
                fontWeight={defaultValue === item.value ? "bold" : "normal"}
                gap={3}
                as={Button}
                variant={"normal"}
                borderBottomRadius={0}
                backdropFilter="blur(10px)"
                bg="whiteAlpha.900"
                borderBottomWidth={1}
                isLoading={isPending}
              >
                {item.label}
                {defaultValue === item.value && <GiCheckMark size={20} />}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Navbar;
