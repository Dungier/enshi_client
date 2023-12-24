import prisma from "@/configs/prisma.config";
import { TopPage } from "@/screens/top-page";
import { IAnime } from "@/shared/types/anime.types";

export default async function Top() {
  const ANIMES_PER_PAGE = 15;

  const anime = await prisma.anime.findMany({
    where: { top: true },
    orderBy: { top_order: "asc" },
    take: ANIMES_PER_PAGE,
    include: { material_data: true },
  });

  const animeCount = await prisma.anime.count({ where: { top: true } });

  return (
    <TopPage
      anime={anime as IAnime[]}
      count={Math.ceil(animeCount / ANIMES_PER_PAGE)}
    />
  );
}
