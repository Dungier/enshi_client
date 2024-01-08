"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/configs/prisma.config";
import { checkAdmin } from "@/shared/hooks/check-admin";

export async function POST(request: NextRequest) {
  try {
    const admin = await checkAdmin();
    if (!admin)
      return new NextResponse("Пошел нахуй!!!", {
        status: 403,
      });
    const body = await request.json();
    const { anime_id } = body;
    if (!anime_id)
      return new NextResponse("Invalid body ", {
        status: 400,
      });

    const anime = await prisma.anime.update({
      data: {
        top: false,
        top_order: -1,
      },
      where: {
        anime_id: anime_id,
      },
      include: { material_data: true },
    });
    return NextResponse.json(anime);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
