import { FC } from "react";
import { IAnimeInfo } from "./types";
import Image from "next/image";
import { Typography } from "@mui/material";
import { FavouriteButton } from "./lib/favourite-button";

export const AnimeInfo: FC<IAnimeInfo> = ({ anime }) => {
  return (
    <div>
      <Image
        src={anime.material_data.poster_url}
        alt={anime.title}
        width={100}
        height={100}
      />
      <div>
        <Typography>{anime.title}</Typography>
        <div>
          <div>
            <Typography>Год: {anime.year} г.</Typography>
          </div>
          <div>
            <Typography>
              Эпизоды: {anime.last_episode}/{anime.episodes_count}
            </Typography>
          </div>
          <div>
            <Typography>
              Жанр: {anime.material_data.genres.slice(0, 2).join(", ")}
            </Typography>
          </div>
        </div>
        <Typography>{anime.material_data.description}</Typography>
      </div>
      <FavouriteButton anime_id={anime.anime_id} />
    </div>
  );
};
