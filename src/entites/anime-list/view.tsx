"use client";

import { FC, useState } from "react";
import { IAnimeList } from "./types";
import { Pagination } from "@/shared/components/pagination";
import { Anime } from "@/shared/components/anime";
import { useQuery } from "@tanstack/react-query";
import { getHighRated, getNew, getTop } from "./model";

export const AnimeList: FC<IAnimeList> = ({ anime, count, type }) => {
  const [page, setPage] = useState<number>(1);
  const { data: animes, isLoading } = useQuery({
    queryKey: [type, page],
    queryFn: async () => {
      if (type === "high-rated") {
        return await getHighRated({ page });
      } else if (type === "new") {
        return await getNew({ page });
      } else if (type === "top") {
        return await getTop({ page });
      }
    },
    initialData: page === 1 ? anime : [],
  });

  return !isLoading ? (
    <div>
      {animes &&
        animes.map((item) => <Anime anime={item} key={item.anime_id} />)}
      <Pagination count={count} setPage={setPage} />
    </div>
  ) : null;
};
