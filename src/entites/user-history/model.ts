"use server";
import prisma from "@/configs/prisma.config";
import { IAnime } from "@/shared/types/anime.types";

export const getViewed = async (user_id: number): Promise<IAnime[]> => {
  try {
    const viewed = await prisma.viewed.findFirst({
      where: { user_id },
      include: {
        viewedAnime: {
          include: { anime: { include: { material_data: true } } },
        },
      },
    });

    if (!viewed) throw new Error(`Плохой запрос`);

    const anime = viewed?.viewedAnime.map((item) => item.anime);

    return anime as IAnime[];
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

export const getFavourite = async (user_id: number): Promise<IAnime[]> => {
  try {
    const favourite = await prisma.favourite.findFirst({
      where: { user_id },
      include: {
        favouriteAnime: {
          include: { anime: { include: { material_data: true } } },
        },
      },
    });

    if (!favourite) throw new Error(`Плохой запрос`);

    const anime = favourite?.favouriteAnime.map((item) => item.anime);

    return anime as IAnime[];
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
