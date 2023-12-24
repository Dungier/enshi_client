"use server";
import prisma from "@/configs/prisma.config";
export const getGenreFilters = async () => {
  const genres = await prisma.genre.findMany();
  return genres.map((genre) => ({
    id: genre.id,
    title: genre.title,
  })) as Array<{ id: number; title: string }>;
};
