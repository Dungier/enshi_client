"use server";
import prisma from "@/configs/prisma.config";
import { IAddToFavourite, IAnimeCheck, IRemoveFromFavourite } from "./types";

export const isAnimeFavourite = async (dto: IAnimeCheck): Promise<boolean> => {
  const favourite = await prisma.favourite.findFirst({
    where: { user_id: dto.user_id },
    select: { id: true, favouriteAnime: true },
  });

  if (!favourite) return false;

  const favouriteAnime = await prisma.favouriteAnime.findFirst({
    where: {
      favourite_id: favourite?.id,
      anime_Id: dto.anime_id,
    },
  });

  return !!favouriteAnime;
};

export const addToFavourite = async (dto: IAddToFavourite) => {
  const favourite = await prisma.favourite.findFirst({
    where: { user_id: dto.user_id },
    select: { id: true, favouriteAnime: true },
  });

  if (!favourite) throw new Error("Favourite not found");

  await prisma.favouriteAnime.create({
    data: {
      favourite_id: favourite?.id,
      anime_Id: dto.anime_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
};

export const removeFromFavourite = async (dto: IRemoveFromFavourite) => {
  const favourite = await prisma.favourite.findFirst({
    where: { user_id: dto.user_id },
    select: { id: true },
  });
  if (!favourite) throw new Error("Favourite not found");

  await prisma.favouriteAnime.deleteMany({
    where: {
      favourite_id: favourite?.id,
      anime_Id: dto.anime_id,
    },
  });
};
