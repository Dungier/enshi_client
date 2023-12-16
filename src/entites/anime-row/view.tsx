import { FC } from "react";
import { IAnimeRow } from "./types";
import { Anime } from "@/shared/components/anime";

export const AnimeRow: FC<IAnimeRow> = ({ anime }) => {
  return (
    <div>
      {anime.map((item) => (
        <Anime anime={item} key={item.anime_id} />
      ))}
    </div>
  );
};
