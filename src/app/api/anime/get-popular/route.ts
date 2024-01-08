"use server";

import { NextResponse } from "next/server";
import prisma from "@/configs/prisma.config";

export async function GET() {
  try {
    const animeList = await prisma.anime.findMany({
      where: {
        popular: true,
      },
      orderBy: [
        {
          popular_order: "asc",
        },
      ],
      include: { material_data: true },
    });

    return NextResponse.json(animeList);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
