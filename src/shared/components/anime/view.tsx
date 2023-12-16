import { IAnime } from "@/shared/types/anime.types";
import { FC } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";
export const Anime: FC<{ anime: IAnime }> = ({ anime }) => {
  return (
    <Link href={`/anime/${anime.anime_id}`}>
      <Image
        src={anime.material_data.poster_url}
        alt={anime.title}
        width={200}
        height={200}
      />
      <Typography>{anime.title}</Typography>
    </Link>
  );
};
