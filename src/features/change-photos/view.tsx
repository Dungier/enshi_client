"use client";
import { ProfileWallpaper } from "@/shared/components/profile-wallpaper";
import { Box, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const ChangePhotos = () => {
  const { data } = useSession();
  const user = data?.user as {
    wallpaper_url: string;
    avatar_url: string;
    login: string;
  };

  return (
    user && (
      <Box>
        <ProfileWallpaper wallpaper_url={user?.wallpaper_url} />
        <Button>Сменить</Button>
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={100}
          height={100}
        />
        <Button>Сменить</Button>
      </Box>
    )
  );
};
