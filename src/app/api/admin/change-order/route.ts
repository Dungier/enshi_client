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
    const { type, updateList } = body as {
      type: string;
      updateList: { order: number; anime_id: number; slider_id: number }[];
    };
    if (!type || updateList.length === 0)
      return new NextResponse("Invalid body ", {
        status: 400,
      });
    if (type === "popular") {
      for (const animeToUpdate of updateList) {
        await prisma.anime.update({
          data: {
            popular: true,
            popular_order: animeToUpdate.order,
          },
          where: {
            anime_id: animeToUpdate.anime_id,
          },
        });
      }
    } else if (type === "top") {
      for (const animeToUpdate of updateList) {
        await prisma.anime.update({
          data: {
            top: true,
            top_order: animeToUpdate.order,
          },
          where: {
            anime_id: animeToUpdate.anime_id,
          },
        });
      }
    } else if (type === "slider") {
      for (const sliderToUpdate of updateList) {
        await prisma.homeSlider.update({
          data: {
            order: sliderToUpdate.order,
          },
          where: {
            id: sliderToUpdate.slider_id,
          },
        });
      }
    } else {
      return new NextResponse("Invalid type ", {
        status: 400,
      });
    }
    return NextResponse.json("Successful");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
