"use server";
import { FC } from "react";
import { ProfileWallpaperProps } from "./types";
import Image from "next/image";

export const ProfileWallpaper: FC<ProfileWallpaperProps> = ({
  wallpaper_url,
}) => {
  return (
    <section style={{ width: "100%", position: "relative", height: "25rem" }}>
      <Image src={wallpaper_url} alt={"Обои Профиля"} fill />
    </section>
  );
};
