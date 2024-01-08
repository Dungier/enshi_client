"use server";
import prisma from "@/configs/prisma.config";

export const checkLogin = async (login: string): Promise<boolean> => {
  const loginExsists = await prisma.user.findFirst({ where: { login } });
  return !!loginExsists;
};

export const checkEmail = async (email: string): Promise<boolean> => {
  const emailExsists = await prisma.user.findFirst({ where: { email } });
  return !!emailExsists;
};
