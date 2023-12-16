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
    const { season, rating, title, description, image_url, anime_id } = body;
    if (!season || !rating || !title || !description || !image_url)
      return new NextResponse("Invalid body ", {
        status: 400,
      });

    const sliderCount = await prisma.homeSlider.count();

    const slider = await prisma.homeSlider.create({
      data: {
        anime_id,
        season,
        title,
        rating,
        description,
        image_url,
        order: sliderCount,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return NextResponse.json(slider);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
