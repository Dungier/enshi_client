"use server";
import prisma from "@/configs/prisma.config";

export const getBlocked = async () => {
  try {
    const animeList = await prisma.anime.findMany({
      where: {
        blocked: true,
      },
      include: { material_data: true },
    });

    return animeList;
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
