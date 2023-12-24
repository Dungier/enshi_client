"use server";
import prisma from "@/configs/prisma.config";

export const checkFavourite = async (dto: {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}) => {
  if (!dto.email) return false;
  const user = await prisma.user.findUnique({ where: { email: dto.email } });
  if (!user) return false;
  // const isFavourite = await prisma.favourite.findUnique({
  //   where: {
  //         user_id: user.id,

  //   },
  // });
};
