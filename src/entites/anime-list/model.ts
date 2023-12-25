"use server";
import prisma from "@/configs/prisma.config";
import { IPagination } from "./types";
import { IAnime } from "@/shared/types/anime.types";
import { IAnimeFilters } from "@/features/anime-filter/types";

export const getNew = async (
  dto: IPagination,
): Promise<{ anime: IAnime[]; count: number }> => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const newAnime = await prisma.anime.findMany({
    orderBy: { year: "desc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
    include: { material_data: true },
  });
  return { anime: newAnime as IAnime[], count: 0 };
};

export const getHighRated = async (
  dto: IPagination,
): Promise<{ anime: IAnime[]; count: number }> => {
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

  return { anime: highRatedAnime as IAnime[], count: 0 };
};

export const getTop = async (
  dto: IPagination,
): Promise<{ anime: IAnime[]; count: number }> => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const topAnime = await prisma.anime.findMany({
    where: { top: true },
    orderBy: { top_order: "asc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
    include: { material_data: true },
  });
  return { anime: topAnime as IAnime[], count: 0 };
};

export const getCatalog = async (
  dto: IPagination,
  filters: IAnimeFilters,
): Promise<{ anime: IAnime[]; count: number }> => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;

  const animeFilter = {
    years:
      filters.years.length > 0
        ? {
            in: filters.years.map((item) => Number(item.id)),
          }
        : {},

    status: {
      anime_status:
        filters.statuses.length > 0
          ? {
              in: filters.statuses.map((item) => item.id.toString()),
            }
          : {},
    },
    genres: filters.genres.map((genre) => Number(genre.id)),
  };

  const anime = await prisma.anime.findMany({
    where: {
      rating: {
        gte: 0,
        lte: 10,
      },
      genres: {
        some:
          animeFilter.genres.length > 0
            ? {
                id: { in: animeFilter.genres },
              }
            : {},
      },
      material_data: animeFilter.status,
      year: animeFilter.years,
    },
    orderBy: { rating: "desc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
    include: {
      genres: true,
      material_data: true,
    },
  });
  const animeCount = await prisma.anime.count({
    where: {
      rating: {
        gte: 0,
        lte: 10,
      },
      year: animeFilter.years,
      genres: {
        some:
          animeFilter.genres.length > 0
            ? {
                id: {
                  in: animeFilter.genres,
                },
              }
            : {},
      },
      material_data: animeFilter.status,
    },
  });

  return {
    anime: anime as unknown as IAnime[],
    count: Math.ceil(animeCount / ANIMES_PER_PAGE),
  };
};
