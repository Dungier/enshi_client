"use server";

import { ProfilePage } from "@/screens/profile-page";
import { getServerSession } from "next-auth";
import prisma from "@/configs/prisma.config";
import { IUser } from "@/shared/types/user.type";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession();

  const user = await prisma.user.findUnique({
    where: {
      email: String(session?.user?.email),
    },
  });

  if (!user) redirect("/");

  return <ProfilePage user={user as IUser} />;
}
