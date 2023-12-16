"use server";

import { NextResponse } from "next/server";
import prisma from "@/configs/prisma.config";

export async function GET() {
  try {
    const sliders = await prisma.homeSlider.findMany({
      orderBy: [
        {
          order: "asc",
        },
      ],
    });

    return NextResponse.json(sliders);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
