"use server";

import { getServerSession } from "next-auth";
import prisma from "@/configs/prisma.config";
import { redirect } from "next/navigation";
import { SettingsPage } from "@/screens/settings-page";

export default async function Settings() {
  const session = await getServerSession();

  const user = await prisma.user.findUnique({
    where: {
      email: String(session?.user?.email),
    },
  });

  if (!user) redirect("/");

  return <SettingsPage />;
}
