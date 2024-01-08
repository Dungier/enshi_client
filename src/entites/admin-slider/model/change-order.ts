"use server";

import prisma from "@/configs/prisma.config";
import { IChangeOrder } from "../types";

export const changeOrder = async (dto: IChangeOrder) => {
  try {
    const { type, updateList } = dto;

    if (!type || updateList.length === 0) throw new Error("Invalid body");
    if (type === "popular") {
      for (const animeToUpdate of updateList) {
        await prisma.anime.update({
          data: {
            popular: true,
            popular_order: animeToUpdate.order,
          },
          include: { material_data: true },
          where: {
            rating: {
              gte: 0,
              lte: 10,
            },
            anime_id: animeToUpdate.anime_id,
          },
        });
      }
    } else if (type === "top") {
      for (const animeToUpdate of updateList) {
        await prisma.anime.update({
          data: {
            top: true,
            top_order: animeToUpdate.order,
          },
          where: {
            rating: {
              gte: 0,
              lte: 10,
            },
            anime_id: animeToUpdate.anime_id,
          },
          include: { material_data: true },
        });
      }
    } else if (type === "slider") {
      for (const sliderToUpdate of updateList) {
        await prisma.homeSlider.update({
          data: {
            order: sliderToUpdate.order,
          },
          where: {
            rating: {
              gte: 0,
              lte: 10,
            },
            id: sliderToUpdate.slider_id,
          },
        });
      }
    } else {
      throw new Error("Invalid type ");
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
