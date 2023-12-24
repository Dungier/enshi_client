"use server";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/configs/prisma.config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { login, email, password } = body;
    if (!login || !email || !password)
      return new NextResponse("Нет полей login или email или password ", {
        status: 400,
      });
    const emailExist = await prisma.user.findUnique({
      where: { email },
    });
    const loginExist = await prisma.user.findUnique({
      where: { login },
    });
    if (emailExist || loginExist)
      return new NextResponse("Email или логин заняты", {
        status: 402,
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        login,
        email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
        admin: false,
      },
    });
    await prisma.viewed.create({
      data: {
        user_id: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    await prisma.favourite.create({
      data: {
        user_id: user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
