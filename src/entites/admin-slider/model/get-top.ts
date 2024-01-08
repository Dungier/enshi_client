"use server";

import prisma from "@/configs/prisma.config";
import { IAnime } from "@/shared/types/anime.types";

export const getTop = async (): Promise<IAnime[]> => {
  try {
    const anime = await prisma.anime.findMany({
      where: {
        top: true,
        rating: {
          gte: 0,
          lte: 10,
        },
      },
      orderBy: { top_order: "asc" },
      include: { material_data: true },
    });
    return anime as IAnime[];
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
