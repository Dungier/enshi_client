"use server";

import { FC } from "react";
import { ProfilePageProps } from "./types";
import { ProfileWallpaper } from "@/shared/components/profile-wallpaper";
import { UserStatistic } from "@/entites/user-statistic";
import { UserHistory } from "@/entites/user-history";
import { UserHistoryModeProvider } from "@/shared/context/history-mode";
import { UserCard } from "@/widgets/user-card";

export const ProfilePage: FC<ProfilePageProps> = ({ user }) => {
  return (
    <>
      <ProfileWallpaper wallpaper_url={user.wallpaper_url} />
      <UserCard user={user} />
      <UserStatistic user_id={user.id} />
      <UserHistoryModeProvider>
        <UserHistory user_id={user.id} />
      </UserHistoryModeProvider>
    </>
  );
};
