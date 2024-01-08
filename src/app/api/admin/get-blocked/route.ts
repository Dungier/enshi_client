"use server";

import { NextResponse } from "next/server";
import prisma from "@/configs/prisma.config";
import { checkAdmin } from "@/shared/hooks/check-admin";

export async function GET() {
  try {
    const admin = await checkAdmin();
    if (!admin)
      return new NextResponse("Пошел нахуй!!!", {
        status: 403,
      });
    const animeList = await prisma.anime.findMany({
      where: {
        blocked: true,
      },
      include: { material_data: true },
    });

    return NextResponse.json(animeList);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
