"use server";
import prisma from "@/configs/prisma.config";

export const getViewedAnimeCount = async (user_id: number): Promise<number> => {
  try {
    const viewed = await prisma.viewed.findFirst({ where: { user_id } });
    if (!viewed) throw new Error("Плохой запрос");
    const viewedCount = await prisma.viewedAnime.count({
      where: { viewed_id: viewed?.id },
    });
    return viewedCount;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
