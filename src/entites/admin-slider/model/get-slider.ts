"use server";

import prisma from "@/configs/prisma.config";

export const getHomeSliders = async () => {
  try {
    const sliders = await prisma.homeSlider.findMany({
      orderBy: { order: "asc" },
    });
    return sliders;
  } catch (e) {
    console.error(e);
    throw new Error(`${e}`);
  }
};
