"use server";
import prisma from "@/configs/prisma.config";
import { ICreateSlide } from "./types";

export const addSlide = async (dto: ICreateSlide) => {
  try {
    const { season, title, anime_id, rating, description, image_url, preview_image_url } = dto;

    const sliderCount = await prisma.homeSlider.count();

    await prisma.homeSlider.create({
      data: {
        anime_id,
        season,
        title,
        rating,
        description,
        image_url,
        order: sliderCount,
        preview_image_url,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
