"use client";

import { ReactNode, useState } from "react";
import { AnimeFilterContextType, AnimeFilterContext } from "./context";
import { FilterType } from "@/features/anime-filter/types";

export const AnimeFilterProvider = ({ children }: { children: ReactNode }) => {
  const [genres, setGenres] = useState<FilterType[]>([]);
  const [years, setYears] = useState<FilterType[]>([]);
  const [statuses, setStatuses] = useState<FilterType[]>([]);

  const contextValue: AnimeFilterContextType = {
    genres,
    setGenres,
    years,
    setYears,
    statuses,
    setStatuses,
  };

  return (
    <AnimeFilterContext.Provider value={contextValue}>
      {children}
    </AnimeFilterContext.Provider>
  );
};
