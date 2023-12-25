import { CatalogPage } from "@/screens/catalog-page";
import prisma from "@/configs/prisma.config";
import { IAnime } from "@/shared/types/anime.types";

export default async function Catalog() {
  const ANIMES_PER_PAGE = 15;
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
  const highRatedAnimeCount = await prisma.anime.count({
    where: {
      rating: {
        gte: 0,
        lte: 10,
      },
    },
  });
  return (
    <CatalogPage
      anime={highRatedAnime as IAnime[]}
      count={Math.ceil(highRatedAnimeCount / ANIMES_PER_PAGE)}
    />
  );
}
