"use server";
import prisma from "@/configs/prisma.config";
import { IPagination } from "./types";
import { IAnime } from "@/shared/types/anime.types";

export const getNew = async (dto: IPagination): Promise<IAnime[]> => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const newAnime = await prisma.anime.findMany({
    orderBy: { year: "desc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
    include: { material_data: true },
  });
  return newAnime as IAnime[];
};

export const getHighRated = async (dto: IPagination): Promise<IAnime[]> => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const highRatedAnime = await prisma.anime.findMany({
    where: {
      rating: {
        gte: 0,
        lte: 10,
      },
    },
    orderBy: { rating: "desc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
    include: { material_data: true },
  });

  return highRatedAnime as IAnime[];
};

export const getTop = async (dto: IPagination): Promise<IAnime[]> => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const topAnime = await prisma.anime.findMany({
    where: { top: true },
    orderBy: { top_order: "asc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
    include: { material_data: true },
  });
  return topAnime as IAnime[];
};
