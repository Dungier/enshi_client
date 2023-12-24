import { AnimePage } from "@/screens/anime-page";
import prisma from "@/configs/prisma.config";
import { redirect } from "next/navigation";
import { IAnime } from "@/shared/types/anime.types";

export default async function Anime({ params }: { params: { id: number } }) {
  const id = params.id;
  if (isNaN(Number(id)) || Number(id) > 2147483647 || Number(id) < 0)
    redirect("/404");
  const anime = await prisma.anime.findUnique({
    where: {
      anime_id: Number(id),
      blocked: false,
    },
    include: { material_data: true },
  });

  if (!anime) redirect("/404");

  return <AnimePage anime={anime as IAnime} />;
}
