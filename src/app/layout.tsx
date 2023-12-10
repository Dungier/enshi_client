import { ServiceWorkerRegister } from "@/shared/service-worker";
import type { Metadata } from "next";
import { AuthProvider } from "@/providers/auth-provider";
import { ColorModeProvider } from "@/shared/context/color-mode";
import { Footer } from "@/widgets/footer";
import { NavBar } from "@/widgets/navbar";
import { getFonts } from "@/assets/fonts";
import { PalleteTheme } from "@/assets/pallete-theme";

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
        <AuthProvider>
          <ColorModeProvider>
            <PalleteTheme>
              <NavBar />
              {children}
              <Footer />
            </PalleteTheme>
          </ColorModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
