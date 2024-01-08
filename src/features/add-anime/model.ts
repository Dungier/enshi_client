"use server";
import prisma from "@/configs/prisma.config";
import { IAddAnime } from "./types";

export const addPopular = async (dto: IAddAnime) => {
  try {
    const animeCount = await prisma.anime.count({ where: { popular: true } });

    await prisma.anime.update({
      data: {
        popular: true,
        popular_order: animeCount,
      },
      where: {
        anime_id: dto.anime_id,
      },
      include: { material_data: true },
    });
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
export const addTop = async (dto: IAddAnime) => {
  try {
    const animeCount = await prisma.anime.count({
      where: { top: true },
    });

    await prisma.anime.update({
      data: {
        top: true,
        top_order: animeCount,
      },
      where: {
        anime_id: dto.anime_id,
      },
      include: { material_data: true },
    });
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
