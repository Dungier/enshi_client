"use server";
import prisma from "@/configs/prisma.config";
import { IPagination } from "./types";

export const getNew = async (dto: IPagination) => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const newAnime = await prisma.anime.findMany({
    orderBy: { year: "desc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
  });
  return newAnime;
};

export const getHighRated = async (dto: IPagination) => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const highRatedAnime = await prisma.anime.findMany({
    orderBy: { rating: "desc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
  });
  return highRatedAnime;
};

export const getTop = async (dto: IPagination) => {
  const ANIMES_PER_PAGE = 15;
  const skip = (dto.page - 1) * ANIMES_PER_PAGE;
  const topAnime = await prisma.anime.findMany({
    where: { top: true },
    orderBy: { top_order: "asc" },
    take: ANIMES_PER_PAGE,
    skip: skip,
  });
  return topAnime;
};
