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
    const { id } = body;
    if (!id)
      return new NextResponse("Нет поля id ", {
        status: 400,
      });

    const updatedAnime = await prisma.anime.update({
      where: {
        anime_id: Number(id),
      },
      data: {
        blocked: true,
      },
    });
    if (!updatedAnime)
      return new NextResponse(`Аниме с id ${id} не найдено`, {
        status: 400,
      });

    return NextResponse.json(updatedAnime);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
