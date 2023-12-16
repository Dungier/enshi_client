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
    const { slider_id } = body;
    if (!slider_id)
      return new NextResponse("Invalid body ", {
        status: 400,
      });

    const slider = await prisma.homeSlider.delete({
      where: {
        id: slider_id,
      },
    });
    return NextResponse.json(slider);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
