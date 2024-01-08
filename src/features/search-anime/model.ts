"use server";
import prisma from "@/configs/prisma.config";
import { ISearchAnime, ISearchAnimeResponse } from "./types";
import { IAnime } from "@/shared/types/anime.types";

export const searchByName = async (
  dto: ISearchAnime
): Promise<ISearchAnimeResponse> => {
  try {
    const { page, limit, name } = dto;

    const skip = (page - 1) * limit;

    const animeList = await prisma.anime.findMany({
      where: {
        rating: {
          gte: 0,
          lte: 10,
        },
        OR: [
          {
            title: {
              contains: name,
              mode: "insensitive",
            },
          },
          {
            title_orig: {
              contains: name,
              mode: "insensitive",
            },
          },
          {
            other_title: {
              contains: name,
              mode: "insensitive",
            },
          },
        ],
        blocked: false,
      },
      include: { material_data: true },
      skip: skip,
      take: limit,
    });

    const totalItems = await prisma.anime.count({
      where: {
        rating: {
          gte: 0,
          lte: 10,
        },
        OR: [
          {
            title: {
              contains: name,
              mode: "insensitive",
            },
          },
          {
            title_orig: {
              contains: name,
              mode: "insensitive",
            },
          },
          {
            other_title: {
              contains: name,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return {
      anime: animeList as IAnime[],
      page: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    };
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
