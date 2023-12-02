import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enshi.",
    short_name: "Enshi.",
    description:
      "Enshi. — это бесплатный сайт по просмотру аниме который может похвастаться простым и привлекательным интерфейсом, удобным фильтром который поможет найти аниме по вашему вкусу! Смотри аниме с любимой озвучкой на Enshi.",
    lang: "ru",
    orientation: "any",
    icons: [
      {
        src: "./android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "./favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "./favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "./favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "./apple-touch-icon.png",
        sizes: "76x76",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "./screenshot-mobile.png",
        sizes: "375x667",
        type: "image/png",
      },
      {
        src: "./screenshot-tablet.png",
        sizes: "768x1024",
        type: "image/png",
      },
      {
        src: "./screenshot-desktop.png",
        sizes: "1366x768",
        type: "image/png",
      },
      {
        src: "./screenshot-wide.png",
        sizes: "1920x1080",
        type: "image/png",
      },
    ],
    start_url: "/",
    theme_color: "#8b54fd",
    background_color: "#16151A",
    display: "standalone",
  };
}
