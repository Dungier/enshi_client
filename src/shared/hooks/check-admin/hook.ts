"use server";
import { getServerSession } from "next-auth";
import prisma from "@/configs/prisma.config";

export const checkAdmin = async (): Promise<boolean> => {
  const session = await getServerSession();
  const userData = session?.user;
  if (!userData) return false;

  const user = await prisma.user.findUnique({
    where: {
      email: userData.email || "",
    },
  });
  if (!user) return false;

  return user.admin === true;
};
