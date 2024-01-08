"use client";
import { FC } from "react";
import { AnimesToDisplayProps } from "./types";
import { Anime } from "@/shared/components/anime";

export const AnimesToDisplay: FC<AnimesToDisplayProps> = ({
  animes,
  isLoading,
}) => {
  if (isLoading) return null;
  return (
    <div>
      {animes &&
        animes.map((anime) => <Anime key={anime.anime_id} anime={anime} />)}
    </div>
  );
};
