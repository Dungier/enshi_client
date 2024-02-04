"use client";
import { FC } from "react";
import { ProfileWallpaperProps } from "./types";
import Image from "next/image";

export const ProfileWallpaper: FC<ProfileWallpaperProps> = ({
  wallpaper_url,
}) => {
  return (
    <section
      style={{
        width: "100%",
        height: "21.875rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image
        src={wallpaper_url}
        alt={"Обои Профиля"}
        width={1950}
        height={410}
        objectFit={"cover"}
      />
    </section>
  );
};
