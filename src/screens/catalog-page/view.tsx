"use client";

import { FC } from "react";
import { ICatalogPage } from "./types";
import { AnimeList } from "@/entites/anime-list";
import { AnimeFilter } from "@/features/anime-filter";
import {AnimeFilterProvider} from "@/shared/context/anime-filter";

export const CatalogPage: FC<ICatalogPage> = ({ anime, count }) => {

  return (
    <section>
        <AnimeFilterProvider>
            <AnimeFilter />
            <AnimeList
                anime={anime}
                count={count}
                type={"catalog"}
            />
        </AnimeFilterProvider>

    </section>
  );
};
