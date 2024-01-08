"use client";

import { FC, useState } from "react";
import { IAnimeList } from "./types";
import { Pagination } from "@/shared/components/pagination";
import { Anime } from "@/shared/components/anime";
import { useQuery } from "@tanstack/react-query";
import { getCatalog, getHighRated, getNew, getTop } from "./model";
import { IAnime } from "@/shared/types/anime.types";
import { useAnimeFilters } from "@/shared/context/anime-filter";

export const AnimeList: FC<IAnimeList> = ({ anime, count, type }) => {
  const [page, setPage] = useState<number>(1);
  const [isRendered, setIsDataProceed] = useState<boolean>(false);
  const { genres, statuses, years } = useAnimeFilters();
  const queryFnMapping = {
    catalog: getCatalog,
    top: getTop,
    "high-rated": getHighRated,
    new: getNew,
  };

  const { data: animes, isLoading } = useQuery({
    queryKey: [type, page, genres, years, statuses],
    queryFn: async () => {
      if (type === "catalog") {
        const queryFn = queryFnMapping[type];
        const data = await queryFn({ page }, { genres, years, statuses });
        setIsDataProceed(true);
        return data;
      } else {
        const queryFn = queryFnMapping[type];
        const data = await queryFn({ page });
        setIsDataProceed(true);
        return data;
      }
    },

    initialData: !isRendered
      ? { anime: anime as IAnime[], count }
      : { anime: [] as IAnime[], count },
  });
  if (isLoading) return null;

  return (
    <div>
      {animes?.anime &&
        animes.anime.map((item) => (
          <Anime anime={item as IAnime} key={item.anime_id} />
        ))}
      <Pagination
        count={type === "catalog" ? animes?.count : count}
        setPage={setPage}
      />
    </div>
  );
};
