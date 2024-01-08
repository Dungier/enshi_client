import { FC } from "react";
import { ITopPage } from "./types";
import { AnimeList } from "@/entites/anime-list";
import { Typography } from "@mui/material";
import Image from "next/image";
import Ic_Star from "@/assets/icons/ic_star.svg";
import { AnimeFilterProvider } from "@/shared/context/anime-filter";

export const TopPage: FC<ITopPage> = ({ anime, count }) => {
  return (
    <div>
      <Typography>
        ТОП - 100 аниме <Image src={Ic_Star} alt={"ТОП - 100 аниме"} />
      </Typography>
      <AnimeFilterProvider>
        <AnimeList anime={anime} count={count} type={"top"} />
      </AnimeFilterProvider>
    </div>
  );
};
