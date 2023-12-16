import { HomePage } from "@/screens/home-page";
import prisma from "@/configs/prisma.config";

export default async function Home() {
  const ANIMES_PER_PAGE = 15;
  const sliders = await prisma.homeSlider.findMany({
    orderBy: { order: "asc" },
  });
  const popular = await prisma.anime.findMany({
    where: { popular: true },
    orderBy: { popular_order: "asc" },
  });
  const highRatedAnime = await prisma.anime.findMany({
    orderBy: { rating: "desc" },
    take: ANIMES_PER_PAGE,
  });

  const newAnime = await prisma.anime.findMany({
    orderBy: { year: "desc" },
    take: ANIMES_PER_PAGE,
  });

  const animeCount = await prisma.anime.count();

  return (
    <HomePage
      popular={popular}
      sliders={sliders}
      highRatedAnime={highRatedAnime}
      highRatedAnimeCount={Math.ceil(animeCount / ANIMES_PER_PAGE)}
      newAnimeCount={Math.ceil(animeCount / ANIMES_PER_PAGE)}
      newAnime={newAnime}
    />
  );
}
