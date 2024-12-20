import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "../providers";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Kevin Matsuda",
  description: "Kevin Matsuda Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Flex direction="column" position="relative">
              <Navbar
                defaultValue={locale}
                items={[
                  {
                    value: "es",
                    label: "ES",
                  },
                  {
                    value: "en",
                    label: "EN",
                  },
                ]}
                label={"label"}
              />
              {children}
              <Footer />
            </Flex>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
