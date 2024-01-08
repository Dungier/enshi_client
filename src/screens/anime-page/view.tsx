"use server";

import { AnimeInfo } from "@/entites/anime-info";
import { AnimePlayer } from "@/entites/anime-player";
import { SimilarAnime } from "@/entites/similar-anime";
import { IAnime } from "@/shared/types/anime.types";
import { FC } from "react";

export const AnimePage: FC<{ anime: IAnime }> = ({ anime }) => {
  return (
    <section>
      <AnimeInfo anime={anime} />
      <AnimePlayer anime={anime} />
      <SimilarAnime anime={anime} />
    </section>
  );
};
