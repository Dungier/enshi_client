"use server";
import { IAddScreenTime, IAddToViewed } from "./types";
import prisma from "@/configs/prisma.config";

export const addToViewed = async (dto: IAddToViewed) => {
  try {
    const viewed = await prisma.viewed.findFirst({
      where: {
        user_id: dto.user_id,
      },
    });

    if (!viewed) {
      throw new Error("viewed not found");
    }
    const viewedAnime = await prisma.viewedAnime.findFirst({
      where: {
        anime_Id: dto.anime_id,
      },
    });
      
    if (!viewedAnime)
      await prisma.viewedAnime.create({
        data: {
          anime_Id: dto.anime_id,
          viewed_id: viewed?.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

    return "succesful";
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

export const addScreenTime = async (dto: IAddScreenTime) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: dto.user_id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    await prisma.user.update({
      where: { id: dto.user_id },
      data: {
        minutes_watched: user.minutes_watched + 1,
      },
    });

    return "succesful";
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
