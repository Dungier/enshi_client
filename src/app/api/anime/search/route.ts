"use server";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/configs/prisma.config";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const limit = Number(url.searchParams.get("limit"));
  const page = Number(url.searchParams.get("page"));
  try {
    if (!query || !limit || !page) {
      return new NextResponse("Invalid request parameters", {
        status: 400,
      });
    }

    const skip = (page - 1) * limit;

    const animeList = await prisma.anime.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            title_orig: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            other_title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
        blocked: false,
      },
      include: { material_data: true },
      skip: skip,
      take: limit,
    });

    const totalItems = await prisma.anime.count({
      where: {
        rating: {
          gte: 0,
          lte: 10,
        },
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            title_orig: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            other_title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return NextResponse.json({
      anime: animeList,
      page: page,
      totalPages: Math.ceil(totalItems / limit),
      totalItems,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
