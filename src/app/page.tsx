import { HomePage } from "@/screens/home-page";
import prisma from "@/configs/prisma.config";
import { IAnime } from "@/shared/types/anime.types";

export default async function Home() {
  const ANIMES_PER_PAGE = 15;
  const sliders = await prisma.homeSlider.findMany({
    orderBy: { order: "asc" },
  });
  const popular = await prisma.anime.findMany({
    where: { popular: true },
    orderBy: { popular_order: "asc" },
    include: { material_data: true },
  });
  
  const highRatedAnime = await prisma.anime.findMany({
    where: {
      rating: {
        gte: 0,
        lte: 10,
      },
    },
    orderBy: { rating: "desc" },
    take: ANIMES_PER_PAGE,
    include: { material_data: true },
  });

  const newAnime = await prisma.anime.findMany({
    orderBy: { year: "desc" },
    take: ANIMES_PER_PAGE,
    include: { material_data: true },
  });

  const animeCount = await prisma.anime.count();

  return (
    <HomePage
      popular={popular as IAnime[]}
      sliders={sliders}
      highRatedAnime={highRatedAnime as IAnime[]}
      highRatedAnimeCount={Math.ceil(animeCount / ANIMES_PER_PAGE)}
      newAnimeCount={Math.ceil(animeCount / ANIMES_PER_PAGE)}
      newAnime={newAnime as IAnime[]}
    />
  );
}
