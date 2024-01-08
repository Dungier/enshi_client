"use client";

import { FC } from "react";
import { ISimilarAnime } from "./types";
import { AnimeRow } from "../anime-row";
import { useQuery } from "@tanstack/react-query";
import { getSimilarAnime } from "./model";
import { IAnime } from "@/shared/types/anime.types";
import { Typography } from "@mui/material";

export const SimilarAnime: FC<ISimilarAnime> = ({ anime }) => {
  const { data: animes, isLoading } = useQuery({
    queryKey: ["get-similar-anime"],
    queryFn: async () => await getSimilarAnime(anime),
  });

  return (
    !isLoading &&
    animes && (
      <>
        <Typography variant={"h3"}>Похожие</Typography>
        <AnimeRow anime={animes as IAnime[]} />
      </>
    )
  );
};
