import { AnimeInfo } from "@/entites/anime-info";
import { AnimePlayer } from "@/entites/anime-player";
import { IAnime } from "@/shared/types/anime.types";
import { FC } from "react";

export const AnimePage: FC<{ anime: Omit<IAnime, "seasons"> }> = ({
  anime,
}) => {
  return (
    <section>
      <AnimeInfo anime={anime} />
      <AnimePlayer anime={anime} />
    </section>
  );
};
