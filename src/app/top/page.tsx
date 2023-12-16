import { HomePage } from "@/screens/home-page";
import prisma from "@/configs/prisma.config";
import { TopPage } from "@/screens/top-page";

export default async function Top() {
  const ANIMES_PER_PAGE = 15;

  const anime = await prisma.anime.findMany({
    where: { top: true },
    orderBy: { top_order: "asc" },
    take: ANIMES_PER_PAGE,
  });

  const animeCount = await prisma.anime.count({ where: { top: true } });

  return (
    <TopPage anime={anime} count={Math.ceil(animeCount / ANIMES_PER_PAGE)} />
  );
}
