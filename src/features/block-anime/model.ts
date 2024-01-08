"use server";
import prisma from "@/configs/prisma.config";

export const blockAnime = async (id: number) => {
  try {
    await prisma.anime.update({
      where: {
        anime_id: Number(id),
      },
      include: { material_data: true },

      data: {
        blocked: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
