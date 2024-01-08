"use server";
import prisma from "@/configs/prisma.config";
import { IAnime } from "@/shared/types/anime.types";

export const getSimilarAnime = async (anime: IAnime) => {
  const genres = await prisma.genre.findMany({
    where: {
      title: { in: anime.material_data.all_genres },
    },
    select: { id: true },
  });

  const genresIds = genres.map((genre) => genre.id);

  return await prisma.anime.findMany({
    take: 30,
    where: {
      anime_id: { not: anime.anime_id },
      rating: {
        gte: 0,
        lte: 10,
      },
      genres: {
        some: {
          id: { in: genresIds },
        },
      },
    },
    include: {
      material_data: true,
    },
  });
};


