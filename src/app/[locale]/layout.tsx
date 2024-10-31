import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "../providers";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Next Portfolio",
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
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
