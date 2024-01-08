"use server";

import prisma from "@/configs/prisma.config";
import { IAnime } from "@/shared/types/anime.types";

export const getPopular = async (): Promise<IAnime[]> => {
  try {
    const popular = await prisma.anime.findMany({
      where: {
        popular: true,
        rating: {
          gte: 0,
          lte: 10,
        },
      },
      orderBy: { popular_order: "asc" },
      include: { material_data: true },
    });

    return popular as IAnime[];
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
