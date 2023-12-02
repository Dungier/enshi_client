import { AuthProvider } from "@/providers/auth-provider";
import { ServiceWorkerRegister } from "@/shared/service-worker";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

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
      <body className={inter.className}>
        <ServiceWorkerRegister />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
