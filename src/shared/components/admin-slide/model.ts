"use server";
import prisma from "@/configs/prisma.config";
import { IDeleteAnime, IDeleteSlide } from "./types";

export const deleteSlide = async (dto: IDeleteSlide) => {
  try {
    await prisma.homeSlider.delete({
      where: {
        id: dto.slider_id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};

export const deleteTop = async (dto: IDeleteAnime) => {
  try {
    await prisma.anime.update({
      data: {
        top: false,
        top_order: -1,
      },
      where: {
        anime_id: dto.id,
      },
      include: { material_data: true },
    });
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};

export const deletePopular = async (dto: IDeleteAnime) => {
  try {
    await prisma.anime.update({
      data: {
        popular: false,
        popular_order: -1,
      },
      where: {
        anime_id: dto.id,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
