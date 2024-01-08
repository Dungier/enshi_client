"use server";
import prisma from "@/configs/prisma.config";
import { IAnimeCheck } from "./types";

export const isAnimeFavourite = async (dto: IAnimeCheck): Promise<boolean> => {
  const favourite = await prisma.favourite.findFirst({
    where: { user_id: dto.user_id },
    include: {
      favouriteAnime: {
        where: { anime_Id: dto.anime_id },
      },
    },
  });
  return !!favourite?.favouriteAnime;
};
