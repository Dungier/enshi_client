"use server";

import { NextResponse } from "next/server";
import prisma from "@/configs/prisma.config";

export async function GET() {
  try {
    const animeList = await prisma.anime.findMany({
      where: {
        top: true,
      },
      orderBy: [
        {
          updatedAt: "asc",
        },
      ],
    });

    return NextResponse.json(animeList);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
