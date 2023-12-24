"use client";

import { FC } from "react";
import { ICatalogPage } from "./types";
import { AnimeList } from "@/entites/anime-list";
import { AnimeFilter } from "@/features/anime-filter";

export const CatalogPage: FC<ICatalogPage> = ({ anime, count }) => {

  return (
    <section>
      <AnimeFilter />
      <AnimeList
        anime={anime}
        count={count}
        type={"catalog"}
      />
    </section>
  );
};
