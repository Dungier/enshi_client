import { ServiceWorkerRegister } from "@/shared/service-worker";
import type { Metadata } from "next";
import { AuthProvider } from "@/providers/auth-provider";
import { ColorModeProvider } from "@/shared/context/color-mode";
import { Footer } from "@/widgets/footer";
import { NavBar } from "@/widgets/navbar";
import { getFonts } from "@/assets/fonts";
import { PalleteTheme } from "@/assets/pallete-theme";
import { MainContainer } from "@/shared/containers/main-container";
import { Wrapper } from "@/shared/containers/root-wrapper";
import { StylesProvider } from "@/providers/styles-provider";
import { TanstackProvider } from "@/providers/tanstack-provider";

export const metadata: Metadata = {
  title: "Enshi.",
  description:
    "Enshi. — это бесплатный сайт по просмотру аниме который может похвастаться простым и привлекательным интерфейсом, удобным фильтром который поможет найти аниме по вашему вкусу! Смотри аниме с любимой озвучкой на Enshi.",
  keywords: [
    "аниме",
    "фильмы",
    "онлайн сервис",
    "просмотр",
    "видео",
    "энши",
    "Enshi",
    "смотреть аниме",
    "аниме онлайн",
    "топ аниме",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={getFonts()}>
        <ServiceWorkerRegister />
        <TanstackProvider>
          <AuthProvider>
            <ColorModeProvider>
              <PalleteTheme>
                <StylesProvider>
                  <Wrapper>
                    <NavBar />
                    <MainContainer>{children}</MainContainer>
                    <Footer />
                  </Wrapper>
                </StylesProvider>
              </PalleteTheme>
            </ColorModeProvider>
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
